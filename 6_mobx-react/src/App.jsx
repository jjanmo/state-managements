import { observer } from 'mobx-react';
import Form from './components/form';
import List from './components/list';
import Modal from './components/modal';
import { useTodosContext } from './useStore';
import styles from './app.module.css';

function App() {
  const { editingData } = useTodosContext();

  return (
    <div className={styles.app}>
      {editingData && <Modal />}
      <Form />
      <List />
    </div>
  );
}

export default observer(App);
