import React, { useState } from 'react';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <div className={styles.lContainer}>
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
    </div>
  );
};

export default Header;
