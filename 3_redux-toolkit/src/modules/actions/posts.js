import { getPostsAPI } from '../../api/posts';

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
export const SET_MESSAGE = 'SET_MESSAGE';
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
export const addPostFufilled = () => ({
  type: ADD_POST_FULFILLED,
});
export const addPostRejected = (error) => ({
  type: ADD_POST_REJECTED,
  error,
});

export const deletePostPending = () => ({
  type: DELETE_POST_PENDING,
});
export const deletePostFufilled = () => ({
  type: DELETE_POST_FULFILLED,
});
export const deletePostRejected = (error) => ({
  type: DELETE_POST_REJECTED,
  error,
});

export const editPostPending = () => ({
  type: EDIT_POST_PENDING,
});
export const editPostFufilled = () => ({
  type: EDIT_POST_FULFILLED,
});
export const editPostRejected = (error) => ({
  type: EDIT_POST_REJECTED,
  error,
});

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
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
