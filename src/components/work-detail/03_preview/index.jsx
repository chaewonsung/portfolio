import Inner from '@components/common/layouts/Inner';
import React, { useContext, useRef } from 'react';
import WorkOverview from '../common/WorkOverview';
import '@styles/work-detail/03_preview';
import ScrollingStatus from './ScrollingStatus';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useNavigate, useParams } from 'react-router-dom';
import { lenis } from '../../../hooks/useLenis';
import { WorkContext } from '../../../pages/WorkDetailPage';
import WORK_DETAIL from '../../../data/work';

const WorkPreview = () => {
  const containerRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    nextWork: { title, site, date, sort },
  } = useContext(WorkContext);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { '--scrolling-progress': 0 },
        {
          '--scrolling-progress': 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top+=100 top',
            endTrigger: containerRef.current.nextElementSibling,
            end: 'bottom-=10 bottom',
            scrub: 1,
          },
          onComplete: () => tl.play(),
        }
      );

      const tl = gsap
        .timeline({
          defaults: { duration: 1 },
          paused: true,
          onStart: () => {
            document.body.style.overflow = 'hidden';
            lenis.stop();
          },
          onComplete: () => {
            navigate(id == WORK_DETAIL.length ? '/work/1' : `/work/${+id + 1}`);
            document.body.style.overflow = 'visible';
            lenis.start();
          },
        })
        .fromTo(
          '.work-preview__sm-text, .scrolling-status',
          { opacity: 1 },
          { opacity: 0 }
        )
        .fromTo(
          '.scrolling-status__bar',
          { rotate: 0 },
          {
            rotate: 15,
          },
          0
        );
    },
    { scope: containerRef }
  );

  return (
    <div>
      <div className="work-preview" ref={containerRef}>
        <Inner>
          <div className="work-preview__sm-text">next work</div>
          <WorkOverview
            title={title.en}
            site={site}
            date={date}
            sort={sort[0]}
          />
          <ScrollingStatus />
        </Inner>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default WorkPreview;
