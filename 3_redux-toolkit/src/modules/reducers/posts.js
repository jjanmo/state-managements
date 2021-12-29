import produce from 'immer';
import * as POSTS from '../actions/posts';

const initialState = {
  error: null,
  message: '',
  data: [],
};
/*
  posts [
    {
    - id
    - author
    - title
    - description
    }
  ]
*/

const postsReducer = (prevState = initialState, action) => {
  const { type, payload, error } = action;

  return produce(prevState, (draft) => {
    switch (type) {
      case POSTS.GET_POSTS_REJECTED:
      case POSTS.ADD_POST_REJECTED:
      case POSTS.EDIT_POST_REJECTED:
      case POSTS.DELETE_POST_REJECTED: {
        draft.error = error;
        break;
      }
      case POSTS.GET_POSTS_FULFILLED: {
        draft.data = payload;
        break;
      }
      case POSTS.ADD_POST_FULFILLED:
      case POSTS.EDIT_POST_FULFILLED:
      case POSTS.DELETE_POST_FULFILLED: {
        //message?
        break;
      }

      case POSTS.GET_POSTS_PENDING:
      case POSTS.ADD_POST_PENDING:
      case POSTS.EDIT_POST_PENDING:
      case POSTS.DELETE_POST_PENDING: {
        //~~
        break;
      }

      case POSTS.SET_MESSAGE: {
        draft.message = payload;
        break;
      }
      case POSTS.CLEAR_MESSAGE: {
        draft.message = '';
        break;
      }
      default: {
        return prevState;
      }
    }
  });
};

export default postsReducer;
