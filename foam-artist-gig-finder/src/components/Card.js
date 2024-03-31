import './style.css';
import React, { useState } from 'react';
import likeIcon from '../assets/like_icon.png';
import likedIcon from '../assets/liked_icon.png';

const Card = (props) => {

  const [showLikeButton, setShowLikeButton] = useState(props.liked);

  const handleImageLoad = (e) => {
    const img = e.target;
    const parentDiv = img.parentElement.parentElement;
    
    if (img.naturalWidth < img.naturalHeight) {
      parentDiv.style.width = '386px';
      parentDiv.style.height = '673px';
    } else {
      parentDiv.style.width = '386px';
      parentDiv.style.height = '373px';
    }
  };

//   TODO: if props.liked then you should always set showLikeButton to true

  const handleMouseEnter = () => {
    setShowLikeButton(true);
  };

  const handleMouseLeave = () => {
    if (!props.liked) {
        setShowLikeButton(false);
    }
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="rounded-image" onDoubleClick={props.handleDoubleClick}>
            <img src={props.image} alt="img1" onLoad={handleImageLoad}/>
            {showLikeButton && (
                <div className="like-button" onClick={props.handleLike}>
                    <img src={props.liked ? likeIcon: likedIcon} alt="like icon" onClick={() => console.log('Liked!')}/>
                </div>
            )}
        </div>
       
        <div className="card-content">
            <div className="categories">
                <div className="category-frame">
                    <p className="p5">{props.major}</p>
                </div>
                <div className="category-frame">
                    <p className="p5">{props.location}</p>
                </div>
                <div className="category-frame">
                    <p className="p5">{props.availability}</p>
                </div>
                <div className="category-frame">
                    <p className="p5">{props.price}</p>
                </div>
            </div>
            <p className="p7"><span className='italics'>{props.title}</span> - {props.artist}</p>
        </div>
    </div>
  );
};

export default Card;
