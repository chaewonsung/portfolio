import React from 'react';
import Heading from '../common/Heading';
import TextSVG from '@textSvg/more-projects.svg';
import SubTextGroup from '../common/SubTextGroup';

const SubWorksHeading = () => {
  return (
    <div className="sub-works-heading" id="sub-projects">
      <Heading>
        <TextSVG />
      </Heading>
      <SubTextGroup
        textArr={['interactive', 'responsive', 'accessible', 'ui development']}
      />
    </div>
  );
};

export default SubWorksHeading;
