import { atom } from 'recoil'
import { Todo } from './types'

export const todoListAtom = atom<Todo[]>({
  key: 'todoList',
  default: [],
})
