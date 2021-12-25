import React, { useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as postsActions from '../modules/actions/posts';

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
  const { id: postID } = useParams();
  const { user, posts } = useSelector((state) => ({ user: state.user, posts: state.posts }), shallowEqual);
  const [post, setPost] = useState({
    title: '',
    description: '',
  });

  const { title, description } = post;
  const filteredPost = useRef(posts.filter((post) => post.id === Number(postID))[0]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !description) {
        alert('닉네임 혹은 비밀번호를 입력하세요');
        return;
      }
      if (postID) {
        dispatch(
          postsActions.editPost({
            ...filteredPost,
            ...post,
          })
        );
      } else {
        dispatch(
          postsActions.addPost({
            ...post,
            id: Date.now(),
            author: user.info.nickname,
          })
        );
      }

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

  useEffect(() => {
    if (postID) {
      setPost(filteredPost.current);
    }
  }, []);

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
        <input type="submit" value={postID ? '수정' : '입력'} />
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Form;
