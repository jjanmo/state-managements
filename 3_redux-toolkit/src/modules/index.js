import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import postsReducer from './reducers/posts';
import userReducer from './reducers/user';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(logger, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(logger, thunkMiddleware));

export const configure = (_) => createStore(rootReducer, _, enhancer);
