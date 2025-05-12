import React from 'react';
import SubHeading from '../common/SubHeading';

const SelfIntroduction = () => {
  return (
    <div className="self-introduction">
      <Approach />
      <Background />
      <BeyondDesign />
      <FeaturedIn />
    </div>
  );
};

const Approach = () => {
  return (
    <div className="self-introduction__item self-introduction__item--01">
      <h3>approach</h3>
      <SubHeading level={4}>
        Designing for Impact and <i className="en--em">Clarity</i>
      </SubHeading>
      <div className="paras">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          mollitia vel molestias aliquam nesciunt velit ut, cumque odio, minus
          deleniti illum incidunt quia id consectetur ipsam nam! Modi,
          praesentium officiis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          mollitia vel molestias aliquam nesciunt velit ut, cumque odio, minus
          deleniti illum incidunt quia id consectetur ipsam nam! Modi,
          praesentium officiis.
        </p>
      </div>
    </div>
  );
};

const Background = () => {
  return (
    <div className="self-introduction__item self-introduction__item--02">
      <h3>Background</h3>
      <SubHeading level={4}>
        Designing for Impact and <i className="en--em">Clarity</i>
      </SubHeading>
      <div className="paras">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          mollitia vel molestias aliquam nesciunt velit ut, cumque odio, minus
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          mollitia vel molestias aliquam nesciunt velit ut, cumque odio, minus
          deleniti illum incidunt quia id consectetur ipsam nam! Modi,
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          mollitia vel molestias aliquam nesciunt velit ut, cumque odio, minus
        </p>
      </div>
    </div>
  );
};

const BeyondDesign = () => {
  return (
    <div className="self-introduction__item self-introduction__item--03">
      <h3>Beyond Design</h3>
      <SubHeading level={4}>
        Designing for Impact and <i className="en--em">Clarity</i>
      </SubHeading>
      <div className="paras">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          mollitia vel molestias aliquam nesciunt velit ut, cumque odio, minus
          deleniti illum incidunt quia id consectetur ipsam nam! Modi,
          praesentium officiis.
        </p>
      </div>
    </div>
  );
};

const FeaturedIn = () => {
  return (
    <div className="self-introduction__item self-introduction__item--04">
      <h3>Featured In</h3>
      <div className="paras">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          mollitia vel molestias aliquam nesciunt velit ut
        </p>
      </div>
    </div>
  );
};

export default SelfIntroduction;
