import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from '../styles/form.module.css';

const Form = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>포스트</h1>
      <form className={styles.form}>
        <input className={styles.input} name="title" type="text" placeholder="제목 입력" required />
        <textarea className={styles.textarea} placeholder="내용 입력" required />
      </form>
      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton}>취소</button>
        <button className={styles.completeButton}>완료</button>
      </div>
    </div>
  );
};

export default Form;
