import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';

const Header = () => {
  const [loggedIn, isLoggedIn] = useState(true);

  return (
    <>
      <div className={styles.container}>
        {loggedIn ? (
          <>
            <div className={styles.searchContainer}>
              <div className={styles.result}>
                <span className={styles.name}>JJanmo</span>
                님의 포스트 : <button className={styles.count}>200</button>개
              </div>
              <input className={styles.input} type="text" placeholder="포스트 검색" />
            </div>
            <div className={styles.userInfoContainer}>
              <div>
                <button>JJanmo</button>님
              </div>
              <div>jjanmo@hanmail.net</div>
              <button className={styles.button}>로그아웃</button>
            </div>
          </>
        ) : (
          <div>
            <h1 className={styles.title}>헬로우 포스트</h1>
            <div className={styles.linkContainer}>
              <Link className={styles.link} to="/login">
                로그인
              </Link>
              <Link className={styles.link} to="/join">
                회원가입
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className={styles.line} />
    </>
  );
};

export default Header;
