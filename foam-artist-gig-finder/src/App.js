import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import TopBar from "./components/TopBar.js"
import PageWithFilter from "./components/PageWithFilter.js";
import Alert from "./components/Alert.js";
import imageData from "./assets/image-data.json";

function App() {
  const [selectedItems, setSelectedItems] = useState(['All Majors', 'All Locations', 'All Availability', 'FAV', 'Ceramics', 'Illustration','Painting', 'Sculpture', 'Jewelry', "Apparel", "Furniture", "PrintMaking", "Graphic Design", "Industrial Design", 'Providence',  'Boston', "Los Angeles", 'New York',  'Chicago', 'Available Now', 'Available Soon', 'Not Available']);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('MainPage');
  const [modifiedImageData, setModifiedImageData] = useState([imageData]);
  const [likedItems, setLikedItems] = useState([]);
  const [images, setImages] = useState([]);

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

  return (
    <div className="App">
      
      <Alert 
        images={images}
        likedItems={likedItems}
      />

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
        likedItems={likedItems}
        setLikedItems={setLikedItems}
        images={images}
        setImages={setImages}
      />
    </div>
  );
}

export default App;
