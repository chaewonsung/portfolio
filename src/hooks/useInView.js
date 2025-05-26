import { useRef, useState, useEffect } from 'react';

const useInView = (options) => {
  const elementRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    elementRef.current && observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, options]);

  return { elementRef, isVisible };
};

export default useInView;
