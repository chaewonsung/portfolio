import React from 'react';

const SubHeading = ({ children, level = 3 }) => {
  const Tag = 'h' + level;

  return <Tag className="sub-heading en">{children}</Tag>;
};

export default SubHeading;
