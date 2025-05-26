// useScrollScale.js 또는 useScrollScale.ts
import { useEffect } from 'react';

export function useScrollScale({
  triggerRef,
  targetRef,
  from,
  to,
  offset = 300,
  ease = 0.05,
}) {
  useEffect(() => {
    const trigger = triggerRef.current;
    const target = targetRef.current;
    if (!trigger || !target) return;

    const start = Math.floor(
      window.scrollY + trigger.getBoundingClientRect().top - window.innerHeight
    );
    const end = start + trigger.offsetHeight + offset;

    let currentScale = from;
    let nextScale = from;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < start || scrollY > end) return;

      const progress = (scrollY - start) / (end - start);
      nextScale = from - (from - to) * progress;
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
  }, [triggerRef, targetRef, from, to, offset, ease]);
}
