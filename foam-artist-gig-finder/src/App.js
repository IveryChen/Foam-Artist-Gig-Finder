import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import FilterBar from "./components/FilterBar.js"
import TopBar from "./components/TopBar.js"
import MainPage from "./components/MainPage.js"
import PageWithFilter from "./components/PageWithFilter.js";
import imageData from "./assets/image-data.json";


function App() {
  const [selectedItems, setSelectedItems] = useState(['All Majors', 'All Locations', 'All Availability', 'FAV', 'Ceramics', 'Illustration','Painting', 'Sculpture', 'Jewelry', "Apparel", "Furniture", "PrintMaking", "Graphic Design", "Industrial Design", 'Providence',  'Boston', "Los Angeles", 'New York',  'Chicago', 'Available Now', 'Available Soon', 'Not Available']);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('MainPage');
  const [modifiedImageData, setModifiedImageData] = useState([imageData]);

  const addToCart = (item) =>{
    setCart([...cart, item]);
  };

  const removeFromCart = (itemIdx) => {
    const updatedCart = cart.filter((item) => item.index !== itemIdx);
    setCart(updatedCart);
  };

  const handleItemClick = (item) => {
    const isSelected = selectedItems.includes(item);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleLikedButtonClick = (item) =>{
    setCurrentPage('LikedPage');
  };

  const handleReturnToMainClick = () => {
    setCurrentPage('MainPage');
  }

  // useEffect(() => {
  //   setSelectedItems(['All Majors', 'All Locations', 'All Availability', 'FAV', 'Ceramics', 'Illustration','Painting', 'Sculpture', 'Jewelry', "Apparel", "Furniture", "PrintMaking", "Graphic Design", "Industrial Design", 'Providence',  'Boston', "Los Angeles", 'New York',  'Chicago', 'Available Now', 'Available Soon', 'Not Available']); // Default selected items
  // }, []); 

  return (
    <div className="App">
      <TopBar handleLikedButtonClick={handleLikedButtonClick} handleReturnToMainClick={handleReturnToMainClick}></TopBar>
      <PageWithFilter
        pageType={currentPage}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        handleItemClick={handleItemClick}
        handleReturnToMainClick={handleReturnToMainClick}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
        imageData={imageData}
        modifiedImageData={modifiedImageData}
        setModifiedImageData={setModifiedImageData}
      />
    </div>
  );
}

export default App;
