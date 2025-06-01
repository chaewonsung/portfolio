import classNames from 'classnames';
import React from 'react';

const Inner = ({ children, full = true, ...props }) => {
  return (
    <div className={classNames('inner', { 'inner--full': full })} {...props}>
      {children}
    </div>
  );
};

export default Inner;
