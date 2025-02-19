
import React from 'react';
import AppBarItem from './AppBarItem';
import './AppBar.css';


const AppBar: React.FC = () => {
  return (
    <div id="appbar">
      <ul>
        <AppBarItem imgSrc='/public/icons/menu_icon_1.svg' />
        <AppBarItem imgSrc='/public/icons/menu_icon_2.svg' />
        <AppBarItem imgSrc='/public/icons/menu_icon_3.svg' />
        <AppBarItem imgSrc='/public/icons/menu_icon_4.svg' />
      </ul>
    </div>
  );
};

export default AppBar;
