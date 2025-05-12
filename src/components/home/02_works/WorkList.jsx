import React from 'react';

// const DATA = [{}];

const WorkList = () => {
  return (
    <div className="work-list">
      <Work />
      <Work />
      <Work />
    </div>
  );
};

const Work = () => {
  return (
    <div className="work">
      <div className="work__thumb">
        <img src={require('@images/test.png')} alt="" />
      </div>
      <div className="work__desc">
        <div className="work__desc-top">
          <div className="work__order">(01)</div>
          <div className="work__name en--em">gam</div>
          <div className="work__info">
            GAM is a consortium of physicians creating novel
            <br /> metrics of healthcare quality.
          </div>
        </div>
        <div className="work__desc-bottom">
          <dl className="work__dl">
            <div>
              <dt>live site</dt>
              <dd>
                <a href="">
                  <i></i>gameasures.com
                </a>
              </dd>
            </div>
            <div className="industry">
              <dt>industry</dt>
              <dd>healthcare</dd>
            </div>
            <div className="deliverables">
              <dt>deliverables</dt>
              <dd>
                <span>web design</span>
                <span>brand identity</span>
                <span>product design</span>
                <span>brand strategy</span>
              </dd>
            </div>
            <div className="published">
              <dt>published</dt>
              <dd>2024</dd>
            </div>
          </dl>
          <div className="btn-view">view project</div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
