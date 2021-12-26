import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/post.module.css';

const Post = ({ title, author, date }) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to="/sadfasf">
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>{`${author} | ${date}`}</div>
      </Link>
    </li>
  );
};

export default Post;
