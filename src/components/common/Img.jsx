import React from 'react';
import { useIsImgLoaded } from '../../hooks/useIsImgLoaded';

const Img = ({ src, alt, lazy }) => {
  const { elementRef, isLoaded } = useIsImgLoaded(lazy);

  return <img ref={elementRef} alt={alt} src={isLoaded && src} />;
};

export default Img;
