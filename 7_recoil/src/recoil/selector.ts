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

export const todosStats = selector({
  key: 'todosStats',
  get: ({ get }) => {
    const todoList = get(todoListAtom)
    const total = todoList.length
    const active = todoList.filter((todo) => todo.status === 'active').length
    const completed = todoList.filter((todo) => todo.status === 'completed').length

    return {
      total,
      active,
      completed,
      completedPercent: total === 0 ? `${0} %` : `${((completed / total) * 100).toFixed()} %`,
    }
  },
})
