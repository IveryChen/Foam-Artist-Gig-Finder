import './style.css';
import React, { useState } from 'react';
import likeIcon from '../assets/like_icon.png';
import likedIcon from '../assets/liked_icon.png';

const Card = (props) => {

  const [showLikeButton, setShowLikeButton] = useState(props.liked);
  const [showCategories, setShowCategories] = useState(false);

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

  const handleMouseEnter = () => {
    setShowLikeButton(true);
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    setShowCategories(false);
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
            {showCategories && <div className="categories">
                <div className="category-frame">
                    <p className="category-text">{props.major}</p>
                </div>
                <div className="category-frame">
                    <p className="category-text">{props.location}</p>
                </div>
                <div className="category-frame">
                    <p className="category-text">{props.availability}</p>
                </div>
                <div className="category-frame">
                    <p className="category-text">{props.price}</p>
                </div>
            </div>
            }
        </div>
       
        <div className="card-content onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}">
            <p className="p7"><span className='italics'>{props.title}</span> - {props.artist}</p>
        </div>
    </div>
  );
};

export default Card;
