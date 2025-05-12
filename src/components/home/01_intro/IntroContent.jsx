import React from 'react';
import SubHeading from '../common/SubHeading';
import SubTextGroup from '../common/SubTextGroup';

const IntroContent = () => {
  return (
    <div className="intro-sec__content">
      <SubHeading>
        crafting digital <i className="en--em">designs</i> that
        <br />
        elevate SaaS & AI Innovators
      </SubHeading>
      <SubTextGroup textArr={['@2025', 'based in uk', 'designer']} />
    </div>
  );
};

export default IntroContent;
