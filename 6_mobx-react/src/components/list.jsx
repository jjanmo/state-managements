import { useTodosContext } from '../useStore';
import Todo from './todo';
import { observer } from 'mobx-react';

const List = () => {
  const { todos } = useTodosContext();

  return (
    <ul>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
};

export default observer(List);
