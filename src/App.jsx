import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '@styles/common/common';
import MainPage from './pages/MainPage';
import useLenis from './hooks/useLenis';

const App = () => {
  useLenis();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default App;
