export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});
export const deletePost = ({ postID }) => ({
  type: DELETE_POST,
  payload: postID,
});
export const updatePost = ({ postID, data }) => ({
  type: UPDATE_POST,
  payload: {
    id: postID,
    data,
  },
});
