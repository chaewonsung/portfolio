import Header from '@components/common/header/Header';
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default MainLayout;
