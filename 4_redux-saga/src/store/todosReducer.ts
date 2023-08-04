// create reducer

import { createReducer } from '@reduxjs/toolkit'
import { addTodo, deleteTodo, editTodo, updateStatus } from './todosAction'

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
      const todo = state.find((todo) => todo.id === payload.id)!
      todo.done = !todo.done
    })
    .addCase(deleteTodo, (state, action) => {
      const findedIdx = state.findIndex((todo) => todo.id === action.payload.id)!
      state.splice(findedIdx, 1)
    })
    .addCase(editTodo, (state, action) => {
      const { payload } = action

      return state.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              content: payload.content!,
              done: payload.done!,
            }
          : todo
      )
    })
})

export default todosReducer
