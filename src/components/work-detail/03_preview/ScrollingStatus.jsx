import React from 'react';

const ScrollingStatus = () => {
  return (
    <div className="scrolling-status">
      <div className="scrolling-status__text">keep scroll going</div>
      <div className="scrolling-status__bar">
        <div className="bg">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default ScrollingStatus;
