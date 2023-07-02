import { useTodosContext } from '../useStore';
import Todo from './todo';
import { observer } from 'mobx-react';
import styles from './comp.module.css';

const List = () => {
  const { completedTodos, totalTodos, todos } = useTodosContext();

  return (
    <>
      <h1 className={styles.todosCount}>
        <span title="완료" className={styles.completed}>
          {completedTodos}
        </span>{' '}
        /{' '}
        <span title="전체" className={styles.total}>
          {totalTodos}
        </span>
      </h1>
      <section>
        <ul>
          {todos?.length > 0 ? (
            todos.map((todo) => <Todo key={todo.id} {...todo} />)
          ) : (
            <div className={styles.placeholder}>Hello MobX</div>
          )}
        </ul>
      </section>
    </>
  );
};

export default observer(List);
