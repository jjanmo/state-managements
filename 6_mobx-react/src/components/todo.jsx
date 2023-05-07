import { memo, useRef } from 'react';
import styles from './comp.module.css';
import { useTodosContext } from '../useStore';

const Todo = ({ id, content, date, isDone }) => {
  const { updateTodoStatus, todos } = useTodosContext();
  const checkbox = useRef();

  const handleClick = () => {
    updateTodoStatus(id);
  };

  return (
    <li>
      <label className={styles.label} for={id} onClick={handleClick} />
      <div className={styles.info}>
        <input ref={checkbox.current} type="checkbox" id={id} />
        <span className={isDone ? styles.done : styles.notDone}>{content}</span>
        <span>{date}</span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.editBtn}>Edit</button>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
    </li>
  );
};

export default memo(Todo);
