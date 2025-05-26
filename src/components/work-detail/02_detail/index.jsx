import React from 'react';
import '@styles/work-detail/02_detail';
import WorkDesc from './WorkDesc';
import WorkGallery from './WorkGallery';

const WorkDetailSection = () => {
  return (
    <section className="work-detail-sec">
      <WorkDesc />
      <WorkGallery />
    </section>
  );
};

export default WorkDetailSection;
