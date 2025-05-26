import React from 'react';
import { Link } from 'react-router-dom';
import WORK_DETAIL from '../../../data/work';

const SubWorkList = () => {
  return (
    <div className="sub-work-list">
      {WORK_DETAIL.slice(3).map((work, i) => (
        <SubWork key={work.id} work={work} index={i} />
      ))}
    </div>
  );
};

const SubWork = ({ work: { title, brief, image, id }, index }) => {
  return (
    <Link to={`/work/${id}`} className="sub-work">
      <span className="sub-work__order">(0{index + 1})</span>
      <h3 className="sub-work__name">{title.en}</h3>
      <p className="sub-work__info">{brief}</p>
      <div className="sub-work__thumb">
        <img src={require(`@images/${image.prefix}1.png`)} alt="" />
      </div>
    </Link>
  );
};

export default SubWorkList;
