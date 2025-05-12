import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = () => {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <Link to="/work">work</Link>
        </li>
        <li>
          <Link>services</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li>
          <Link>connect</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
