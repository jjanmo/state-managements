import React from 'react';
import Post from './post';
import styles from '../styles/list.module.css';

const List = () => {
  const data = [
    {
      id: 1,
      title: '헬로우 리덕스 툴킷!!!',
      author: 'JJanmo',
      date: '2021.12.28',
    },
    {
      id: 2,
      title: '헬로우 포스트 헬로우 블로그',
      author: 'Michael',
      date: '2022.01.01',
    },
    {
      id: 3,
      title: '헬로우 리덕스 툴킷!!!',
      author: 'JJanmo',
      date: '2021.12.28',
    },
    {
      id: 4,
      title: '헬로우 포스트 헬로우 블로그',
      author: 'Michael',
      date: '2022.01.01',
    },
    {
      id: 4,
      title: '헬로우 리덕스 툴킷!!!',
      author: 'JJanmo',
      date: '2021.12.28',
    },
    {
      id: 6,
      title: '헬로우 포스트 헬로우 블로그',
      author: 'Michael',
      date: '2022.01.01',
    },
  ];

  return (
    <ul className={styles.container}>
      {data.map((item, index) => (
        <Post key={item.id} title={item.title} author={item.author} date={item.date} />
      ))}
    </ul>
  );
};

export default List;
