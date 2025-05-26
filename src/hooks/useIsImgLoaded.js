import { useEffect, useState } from 'react';
import useInView from './useInView';

export const useIsImgLoaded = (lazy = true) => {
  const { elementRef, isVisible } = useInView({
    rootMargin: '0px 0px 500px 0px',
  });
  const [isLoaded, setIsLoaded] = useState(!lazy);

  useEffect(() => {
    if (isLoaded || !isVisible) {
      return;
    }

    setIsLoaded(true);
  }, [isVisible]);

  return { elementRef, isLoaded };
};
