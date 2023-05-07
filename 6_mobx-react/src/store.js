import { action, computed, makeObservable, observable } from 'mobx';

/*
 * todo {object}
 * {
 *  id: 1,
 *  content: 'Study JS',
 *  date: '2021.12.31',
 *  isDone: false,
 * }
 */

export class TodosStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      deleteTodo: action,
      editTodo: action,
      updateTodoStaus: action,
      totalTodos: computed,
    });
  }

  get totalTodos() {
    return this.todos.length;
  }

  addTodo(todo) {
    return [...this.todo, todo];
  }

  deleteTodo(id) {
    return this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(id, updated) {
    return this.todos.map((todo) =>
      todo.id == id ? { ...todo, content: updated } : todo
    );
  }

  updateTodoStaus(id) {
    return this.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
  }
}
