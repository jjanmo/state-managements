import { selector } from 'recoil'
import { filteringAtom, todoListAtom } from './atom'

export const filteredTodoList = selector({
  key: 'filteredTodoList',
  get: ({ get }) => {
    const todoList = get(todoListAtom)
    const filteringKey = get(filteringAtom)

    switch (filteringKey) {
      case 'priority/high': {
        return todoList.filter((todo) => todo['priority'] === 'high')
      }
      case 'priority/middle': {
        return todoList.filter((todo) => todo['priority'] === 'middle')
      }
      case 'priority/low': {
        return todoList.filter((todo) => todo['priority'] === 'low')
      }
      case 'status/active': {
        return todoList.filter((todo) => todo['status'] === 'active')
      }
      case 'status/completed': {
        return todoList.filter((todo) => todo['status'] === 'completed')
      }
      default: {
        return todoList
      }
    }
  },
})
