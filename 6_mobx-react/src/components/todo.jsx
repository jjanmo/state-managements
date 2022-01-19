import { memo } from 'react';
import styles from './comp.module.css';

const Todo = ({ content, date, isDone }) => {
  return (
    <li>
      <div className={styles.info}>
        <input type="checkbox" />
        <span>{content}</span>
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
