import { createContext, useContext } from 'react';
import { TodosStore } from './store';

const todosStore = new TodosStore();
const TodosContext = createContext(todosStore);

const useTodosContext = () => {
  return useContext(TodosContext);
};

export { todosStore, TodosContext, useTodosContext };
