import React from 'react';
import '@styles/home/03_sub_works';
import Inner from '@components/common/layouts/Inner';
import SubWorksHeading from './SubWorksHeading';
import SubWorkList from './SubWorkList';

const SubWorksSection = () => {
  return (
    <section className="sub-works-sec">
      <Inner>
        <SubWorksHeading />
        <SubWorkList />
      </Inner>
    </section>
  );
};

export default SubWorksSection;
