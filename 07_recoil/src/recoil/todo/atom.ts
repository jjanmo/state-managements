import { atom } from 'recoil'
import { ITodo } from './types'

export const todoListAtom = atom<ITodo[]>({
  key: 'todoList',
  default: [],
})
