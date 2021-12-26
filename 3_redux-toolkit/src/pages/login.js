import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>로그인</h1>
      <form className={styles.form}>
        <input type="text" placeholder="이메일 입력" />
        <input type="password" placeholder="비밀번호 입력" />
        <button className={styles.button}>로그인</button>
      </form>
      or
      <Link className={styles.link} to="/join">
        회원가입
      </Link>
    </div>
  );
};

export default Login;
