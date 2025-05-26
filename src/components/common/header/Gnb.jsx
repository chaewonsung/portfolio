import React, { useCallback } from 'react';

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
          <a href="/#selected-works">work</a>
        </li>
        <li>
          <a href="/#sub-projects">projects</a>
        </li>
        <li>
          <a href="/#about">about</a>
        </li>
        <li>
          <a href="/#connect">connect</a>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
