import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/uForm.module.css';

const Join = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>
      <form className={styles.form}>
        <input className={styles.input} type="email" placeholder="이메일 입력" />
        <input className={styles.input} type="text" placeholder="닉네임 입력" />
        <input className={styles.input} type="password" placeholder="비밀번호 입력" />
        <input className={styles.input} type="password" placeholder="비밀번호 확인" />
        <button className={styles.button}>가입하기</button>
      </form>
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/login">
          로그인
        </Link>
        <Link className={styles.link} to="/">
          홈
        </Link>
      </div>
    </div>
  );
};

export default Join;
