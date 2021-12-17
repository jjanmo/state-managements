import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from './reducers/posts';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

const loggingMiddleware = (store) => (next) => (action) => {
  console.log('✅ current action : ', action);

  next(action);
};

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

const enhancer = applyMiddleware(loggingMiddleware, thunkMiddleware);

export const configure = (_) => createStore(rootReducer, _, enhancer);
