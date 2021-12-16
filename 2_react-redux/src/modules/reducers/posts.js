import * as POSTS from '../actions/posts';

const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS.ADD_POST: {
      return [
        ...state.posts,
        {
          ...action.payload,
        },
      ];
    }
    case POSTS.DELETE_POST: {
      return state.posts.filter((post) => post.id !== action.payload);
    }
    case POSTS.UPDATE_POST: {
      return state.posts.map((post) => (post.id === action.payload.id ? { ...post, ...action.payload.data } : post));
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
