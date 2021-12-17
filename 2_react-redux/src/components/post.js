import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title }) => {
  return (
    <li>
      <Link
        to={{
          pathname: `/posts/${id}`,
        }}
      >
        {title}
      </Link>
    </li>
  );
};

export default Post;
