import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodosContext, todosStore } from './useStore';

ReactDOM.render(
  <React.StrictMode>
    <TodosContext.Provider value={todosStore}>
      <App />
    </TodosContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
