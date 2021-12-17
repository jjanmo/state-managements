import React from 'react';

const Post = ({ title, description }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Post;
