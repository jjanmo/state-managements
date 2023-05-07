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
  todos = [
    // { id: 1, content: 'Study JS', date: '2023-05-07', isDone: false },
    // { id: 2, content: 'Study React', date: '2023-05-07', isDone: false },
    // { id: 3, content: 'Study Typescript', date: '2023-05-07', isDone: false },
  ];
  editingData = null;

  constructor() {
    makeObservable(this, {
      todos: observable,
      editingData: observable,
      addTodo: action,
      deleteTodo: action,
      editTodo: action,
      selectEditing: action,
      updateTodoStatus: action,
      totalTodos: computed,
      completedTodos: computed,
    });
  }

  get totalTodos() {
    return this.todos.length;
  }

  get completedTodos() {
    return this.todos.filter((todo) => todo.isDone).length;
  }

  addTodo = (todo) => {
    const newTodos = [...this.todos, todo];
    this.todos = newTodos;
  };

  deleteTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  editTodo = (id, updated) => {
    this.todos = this.todos.map((todo) =>
      todo.id == id ? { ...todo, ...updated } : todo
    );
  };

  updateTodoStatus = (id) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
  };

  selectEditing = (data) => {
    this.editingData = data;
  };
}
