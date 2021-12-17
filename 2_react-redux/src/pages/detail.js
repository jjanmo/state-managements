import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
    position: 'absolute',
    bottom: 0,
    left: '45%',
    marginBottom: '1rem',
  },
};

const Detail = () => {
  const { id: postID } = useParams();
  const posts = useSelector((state) => state.posts);
  const [post, setPost] = useState({});

  const filterPost = useCallback(() => {
    return posts.filter((post) => post.id === Number(postID))[0];
  }, [posts, postID]);

  useEffect(() => {
    const post = filterPost();
    setPost(post);
  }, [filterPost]);

  return (
    <div style={styles.wrapper}>
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
      <Link style={styles.link} to="/">
        Home
      </Link>
    </div>
  );
};

export default Detail;
