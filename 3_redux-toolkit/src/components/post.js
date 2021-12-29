import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/post.module.css';

const Post = ({ title, author, date }) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to="/post/sdaf">
        <div className={styles.title}>{title.length > 16 ? `${title.slice(0, 16)}...` : title}</div>
        <div className={styles.info}>{`${author} | ${date}`}</div>
      </Link>
    </li>
  );
};

export default Post;
