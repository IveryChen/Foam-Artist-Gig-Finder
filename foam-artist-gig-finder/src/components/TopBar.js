import React from 'react';
import AddIcon from '../assets/add_icon.png';
import MessageIcon from '../assets/message_icon.png';
import SearchIcon from '../assets/search_icon.png';
import LikeIcon from '../assets/like_icon_black.png';
import './style.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">Foam</div>
      <div className="search-bar-frame">
        <div className="search-bar">
            <img src={SearchIcon} alt="search"/>
            <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="icons">
        <img src={AddIcon} alt="Add" />
        <img src={MessageIcon} alt="Message" />
        <a href="/like-page"><img src={LikeIcon} alt="Like" /></a>
      </div>
    </div>
  );
};

export default TopBar;
