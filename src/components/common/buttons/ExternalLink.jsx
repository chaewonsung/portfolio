import classNames from 'classnames';
import React from 'react';

const ExternalLink = ({ children, href, className }) => {
  return (
    <a
      target="_black"
      rel="noopener noreferrer"
      href={href}
      className={classNames('external-link', className)}
    >
      <div className="external-link__arrow">
        <div>
          <span>↗</span>
        </div>
      </div>
      {children}
    </a>
  );
};

export default ExternalLink;
