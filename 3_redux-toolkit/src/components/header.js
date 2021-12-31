import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authSlice from '../modules/slice/auth';
import styles from '../styles/header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const user = useSelector((state) => state.auth.user);
  const [count, setCount] = useState(0);

  const onClickLogout = useCallback(() => {
    dispatch(authSlice.actions.logout());
  }, []);

  useEffect(() => {
    const name = user.nickname;
    const _count = posts.filter((post) => post.author === name).length;
    setCount(_count);
  }, [posts]);

  return (
    <div className={styles.lContainer}>
      <div className={styles.searchContainer}>
        <div className={styles.result}>
          <span className={styles.name}>JJanmo</span>
          님의 포스트 : <span className={styles.count}>{count}</span>개
        </div>
        <Link className={styles.link} to="/form">
          포스트 추가
        </Link>
      </div>
      <div className={styles.userInfoContainer}>
        <div>JJanmo</div>
        <div>jjanmo@hanmail.net</div>
        <button className={styles.button} onClick={onClickLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Header;
