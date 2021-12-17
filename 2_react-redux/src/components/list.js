import React from 'react';
import Post from './post';
import { useSelector } from 'react-redux';

const List = () => {
  const posts = useSelector((state) => state.posts);

  return <ul>{posts && posts.length > 0 && posts.map((post) => <Post key={post.id} {...post} />)}</ul>;
};

export default List;
