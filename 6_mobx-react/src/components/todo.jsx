import { memo, useRef } from 'react';
import styles from './comp.module.css';
import { useTodosContext } from '../useStore';

const Todo = ({ id, content, date, isDone }) => {
  const { updateTodoStatus, deleteTodo, selectEditing } = useTodosContext();
  const checkbox = useRef();

  const handleClickStatus = () => {
    updateTodoStatus(id);
  };

  const handleClickSelect = () => {
    selectEditing({
      id,
      content,
      date,
    });
  };
  const hadleClickDelete = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <label
        className={styles.label}
        htmlFor={id}
        onClick={handleClickStatus}
      />
      <div className={styles.info}>
        <input ref={checkbox.current} type="checkbox" id={id} />
        <span className={isDone ? styles.done : styles.notDone}>{content}</span>
        <span>{date}</span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.selectBtn} onClick={handleClickSelect}>
          Edit
        </button>
        <button className={styles.deleteBtn} onClick={hadleClickDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default memo(Todo);
