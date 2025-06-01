import Inner from '@components/common/layouts/Inner';
import React, { useContext } from 'react';
import { WorkContext } from '../../../pages/WorkDetailPage';
import { useIsImgLoaded } from '../../../hooks/useIsImgLoaded';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const WorkGallery = () => {
  const {
    image: { prefix, count },
  } = useContext(WorkContext);
  return (
    <div className="work-gallery">
      <Inner>
        {[...new Array(count)].map((_, i) => (
          <div className="work-gallery__img-wrapper" key={i}>
            <WorkGalleryImg
              prefix={prefix}
              index={i + 1}
              isLast={count === i + 1}
              alt=""
            />
          </div>
        ))}
      </Inner>
    </div>
  );
};

const WorkGalleryImg = ({ alt, prefix, index }) => {
  const { elementRef, isLoaded } = useIsImgLoaded();
  const requirePath = require(`@images/${prefix}${index}.png`);

  useGSAP(() => {
    gsap.from(elementRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  });

  return (
    <img
      ref={elementRef}
      alt={alt}
      src={isLoaded ? requirePath : null}
      onLoad={() => ScrollTrigger.refresh()}
      width={isLoaded ? null : '500px'}
    />
  );
};

export default WorkGallery;
