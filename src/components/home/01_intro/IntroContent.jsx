import React from 'react';
import SubHeading from '../common/SubHeading';
import SubTextGroup from '../common/SubTextGroup';

const IntroContent = () => {
  return (
    <div className="intro-sec__content">
      <SubHeading>
        Interactive, Responsive, Accessible.
        <br />I build modern <span className="en--em">web experiences</span>
      </SubHeading>
      <SubTextGroup textArr={['@2025', 'publisher', 'ui developer']} />
    </div>
  );
};

export default IntroContent;
