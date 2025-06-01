import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const Gnb = ({ setOpen }) => {
  const handleClick = useCallback((e) => {
    if (e.target.matches('a')) {
      setOpen(false);
    }
  }, []);
  return (
    <nav className="gnb" onClick={handleClick}>
      <ul>
        <li>
          <Link to="/#selected-works">work</Link>
        </li>
        <li>
          <Link to="/#sub-projects">projects</Link>
        </li>
        <li>
          <Link to="/#about">about</Link>
        </li>
        <li>
          <Link to="/#connect">connect</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
