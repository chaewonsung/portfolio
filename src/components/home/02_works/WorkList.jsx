import ExternalLink from '@components/common/buttons/ExternalLink';
import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import WORK_DETAIL from '../../../data/work';

const WorkList = () => {
  return (
    <div className="work-list">
      {WORK_DETAIL.slice(0, 3).map((work) => (
        <Work key={work.id} work={work} />
      ))}
    </div>
  );
};

const Work = ({
  work: { id, title, desc, contribution, date, site, sort },
}) => {
  return (
    <div className="work">
      <WorkThumb id={id} />
      <div className="work__desc">
        <div className="work__desc-top">
          <div className="work__order">(0{id})</div>
          <div className="work__name en--em">{title.en}</div>
          <div className="work__info">{desc}</div>
        </div>
        <div className="work__desc-bottom">
          <dl className="work__dl">
            <div className="site">
              <dt>live site</dt>
              <dd>
                <ExternalLink href={`https://chaewonsung.github.io/${site}/`}>
                  {title.en}.COM
                </ExternalLink>
              </dd>
            </div>
            <div className="industry">
              <dt>contribution</dt>
              <dd>{contribution}</dd>
            </div>
            <div className="deliverables">
              <dt>deliverables</dt>
              <dd>
                {sort.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </dd>
            </div>
            <div className="published">
              <dt>published</dt>
              <dd>{date}</dd>
            </div>
          </dl>
          <Link to={`/work/${id}`} className="btn-view">
            view project
          </Link>
        </div>
      </div>
    </div>
  );
};

const WorkThumb = ({ id }) => {
  const cursorRef = useRef();
  const handleMousemove = useCallback(
    (e) => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      const { offsetX, offsetY } = e.nativeEvent;

      cursor.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    },
    [cursorRef.current]
  );

  return (
    <Link
      to={`/work/${id}`}
      className="work__thumb"
      onMouseEnter={handleMousemove}
      onMouseMove={handleMousemove}
    >
      <div className="img-wrapper">
        <img src={require(`@images/work-mockup-0${id}.png`)} alt="" />
      </div>
      <div className="work__thumb-cursor view-btn" ref={cursorRef}>
        view project→
      </div>
    </Link>
  );
};

export default WorkList;
