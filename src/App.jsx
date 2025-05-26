import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import '@styles/common/common';
import HomePage from './pages/HomePage';
import MainLayout from './pages/MainLayout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const App = () => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  const LazyWorkDetailPage = lazy(() => import('./pages/WorkDetailPage'));

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="work/:id"
          element={
            <Suspense>
              <LazyWorkDetailPage />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default App;
