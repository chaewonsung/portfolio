import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '@styles/common/common';
import useLenis from './hooks/useLenis';
import HomePage from './pages/HomePage';
import WorkDetailPage from './pages/WorkDetailPage';
import MainLayout from './pages/MainLayout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const App = () => {
  useLenis();
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkDetailPage />} />
        <Route path="work/:id" element={<WorkDetailPage />} />
      </Route>
      <Route path="*" element={<div>없지롱</div>} />
    </Routes>
  );
};

export default App;
