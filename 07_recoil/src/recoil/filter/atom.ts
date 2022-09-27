import { atom } from 'recoil'
import { FilterStatus } from './types'

export const todoFilterStatusAtom = atom<FilterStatus>({
  key: 'todoFilterStatus',
  default: 'all',
})
