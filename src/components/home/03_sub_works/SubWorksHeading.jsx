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
        textArr={[
          'strategy',
          'brand identity',
          'web design',
          'web development',
          'web apps',
        ]}
      />
    </div>
  );
};

export default SubWorksHeading;
