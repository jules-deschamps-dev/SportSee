import React from 'react';
import './AppBar.css';

const AppBarItem: React.FC<{ imgSrc: string }> = ({ imgSrc }) => {
  return (
    <li className="item">
      <img src={imgSrc} alt="" />
    </li>
  );
};

export default AppBarItem;

