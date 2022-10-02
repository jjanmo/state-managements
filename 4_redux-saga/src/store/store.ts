import { configureStore } from '@reduxjs/toolkit'
import syncCounterReducer from './syncCounter/syncCounterSlice'
import logger from 'redux-logger'

const rootReducer = {
  syncCounter: syncCounterReducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
