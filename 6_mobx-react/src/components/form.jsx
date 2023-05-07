import { observer } from 'mobx-react';
import styles from './comp.module.css';

const Form = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <label htmlFor="todo">Enter Your Todo</label>
          <input type="text" name="todo" id="todo" maxLength={18} />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="date">Enter Deadline</label>
          <input type="date" name="date" id="date" />
        </div>
      </div>
      <button className={styles.addBtn}>ADD</button>
    </section>
  );
};

export default observer(Form);
