import React, { useState, useEffect } from 'react';
import Card from './Card';
import imageData from "../assets/image-data.json";
  
const LikePage = ({selectedItems, addToCart, cart, removeFromCart, handleDoubleClick, handleLike, likedItems, setLikedItems,  imageData, setSelectedItems, modifiedImageData, setModifiedImageData, images, setImages}) => {

    // const [images, setImages] = useState([]);

    useEffect(() => {
      const importedImages = imageData.map(item => {
        return import(`../${item.image}`).then(module => module.default);
      });
  
      Promise.all(importedImages).then(images => {
        setImages(images);
      });
    }, []);

    useEffect(() => {
        const allMajors = imageData.map(item => item.major);
        const allLocations = imageData.map(item => item.location);
        const allAvailabilities = imageData.map(item => item.availability);
        setSelectedItems([...selectedItems, ...allMajors, ...allLocations, ...allAvailabilities]);
        setModifiedImageData(imageData);
    }, []);

    useEffect(() => {
        const filteredModifiedImageData = modifiedImageData.filter(item => cart.some(cartItem => cartItem.index === item.index));
        setModifiedImageData(filteredModifiedImageData);
    }, [cart, modifiedImageData]);

    const filteredImageData = modifiedImageData.filter(item => {
        return (
          selectedItems.includes(item.major) &&
          selectedItems.includes(item.location) &&
          selectedItems.includes(item.availability)
        );
    });

    console.log(filteredImageData);

  return (
    <div className="main-page">
        {filteredImageData.map((item, index) => ( 
            <Card
            item={item}
            major={item.major}
            location={item.location}
            availability={item.availability}
            title={item.title}
            artist={item.artist}
            image={images[item.index]}
            setLikedItems={setLikedItems}
            likedItems={likedItems}
            liked={likedItems.some(likedItem => likedItem.index === item.index)}
            handleLike={() => handleLike(item)}
            handleDoubleClick={() => handleDoubleClick(item)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            />
          ))}
    </div>
  );
};

export default LikePage;
