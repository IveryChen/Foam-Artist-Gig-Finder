// Higher-order component (HOC)
import React, { useState } from 'react';
import FilterBar from './FilterBar';
import MainPage from './MainPage';
import LikePage from './LikePage';
import ReturnIcon from '../assets/return_icon.png';


const PageWithFilter = ({pageType, selectedItems, setSelectedItems, handleItemClick, handleReturnToMainClick, addToCart, removeFromCart, cart}) => {
    const [likedItems, setLikedItems] = useState([]);

    const handleLike = (item) =>{
        const likedState = likedItems.some(likedItem => likedItem.index === item.index) || false;
        const newLikedState = !likedState;
    
        if (newLikedState) {
          addToCart({ ...item, liked: true });
          setLikedItems([...likedItems, item]);
        }
        else{
          const updatedLikedItems = likedItems.filter(likedItem => likedItem.index !== item.index);
          setLikedItems(updatedLikedItems);          
          removeFromCart(item.index);
        }
    };
    
    const handleDoubleClick = (item) => {
        const likedState = likedItems.some(likedItem => likedItem.index === item.index) || false;
        const newLikedState = !likedState;
    
        if (newLikedState) {
          addToCart({ ...item, liked: true });
          setLikedItems([...likedItems, item]);
        }
        else{
          const updatedLikedItems = likedItems.filter(likedItem => likedItem.index !== item.index);
          setLikedItems(updatedLikedItems);
          removeFromCart(item.index);
        }
    };

  return (
    <div>
      {pageType === 'MainPage' && (
        <>
          <FilterBar
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleItemClick={handleItemClick}
          />
          <MainPage 
            selectedItems={selectedItems} 
            addToCart={addToCart} 
            cart={cart} 
            removeFromCart={removeFromCart} 
            handleLike={handleLike}
            handleDoubleClick={handleDoubleClick} 
            setLikedItems={setLikedItems}
            likedItems={likedItems}/>
        </>
      )}
      {pageType === 'LikedPage' && (
        <>
        <div className="return-button-container">
            <img src={ReturnIcon} onClick={handleReturnToMainClick} alt="return to main page" />
        </div>
        <p className="heading">Favourites</p>
        <FilterBar
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleItemClick={handleItemClick}
        />
        <LikePage 
          selectedItems={selectedItems} 
          addToCart={addToCart} 
          cart={cart} 
          removeFromCart={removeFromCart} 
          handleLike={handleLike}
          handleDoubleClick={handleDoubleClick}
          setLikedItems={setLikedItems}
          likedItems={likedItems}/>
        </>
      )}
    </div>
  );
};

export default PageWithFilter;
