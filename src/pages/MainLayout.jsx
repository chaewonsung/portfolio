import Header from '@components/common/header/Header';
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ReactLenis, { lenis } from '../components/common/ReactLenis';

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <ReactLenis />
      <Header />
      <Outlet />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    lenis.stop();
    window.scrollTo(0, 0);
    lenis.start();
  }, [pathname]);

  return null;
};

export default MainLayout;
