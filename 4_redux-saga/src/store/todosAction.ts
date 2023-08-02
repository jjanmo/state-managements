import { createAction } from '@reduxjs/toolkit'

export const addTodo = createAction('ADD_TODO')
export const updateStatus = createAction('UPDATE_STATUS')
export const deleteTodo = createAction('DELETE_TODO')
