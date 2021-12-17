import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postsActions from '../modules/actions/posts';
import { useNavigate } from 'react-router-dom';

const styles = {
  centering: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0',
  },
  input: {
    width: '400px',
    height: '30px',
    margin: '1rem 0',
  },
  textarea: {
    width: '400px',
    margin: '1rem 0',
  },
};

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [post, setPost] = useState({
    title: '',
    description: '',
  });

  const { title, description } = post;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !description) {
        alert('닉네임 혹은 비밀번호를 입력하세요');
        return;
      }
      dispatch(
        postsActions.addPost({
          ...post,
          id: Date.now(),
          author: user.info.nickname,
        })
      );

      setPost({
        title: '',
        description: '',
      });
      navigate('/', { replace: true });
    },
    [title, description]
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

  return (
    <div style={styles.centering}>
      <form style={styles.form} onSubmit={onSubmit}>
        <input
          style={styles.input}
          name="title"
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={onChange}
        />
        <textarea
          style={styles.textarea}
          placeholder="내용을 입력하세요"
          name="description"
          rows="10"
          value={description}
          onChange={onChange}
        />
        <input type="submit" value="입력" />
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Form;
