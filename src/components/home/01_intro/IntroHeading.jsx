import React from 'react';
import LastName from '@textSvg/hwang.svg';
import FirstName from '@textSvg/chaewon.svg';
import Heading from '../common/Heading';

const IntroHeading = () => {
  return (
    <Heading className="intro-sec__heading">
      <div className="last-name">
        <LastName />
      </div>
      <div className="first-name">
        <FirstName />
      </div>
    </Heading>
  );
};

export default IntroHeading;
