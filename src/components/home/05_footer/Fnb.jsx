import React from 'react';

const Fnb = () => {
  return (
    <nav className="fnb">
      <ul>
        <li>
          <a href="#selected-works">work</a>
        </li>
        <li>
          <a href="#sub-projects">projects</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li className="scroll-to-top">
          <button onClick={() => scrollTo(0, 0)}>scroll to top</button>
        </li>
      </ul>
    </nav>
  );
};

export default Fnb;
