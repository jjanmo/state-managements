import React from 'react';
import Post from './post';

const List = ({ posts }) => {
  return <ul>{posts && posts.length > 0 && posts.map((post) => <Post key={post.id} {...post} />)}</ul>;
};

export default List;
