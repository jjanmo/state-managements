// create reducer

import { createReducer } from '@reduxjs/toolkit'
import { addTodo, deleteTodo, updateStatus } from './todosAction'

export interface Todo {
  id: string
  content: string
  done: boolean
}

const initialState: Todo[] = []

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const { payload } = action
      state.push({
        id: payload.id,
        content: payload.content || '',
        done: false,
      })
    })
    .addCase(updateStatus, (state, action) => {
      const { payload } = action
      const todo = state.find((state) => state.id === payload.id)!
      todo.done = !todo.done
    })
    .addCase(deleteTodo, (state, action) => {
      const findedIdx = state.findIndex((state) => state.id === action.payload.id)!
      state.splice(findedIdx, 1)
    })
})

export default todosReducer
