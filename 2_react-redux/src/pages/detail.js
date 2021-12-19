import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as postsActions from '../modules/actions/posts';

const styles = {
  wrapper: {
    backgroundColor: '#eee',
    width: '400px',
    height: '500px',
    borderRadius: '10px',
    margin: '3rem',
    padding: '2rem 3rem',
    color: '#2c3e50',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
  },
  label: {
    color: '#95a5a6',
    fontSize: '1.2rem',
  },
  link: {
    margin: '1rem 10px',
  },
  buttonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '1rem',
  },
  linkContainer: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
  },
};

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: postID } = useParams();
  const { posts, user } = useSelector(
    (state) => ({
      posts: state.posts,
      user: state.user,
    }),
    shallowEqual
  );

  const [post, setPost] = useState({});

  const filterPost = useCallback(() => {
    return posts.filter((post) => post.id === Number(postID))[0];
  }, [posts, postID]);

  useEffect(() => {
    const _post = filterPost();
    setPost(_post);
  }, [filterPost]);

  const onClickDelete = useCallback(() => {
    if (!user.info) {
      alert('로그인을 해야합니다.');
      return;
    }
    dispatch(postsActions.deletePost(Number(postID)));
    navigate('/', { replace: true });
  }, []);

  const onClickEdit = useCallback(() => {
    if (!user.info) {
      alert('로그인을 해야합니다.');
      return;
    }
    navigate(`/form/${postID}`);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.buttonContainer}>
        <button onClick={onClickEdit}>수정</button>
        <button onClick={onClickDelete}>삭제</button>
      </div>
      <h1>
        <label style={styles.label}>제목</label>
        <br />
        {post.title}
      </h1>
      <p>
        <label style={styles.label}>작가</label>
        <br />
        {post.author}
      </p>
      <p>
        <label style={styles.label}>설명</label>
        <br />
        {post.description}
      </p>
      <div style={styles.linkContainer}>
        <Link style={styles.link} to="/">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Detail;
