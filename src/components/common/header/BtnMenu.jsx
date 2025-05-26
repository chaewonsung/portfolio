import React from 'react';

const BtnMenu = ({ handleToggle }) => {
  return (
    <button className="btn-menu only-lg" onClick={handleToggle}>
      <i></i>
      <i></i>
    </button>
  );
};

export default BtnMenu;
