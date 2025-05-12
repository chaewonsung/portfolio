import React from 'react';

const SubTextGroup = ({ textArr }) => {
  return (
    <div className="sub-text-group">
      {textArr.map((text) => (
        <span key={text}>{text}</span>
      ))}
    </div>
  );
};

export default SubTextGroup;
