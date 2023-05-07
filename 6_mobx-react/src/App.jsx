import { observer } from 'mobx-react';
import Form from './components/form';
import List from './components/list';
import Modal from './components/modal';
import { useTodosContext } from './useStore';

function App() {
  const { editingData } = useTodosContext();

  return (
    <>
      {editingData && <Modal />}
      <Form />
      <List />
    </>
  );
}

export default observer(App);
