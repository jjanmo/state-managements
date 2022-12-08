import { atom } from 'recoil'
import { FilteringType, Todo } from './types'

export const todoListAtom = atom<Todo[]>({
  key: 'todoList',
  default: [],
})

export const filteringAtom = atom<FilteringType | null>({
  key: 'filteringKey',
  default: null,
})
