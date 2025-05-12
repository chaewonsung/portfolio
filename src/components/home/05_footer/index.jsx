import React from 'react';
import '@styles/home/05_footer';
import Inner from '@components/common/layouts/Inner';
import Fnb from './Fnb';
import SocialLinks from './SocialLinks';
import FirstName from '@textSvg/chaewon.svg';
import LastName from '@textSvg/hwang.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Inner>
        <div className="footer__top">
          <Name />
          <Fnb />
          <Address />
        </div>
        <div className="footer__bottom">
          <Copyright />
          <SocialLinks />
        </div>
      </Inner>
    </footer>
  );
};

const Name = () => {
  return (
    <div className="footer__name en">
      <LastName />
      <FirstName />
    </div>
  );
};

const Copyright = () => {
  return <div className="footer__copyright">{'\u00A9'}cw 2025</div>;
};

const Address = () => {
  return (
    <address className="footer__address">
      <div>codnjs2445@naver.com</div>
      <div>010-5886-2445</div>
    </address>
  );
};

export default Footer;
