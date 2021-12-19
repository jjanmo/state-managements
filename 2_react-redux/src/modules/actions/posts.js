export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});
export const deletePost = (postID) => ({
  type: DELETE_POST,
  payload: postID,
});
export const editPost = (data) => ({
  type: EDIT_POST,
  payload: data,
});
