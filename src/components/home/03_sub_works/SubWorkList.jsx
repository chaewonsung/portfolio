import React from 'react';
import { Link } from 'react-router-dom';

const SubWorkList = () => {
  return (
    <div className="sub-work-list">
      <SubWork />
      <SubWork />
      <SubWork />
      <SubWork />
      <SubWork />
      <SubWork />
    </div>
  );
};

const SubWork = () => {
  return (
    <Link to="/" className="sub-work">
      <span className="sub-work__order">(01)</span>
      <h3 className="sub-work__name">strategy</h3>
      <p className="sub-work__info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
        cumque sequi accusamus tempora velit
      </p>
      <div className="sub-work__thumb">
        <img src={require('@images/aa.png')} alt="" />
      </div>
    </Link>
  );
};

export default SubWorkList;
