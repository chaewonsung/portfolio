import Inner from '@components/common/layouts/Inner';
import React, { useContext } from 'react';
import { WorkContext } from '../../../pages/WorkDetailPage';
import ExternalLink from '@components/common/buttons/ExternalLink';

const WorkDesc = () => {
  const { title, date, modules, sort, brief, focus, site } =
    useContext(WorkContext);

  return (
    <div className="work-desc">
      <Inner full={false}>
        <div className="work-desc__meta">
          <h1 className="work-desc__title">{title.ko}</h1>
          <dl className="work-desc__dl">
            <div>
              <dt>Contribution</dt>
              <dd>100%</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{sort[0]}</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>{date}</dd>
            </div>
            <div>
              <dt>Package</dt>
              <dd>{modules}</dd>
            </div>
          </dl>
          <ExternalLink href={site} className="view-btn">
            VIEW SITE
          </ExternalLink>
        </div>
        <div className="work-desc__content">
          <section className="work-desc__section">
            <h2>brief</h2>
            <p>{brief}</p>
          </section>
          <section className="work-desc__section">
            <h2>focus</h2>
            <p>{focus}</p>
          </section>
        </div>
      </Inner>
    </div>
  );
};

export default WorkDesc;
