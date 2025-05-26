import ExternalLink from '@components/common/buttons/ExternalLink';
import { debounce } from 'lodash';
import React, { useLayoutEffect, useRef } from 'react';

const WorkOverview = ({ title, site, date, sort }) => {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function init() {
      let subInfoHeight;
      const contentHeight = [...container.children].reduce((acc, child, i) => {
        if (i === 2) subInfoHeight = child.offsetHeight;
        return acc + child.offsetHeight;
      }, 0);

      container.style.setProperty('--content-height', contentHeight + 'px');
      container.style.setProperty('--sub-info-height', subInfoHeight + 'px');
    }

    init();

    const handleResize = debounce(init, 200);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef.current]);

  return (
    <div className="work-overview" ref={containerRef}>
      <div className="work-overview__title en--em">{title}</div>
      <div className="work-overview__hr"></div>
      <div className="work-overview__sub-info">
        <div>
          <ExternalLink href={site}>{title}.com</ExternalLink>
          <div className="no-medium">website</div>
        </div>
        <div>
          <div>{date}</div>
          <div>UX/UI, web development</div>
        </div>
        <div>{sort}</div>
      </div>
    </div>
  );
};

export default WorkOverview;
