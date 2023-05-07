import styles from './comp.module.css';

const Modal = () => {
  return (
    <>
      <div className={styles.dimmed}></div>
      <div className={styles.modalContainer}>
        <button className={styles.close}>X</button>
        <div className={styles.modalInput}>
          <label htmlFor="todo">Update Your Todo</label>
          <input
            type="text"
            name="todo"
            id="todo"
            maxLength={18}
            // onChange={state.handleChangeTodo}
            // value={state.todo}
          />
        </div>

        <div className={styles.modalInput}>
          <label htmlFor="date">Update Deadline</label>
          <input
            type="date"
            name="date"
            id="date"
            // onChange={state.handleChangeDate}
            // value={state.date}
          />
        </div>

        <button className={styles.updateBtn}>UPDATE</button>
      </div>
    </>
  );
};

export default Modal;
