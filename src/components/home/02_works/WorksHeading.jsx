import React from 'react';
import TextSVG from '@textSvg/selected-works.svg';
import SubTextGroup from '../common/SubTextGroup';

const WorksHeading = () => {
  return (
    <h2 className="works-sec__heading">
      <TextSVG />
      <SubTextGroup
        textArr={['gam', 'thesystemboss', 'pharsalus', 'expert insights']}
      />
    </h2>
  );
};

export default WorksHeading;
