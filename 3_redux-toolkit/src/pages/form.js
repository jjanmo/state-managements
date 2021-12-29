import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as postsActions from '../modules/actions/posts';
import styles from '../styles/form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const message = useSelector((state) => state.posts.message);
  const [post, setPost] = useState({
    title: '',
    description: '',
  });

  const { title, description } = post;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !description) {
        alert('제목 혹은 내용을 입력하세요.');
        return;
      }

      const body = {
        author: user.nickname,
        title,
        description,
        date: Date.now(),
      };
      dispatch(postsActions.addPost(body));
    },
    [post]
  );

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setPost({
        ...post,
        [name]: value,
      });
    },
    [post]
  );

  const onClickCancel = useCallback(() => {
    navigate(-1);
  }, []);

  useEffect(() => {
    if (message === 'Created') {
      alert('포스트가 추가되었습니다.');
      navigate('/', { replace: true });
    }

    return () => {
      dispatch(postsActions.clearMessage());
    };
  }, [message]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>포스트</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          name="title"
          type="text"
          placeholder="제목 입력"
          value={title}
          onChange={onChange}
        />
        <textarea
          className={styles.textarea}
          name="description"
          placeholder="내용 입력"
          value={description}
          onChange={onChange}
        />
      </form>
      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton} onClick={onClickCancel}>
          취소
        </button>
        <button type="submit" className={styles.completeButton} onClick={onSubmit}>
          완료
        </button>
      </div>
    </div>
  );
};

export default Form;
