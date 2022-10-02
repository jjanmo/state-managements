import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SyncCounterState {
  count: number
}

const initialState: SyncCounterState = {
  count: 0,
}

export const syncCounterSlice = createSlice({
  name: 'sync-counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
  },
})

export const { increment: syncIncrement, decrement: syncDecrement } = syncCounterSlice.actions

export default syncCounterSlice.reducer
