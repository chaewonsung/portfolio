import React, { useCallback, useEffect, useState } from 'react';
import '@styles/common/header';
import BtnMenu from './BtnMenu';
import Inner from '../layouts/Inner';
import Gnb from './Gnb';
import Logo from './Logo';
import { throttle } from 'lodash';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {
  const { pathname } = useLocation();

  return <Content key={pathname} />;
};

const Content = () => {
  const { pathname } = useLocation();
  const isWorkPath = pathname.startsWith('/work');
  const [show, setShow] = useState(!isWorkPath);
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

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
    <header
      className={classNames('header', { open })}
      style={{
        transform: `translateY(${show ? '0' : '-100%'})`,
        opacity: show ? 1 : 0,
      }}
    >
      <Inner>
        <Logo />
        <Gnb />
        <BtnMenu handleToggle={handleToggle} />
      </Inner>
    </header>
  );
};

export default Header;
