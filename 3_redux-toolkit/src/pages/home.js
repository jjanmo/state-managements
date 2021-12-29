import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import List from '../components/list';
import styles from '../styles/header.module.css';

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [user]);

  return (
    <>
      {authenticated ? (
        <Header />
      ) : (
        <div className={styles.nContainer}>
          <h1 className={styles.title}>헬로우 포스트</h1>
          <div className={styles.linkContainer}>
            <Link className={styles.link} to="/login">
              로그인
            </Link>
            <Link className={styles.link} to="/signup">
              회원가입
            </Link>
          </div>
        </div>
      )}
      <div className={styles.line} />
      <List />
    </>
  );
};

export default Home;
