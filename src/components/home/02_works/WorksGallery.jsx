import React, { useEffect, useRef } from 'react';

const WorksGallery = () => {
  const animTriggerRef = useRef();
  const animTargetRef = useRef();

  useEffect(() => {
    const trigger = animTriggerRef.current;
    const target = animTargetRef.current;

    const start = Math.floor(
      scrollY + trigger.getBoundingClientRect().top - innerHeight
    );
    const end = start + trigger.offsetHeight + 300;
    const ease = 0.05;
    let currentScale = 2;
    let nextScale = 2;

    const handleScroll = () => {
      if (scrollY < start || scrollY > end) return;

      let progress = (scrollY - start) / (end - start);
      nextScale = 2 - progress;
    };

    function animate() {
      currentScale += (nextScale - currentScale) * ease;
      target.style.transform = `scale(${currentScale})`;
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="works-gallery" ref={animTriggerRef}>
      <div className="works-gallery__content" ref={animTargetRef}>
        {[...new Array(3)].map((_, i) => (
          <div key={i} className="works-gallery__col">
            <img src={require('@images/test.png')} alt="" />
            <img src={require('@images/test.png')} alt="" />
            <img src={require('@images/test.png')} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksGallery;
