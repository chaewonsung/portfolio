import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const WorksGallery = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from('.works-gallery__content', {
        scale: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          end: '50% 0%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="works-gallery" ref={containerRef}>
      <div className="works-gallery__content">
        {[...new Array(3)].map((_, i) => (
          <div key={i} className="works-gallery__col">
            {[...new Array(3)].map((_, j) => (
              <img
                key={j}
                src={require(`@images/work-gallery-0${3 * i + (j + 1)}.png`)}
                alt=""
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksGallery;
