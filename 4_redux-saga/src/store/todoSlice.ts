import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  content: string
  done: boolean
}
export interface BasePayload {
  id: string
}
export interface PayloadWithContent extends BasePayload {
  content: string
}

const initialState: Todo[] = []

const slice = createSlice({
  name: '@todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<PayloadWithContent>) => {
      const { payload } = action
      state.push({
        id: payload.id,
        content: payload.content,
        done: false,
      })
    },
    updateStatus: (state, action: PayloadAction<BasePayload>) => {
      const { payload } = action
      const todo = state.find((todo) => todo.id === payload.id)!
      todo.done = !todo.done
    },
    deleteTodo: (state, action: PayloadAction<BasePayload>) => {
      const findedIdx = state.findIndex((todo) => todo.id === action.payload.id)!
      state.splice(findedIdx, 1)
    },
    editTodo: (state, action: PayloadAction<PayloadWithContent>) => {
      const { payload } = action
      const todo = state.find((todo) => todo.id === payload.id)!
      todo.content = payload.content!
    },
  },
})

export const actions = slice.actions

export default slice.reducer
