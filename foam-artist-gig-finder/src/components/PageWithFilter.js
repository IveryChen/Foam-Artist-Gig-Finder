// Higher-order component (HOC)
import React from 'react';
import FilterBar from './FilterBar';
import MainPage from './MainPage';
import LikePage from './LikePage';
import ReturnIcon from '../assets/return_icon.png';


const PageWithFilter = ({pageType, selectedItems, setSelectedItems, handleItemClick, handleReturnToMainClick, addToCart, removeFromCart, cart}) => {
  return (
    <div>
      {pageType === 'MainPage' && (
        <>
          <FilterBar
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleItemClick={handleItemClick}
          />
          <MainPage selectedItems={selectedItems} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart}/>
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
        <LikePage selectedItems={selectedItems} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart}/>
        </>
      )}
    </div>
  );
};

export default PageWithFilter;
