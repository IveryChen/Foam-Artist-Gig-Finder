import './style.css';
import React, { useState } from 'react';
import likeIcon from '../assets/like_icon.png';
import likedIcon from '../assets/liked_icon.png';

const Card = (props) => {

  const [showLikeButton, setShowLikeButton] = useState(false);
  const [liked, setLiked] = useState(props.item.liked);

  const handleLike = () =>{
    const newLikedState = !liked;
    setLiked(newLikedState);

    if (newLikedState) {
      props.addToCart({ ...props.item, liked: true });
    }
    else{
      props.removeFromCart(props.item.index);
    }
  };

  const handleDoubleClick = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);

    if (newLikedState) {
      props.addToCart({ ...props.item, liked: true });
    }
    else{
        props.removeFromCart(props.item.index);
    }
  };

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
  };

  const handleMouseLeave = () => {
    if (!liked) {
        setShowLikeButton(false);
    }
  };


  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="rounded-image" onDoubleClick={handleDoubleClick}>
            <img src={props.image} alt="img1" onLoad={handleImageLoad}/>
            {showLikeButton && (
                <div className="like-button" onClick={handleLike}>
                    <img src={liked ? likeIcon: likedIcon} alt="like icon" onClick={() => console.log('Liked!')}/>
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
            </div>
            <p className="p7"><span className='italics'>{props.title}</span> - {props.artist}</p>
        </div>
    </div>
  );
};

export default Card;
