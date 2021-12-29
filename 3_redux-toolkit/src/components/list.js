import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as postsActions from '../modules/actions/posts';
import Post from './post';
import styles from '../styles/list.module.css';

const List = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(postsActions.getPosts());
  }, []);

  return (
    <ul className={styles.container}>
      {posts.data && posts.data.length > 0 && posts.data.map((item) => <Post key={item.id} {...item} />)}
    </ul>
  );
};

export default List;
