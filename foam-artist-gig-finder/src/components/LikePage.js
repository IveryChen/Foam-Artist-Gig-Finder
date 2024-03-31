import React, { useState, useEffect } from 'react';
import Card from './Card';
import imageData from "../assets/image-data.json";
  
const LikePage = ({selectedItems, addToCart, cart, removeFromCart}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
      const importedImages = imageData.map(item => {
        return import(`../${item.image}`).then(module => module.default);
      });
  
      Promise.all(importedImages).then(images => {
        setImages(images);
      });
    }, []);

    const filteredImageData = cart.filter(item => {
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
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            />
          ))}
    </div>
  );
};

export default LikePage;
