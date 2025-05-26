import Inner from '@components/common/layouts/Inner';
import React, { useContext, useEffect, useRef, useState } from 'react';
import WorkOverview from '../common/WorkOverview';
import '@styles/work-detail/01_intro';
import classNames from 'classnames';
import { WorkContext } from '../../../pages/WorkDetailPage';

const WorkIntro = () => {
  const { title, site, date, sort, id } = useContext(WorkContext);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <div className={classNames('work-intro', { loaded: isImgLoaded })}>
      <Inner>
        <BgImg setIsImgLoaded={setIsImgLoaded} id={id} title={title.en} />
        <div className="work-intro__bg-color">
          <div></div>
          <div className="work-intro__visible-area">
            <div className="work-intro__visible-area-inner">
              <div className="work-intro__visible-area-1"></div>
              <div className="work-intro__visible-area-2"></div>
            </div>
          </div>
          <div></div>
        </div>
        <WorkOverview title={title.en} site={site} date={date} sort={sort[0]} />
      </Inner>
    </div>
  );
};

const BgImg = ({ setIsImgLoaded, id, title }) => {
  const imgRef = useRef();

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleLoad = () => setIsImgLoaded(true);

    if (img.complete) {
      setIsImgLoaded(true);
    } else {
      img.addEventListener('load', handleLoad);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="work-intro__bg-img">
      <img
        src={`https://picsum.photos/${innerWidth}?grayscale&random=${id}`}
        alt=""
        ref={imgRef}
      />
      <div>{title}</div>
    </div>
  );
};

export default WorkIntro;
