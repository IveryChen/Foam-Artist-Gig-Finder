import React, { useState, useEffect } from 'react';
import Card from './Card';
import imageData from "../assets/image-data.json";
  
const MainPage = ({selectedItems, addToCart, cart, removeFromCart, handleDoubleClick, handleLike, setLikedItems, likedItems}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
      const importedImages = imageData.map(item => {
        return import(`../${item.image}`).then(module => module.default);
      });
  
      Promise.all(importedImages).then(images => {
        setImages(images);
      });
    }, []);

    const filteredImageData = imageData.filter(item => {
        return (
          selectedItems.includes(item.major) &&
          selectedItems.includes(item.location) &&
          selectedItems.includes(item.availability)
        );
    });

  return (
    <div className="main-page">
        {likedItems.map((item)=>(
        <p> {item.artist} {item.index} </p>))}

        {filteredImageData.map((item, index) => ( 
            <Card
            item={item}
            major={item.major}
            location={item.location}
            availability={item.availability}
            title={item.title}
            artist={item.artist}
            image={images[item.index]}
            price={item.price}
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

export default MainPage;
