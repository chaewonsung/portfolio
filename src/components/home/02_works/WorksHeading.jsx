import React from 'react';
import TextSVG from '@textSvg/selected-works.svg';
import SubTextGroup from '../common/SubTextGroup';

const WorksHeading = () => {
  return (
    <h2 className="works-sec__heading" id="selected-works">
      <TextSVG />
      <SubTextGroup
        textArr={['pp fragment', 'appknot', 'danggn', 'and more']}
      />
    </h2>
  );
};

export default WorksHeading;