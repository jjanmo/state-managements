import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/detail';
import Form from './pages/form';
import Home from './pages/home';
import Join from './pages/join';
import Login from './pages/login';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="post/:id" element={<Detail />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
