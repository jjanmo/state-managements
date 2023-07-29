// create reducer

import { createReducer } from '@reduxjs/toolkit'

// CRUD
const todosReducer = createReducer([], (builder) => {
  builder
    .addCase('ADD_TODO', (state, action) => {
      state.push(action.payload)
    })
    .addCase('UPDATE_STATUS', (state, action) => {
      const todo = state[action.payload.index]
      todo.done = !todo.done
    })
    .addCase('DELETE_TODO', (state, action) => {
      state.splice(action.payload.index, 1)
    })
})

export default todosReducer
