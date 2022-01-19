import Todo from './todo';
import styles from './comp.module.css';

const List = () => {
  const todos = [
    {
      id: 1,
      content: 'Study JS',
      date: '2021.12.31',
      isDone: false,
    },
    {
      id: 2,
      content: 'Study MobX',
      date: '2022.01.05',
      isDone: true,
    },
    {
      id: 3,
      content: 'Enjoy Yoga',
      date: '2022.01.15',
      isDone: false,
    },
  ];

  return <ul>{todos && todos.length > 0 && todos.map((todo) => <Todo key={todo.id} {...todo} />)}</ul>;
};

export default List;
