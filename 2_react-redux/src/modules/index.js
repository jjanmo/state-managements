import { createStore, combineReducers } from 'redux';
import postsReducer from './reducers/posts';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export const configure = () => createStore(rootReducer);
