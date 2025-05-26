import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const ViewBtn = ({ href, children, className, ...props }) => {
  return (
    <Link to={href} className={classNames('view-btn', className)} {...props}>
      {children}
    </Link>
  );
};

export default ViewBtn;
