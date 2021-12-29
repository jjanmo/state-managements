import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import messageReducer from './reducers/message';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  // posts: postsSlice.reducer,
});

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(logger, ReduxThunk))
    : composeWithDevTools(applyMiddleware(logger, ReduxThunk));

export const configure = () => createStore(rootReducer, enhancer);
