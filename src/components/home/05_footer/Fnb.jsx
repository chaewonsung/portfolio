import React from 'react';
import { Link } from 'react-router-dom';

const Fnb = () => {
  return (
    <nav className="fnb">
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
        <li className="scroll-to-top">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            scroll to top
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Fnb;
