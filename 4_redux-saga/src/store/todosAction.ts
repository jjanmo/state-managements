import { createAction } from '@reduxjs/toolkit'

export const ADD_TODO = '@todos/ADD_TODO'
export const UPDATE_STATUS = '@todos/UPDATE_STATUS'
export const DELETE_TODO = '@todos/DELETE_TODO'
export const EDIT_TODO = '@todos/EDIT_TODO'

interface PayloadType {
  id: string
  content?: string
  done?: boolean
}

export const addTodo = createAction<PayloadType>(ADD_TODO)
export const updateStatus = createAction<PayloadType>(UPDATE_STATUS)
export const deleteTodo = createAction<PayloadType>(DELETE_TODO)
export const editTodo = createAction<PayloadType>(EDIT_TODO)
