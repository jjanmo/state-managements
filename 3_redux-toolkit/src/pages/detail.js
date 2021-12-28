import React, { useCallback, useEffect, useState } from 'react';
import styles from '../styles/detail.module.css';

const Detail = ({ title = '헬로우 포스트 헬로우 블로그', author = 'Michael', date = '2022.01.01' }) => {
  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.info}>
        <div>{`${author} | ${date}`}</div>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.editButton}>수정</button>
        <button className={styles.homeButton}>홈</button>
        <button className={styles.deleteButton}>삭제</button>
      </div>
    </div>
  );
};

export default Detail;
