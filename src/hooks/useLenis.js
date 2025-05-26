import { useEffect } from 'react';
import Lenis from 'lenis';

const lenis = new Lenis({
  prevent: (node) => node.classList.contains('work-detail-main'),
});

const useLenis = () => {
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
};

export { lenis };
export default useLenis;
