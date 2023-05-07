import { observer, useLocalObservable } from 'mobx-react';
import styles from './comp.module.css';
import { useTodosContext } from '../useStore';

const Form = () => {
  const { addTodo } = useTodosContext();
  const state = useLocalObservable(() => ({
    todo: '',
    date: '',
    handleChangeTodo(e) {
      this.todo = e.target.value;
    },
    handleChangeDate(e) {
      this.date = e.target.value;
    },
    clearData() {
      this.todo = '';
      this.date = '';
    },
  }));

  const handleClickAdd = () => {
    if (!state.todo || !state.date) return;

    addTodo({
      id: Date.now(),
      content: state.todo,
      date: state.date,
      isDone: false,
    });

    state.clearData();
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <label htmlFor="todo">Enter Your Todo</label>
          <input
            type="text"
            name="todo"
            id="todo"
            maxLength={18}
            onChange={state.handleChangeTodo}
            value={state.todo}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="date">Enter Deadline</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={state.handleChangeDate}
            value={state.date}
          />
        </div>
      </div>
      <button className={styles.addBtn} onClick={handleClickAdd}>
        ADD
      </button>
    </section>
  );
};

export default observer(Form);
