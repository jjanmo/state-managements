import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import authSlice from './reducers/auth';
import postsReducer from './reducers/posts';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  posts: postsReducer,
});

export const configure = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });
