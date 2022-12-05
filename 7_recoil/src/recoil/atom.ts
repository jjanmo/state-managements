import { atom } from 'recoil'
import { FilteringKeyType, Todo } from './types'

export const todoListAtom = atom<Todo[]>({
  key: 'todoList',
  default: [],
})

export const filteringKeyAtom = atom<FilteringKeyType>({
  key: 'filteringKey',
  default: 'status/all',
})
