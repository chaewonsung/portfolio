import React, { useEffect, useState } from 'react';
import '@styles/common/header';
import BtnMenu from './BtnMenu';
import Inner from '../layouts/Inner';
import Gnb from './Gnb';
import Logo from './Logo';
import { throttle } from 'lodash';

const Header = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastY = scrollY;

    const handleScroll = throttle(() => {
      if (lastY < scrollY && show) {
        setShow(false);
      } else if (scrollY < lastY && !show) {
        setShow(true);
      }
      lastY = scrollY;
    }, 300);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [show]);

  return (
    <>
      <header
        className="header"
        style={{ transform: `translateY(${show ? '0' : '-100%'})` }}
      >
        <Inner>
          <Logo />
          <Gnb />
          <BtnMenu />
        </Inner>
      </header>
      <div className="header-space"></div>
    </>
  );
};

export default Header;
