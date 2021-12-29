import { getPostsAPI, deletePostAPI, addPostAPI, editPostAPI } from '../../api/posts';

export const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
export const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED';
export const GET_POSTS_REJECTED = 'GET_POSTS_REJECTED';
export const ADD_POST_PENDING = 'ADD_POST_PENDING';
export const ADD_POST_FULFILLED = 'ADD_POST_FULFILLED';
export const ADD_POST_REJECTED = 'ADD_POST_REJECTED';
export const DELETE_POST_PENDING = 'DELETE_POST_PENDING';
export const DELETE_POST_FULFILLED = 'DELETE_POST_FULFILLED';
export const DELETE_POST_REJECTED = 'DELETE_POST_REJECTED';
export const EDIT_POST_PENDING = 'EDIT_POST_PENDING';
export const EDIT_POST_FULFILLED = 'EDIT_POST_FULFILLED';
export const EDIT_POST_REJECTED = 'EDIT_POST_REJECTED';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const getPostsPending = () => ({
  type: GET_POSTS_PENDING,
});
export const getPostsFufilled = (posts) => ({
  type: GET_POSTS_FULFILLED,
  payload: posts,
});
export const getPostsRejected = (error) => ({
  type: GET_POSTS_REJECTED,
  error,
});

export const addPostPending = () => ({
  type: ADD_POST_PENDING,
});
export const addPostFufilled = (message) => ({
  type: ADD_POST_FULFILLED,
  payload: message,
});
export const addPostRejected = (error) => ({
  type: ADD_POST_REJECTED,
  error,
});

export const deletePostPending = () => ({
  type: DELETE_POST_PENDING,
});
export const deletePostFufilled = (message) => ({
  type: DELETE_POST_FULFILLED,
  payload: message,
});
export const deletePostRejected = (error) => ({
  type: DELETE_POST_REJECTED,
  error,
});

export const editPostPending = () => ({
  type: EDIT_POST_PENDING,
});
export const editPostFufilled = (message) => ({
  type: EDIT_POST_FULFILLED,
  payload: message,
});
export const editPostRejected = (error) => ({
  type: EDIT_POST_REJECTED,
  error,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const getPosts = () => async (dispatch) => {
  dispatch(getPostsPending());
  try {
    const response = await getPostsAPI();
    if (response.status === 200) {
      dispatch(getPostsFufilled(response.data));
    }
  } catch (error) {
    dispatch(getPostsRejected(error));
  }
};
export const deletePost = (id) => async (dispatch) => {
  dispatch(deletePostPending());
  try {
    const response = await deletePostAPI(id);
    if (response.status === 200) {
      dispatch(deletePostFufilled('Deleted'));
    }
  } catch (error) {
    dispatch(deletePostRejected(error));
  }
};
export const addPost = (data) => async (dispatch) => {
  dispatch(addPostPending());
  try {
    const response = await addPostAPI(data);
    if (response.status === 201) {
      dispatch(addPostFufilled(response.statusText));
    }
  } catch (error) {
    dispatch(addPostRejected(error));
  }
};
export const editPost = (body) => async (dispatch) => {
  const { id, data } = body;
  dispatch(editPostPending());
  try {
    const response = await editPostAPI({ id, data });
    if (response.status === 200) {
      dispatch(editPostFufilled('Edited'));
    }
  } catch (error) {
    dispatch(editPostRejected(error));
  }
};
