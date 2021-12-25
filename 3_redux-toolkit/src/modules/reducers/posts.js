import produce from 'immer';
import * as POSTS from '../actions/posts';

const initialState = [
  {
    id: 123131241,
    author: 'jjanmo',
    title: 'hello world',
    description: 'this is redux study',
  },
];

const postsReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case POSTS.ADD_POST: {
        draft.push(action.post);
        break;
      }
      case POSTS.DELETE_POST: {
        const index = draft.findIndex((post) => post.id === action.id);
        draft.splice(index, 1);
        break;
      }
      case POSTS.EDIT_POST: {
        const index = draft.findIndex((post) => post.id === action.data.id);
        draft[index].title = action.data.title;
        draft[index].description = action.data.description;
        break;
      }
      default: {
        return prevState;
      }
    }
  });
};

export default postsReducer;
