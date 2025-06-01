import React from 'react';
import '@styles/home/04_about';
import Inner from '@components/common/layouts/Inner';
import AboutHeading from './AboutHeading';
import AboutContent from './AboutContent';

const AboutSection = () => {
  return (
    <section className="about-sec">
      <Inner id="about">
        <AboutHeading />
        <AboutContent />
      </Inner>
    </section>
  );
};

export default AboutSection;
