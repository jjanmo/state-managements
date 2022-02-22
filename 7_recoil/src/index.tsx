import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyles from './GlobalStyles';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyles />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
