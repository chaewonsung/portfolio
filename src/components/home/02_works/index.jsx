import Inner from '@components/common/layouts/Inner';
import React from 'react';
import '@styles/home/02_works';
import WorkList from './WorkList';
import WorksHeading from './WorksHeading';
import WorksGallery from './WorksGallery';
import { GradientBgBottom, GradientBgTop } from './GradientBg';

const WorksSection = () => {
  return (
    <section className="works-sec">
      <Inner>
        <GradientBgTop />
        <WorksHeading />
        <WorkList />
        <WorksGallery />
        <GradientBgBottom />
      </Inner>
    </section>
  );
};

export default WorksSection;
