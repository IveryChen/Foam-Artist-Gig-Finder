import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import FilterBar from "./components/FilterBar.js"
import TopBar from "./components/TopBar.js"
import MainPage from "./components/MainPage.js"


function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    const isSelected = selectedItems.includes(item);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    setSelectedItems(['FAV', 'Ceramics', 'Illustration', 'Jewelry', "Apparel", "Furniture", "PrintMaking", "Graphic Design", "Industrial Design", 'Providence', 'Available Now']); // Default selected items
  }, []); // Run

  return (
    <div className="App">
      <TopBar></TopBar>
      <FilterBar selectedItems={selectedItems} setSelectedItems={setSelectedItems} handleItemClick={handleItemClick}/>
      <MainPage selectedItems={selectedItems}/>
     
    </div>
  );
}

export default App;
