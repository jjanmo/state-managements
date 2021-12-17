import * as POSTS from '../actions/posts';

const initialState = [
  {
    id: 123131241,
    author: 'jjanmo',
    title: 'hello world',
    description: 'this is redux study',
  },
];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS.ADD_POST: {
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    }
    case POSTS.DELETE_POST: {
      return state.filter((post) => post.id !== action.payload);
    }
    case POSTS.UPDATE_POST: {
      return state.map((post) => (post.id === action.payload.id ? { ...post, ...action.payload.data } : post));
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
