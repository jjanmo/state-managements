import { observer, useLocalObservable } from 'mobx-react';
import { useTodosContext } from '../useStore';
import styles from './comp.module.css';

const Modal = () => {
  const { editingData, selectEditing, editTodo } = useTodosContext();

  const state = useLocalObservable(() => ({
    todo: editingData.content,
    date: editingData.date,
    handleChangeTodo(e) {
      this.todo = e.target.value;
    },
    handleChangeDate(e) {
      this.date = e.target.value;
    },
  }));

  const handleClickClose = () => {
    selectEditing(null);
  };

  const handleClickEdit = () => {
    editTodo(editingData.id, {
      content: state.todo,
      date: state.date,
    });
    selectEditing(null);
  };

  return (
    <>
      <div className={styles.dimmed} onClick={handleClickClose}></div>
      <div className={styles.modalContainer}>
        <button className={styles.close} onClick={handleClickClose}>
          X
        </button>
        <div className={styles.modalInput}>
          <label htmlFor="todo">Edit Todo</label>
          <input
            type="text"
            name="todo"
            id="todo"
            maxLength={18}
            onChange={state.handleChangeTodo}
            value={state.todo}
          />
        </div>

        <div className={styles.modalInput}>
          <label htmlFor="date">Edit Deadline</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={state.handleChangeDate}
            value={state.date}
          />
        </div>

        <button className={styles.editBtn} onClick={handleClickEdit}>
          EDIT
        </button>
      </div>
    </>
  );
};

export default observer(Modal);
