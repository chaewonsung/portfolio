import { useEffect } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

const lenis = new Lenis({
  prevent: (node) => node.classList.contains('work-detail-main'),
});

const ReactLenis = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    lenis.resize();
  }, [[pathname]]);

  useEffect(() => {
    let req;
    const raf = (time) => {
      lenis.raf(time);
      req = requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(req);
    };
  }, []);

  return null;
};

export { lenis };
export default ReactLenis;
