import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todosReducer from './todosReducer'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

const rootReducer = combineReducers({
  todos: todosReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export default store
