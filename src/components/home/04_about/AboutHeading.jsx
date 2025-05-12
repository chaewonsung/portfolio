import React from 'react';
import Heading from '../common/Heading';
import TextSVG from '@textSvg/about-chaewon.svg';
import SubTextGroup from '../common/SubTextGroup';

const AboutHeading = () => {
  return (
    <div className="about-heading">
      <Heading>
        <TextSVG />
      </Heading>
      <SubTextGroup
        textArr={['father', 'coach', 'hiker', 'designer', 'nomad']}
      />
    </div>
  );
};

export default AboutHeading;
