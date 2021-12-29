import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
  // posts: postsSlice.reducer,
});

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(logger, ReduxThunk))
    : composeWithDevTools(applyMiddleware(logger, ReduxThunk));

export const configure = () => createStore(rootReducer, enhancer);
