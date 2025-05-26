import classNames from 'classnames';
import React from 'react';

const Inner = ({ children, full = true }) => {
  return (
    <div className={classNames('inner', { 'inner--full': full })}>
      {children}
    </div>
  );
};

export default Inner;
