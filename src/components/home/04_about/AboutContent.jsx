import React from 'react';
import Profile from './Profile';
import SelfIntroduction from './SelfIntroduction';

const AboutContent = () => {
  return (
    <div className="about-content">
      <Profile />
      <SelfIntroduction />
    </div>
  );
};

export default AboutContent;
