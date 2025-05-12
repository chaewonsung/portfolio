import Inner from '@components/common/layouts/Inner';
import React from 'react';
import IntroHeading from './IntroHeading';
import IntroContent from './IntroContent';
import '@styles/home/01_intro';

const IntroSection = () => {
  return (
    <section className="intro-sec">
      <Inner>
        <IntroHeading />
        <IntroContent />
      </Inner>
    </section>
  );
};

export default IntroSection;
