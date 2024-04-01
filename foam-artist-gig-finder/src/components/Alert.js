import React, { useState, useEffect } from 'react';

const Alert = ({images, likedItems}) => {
    const [lastLikedItemIdx, setLastLikedItemIdx] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [animationKey, setAnimationKey] = useState(0); 
    const [prevLikedItemsLength, setPrevLikedItemsLength] = useState(0);

    useEffect(() => {
        if (likedItems.length > 0) {
            const lastLikedItem = likedItems[likedItems.length - 1];
            setLastLikedItemIdx(lastLikedItem.index);
            setShowAlert(true);
        }
    }, [likedItems]);

    // after animation ends, hide alert as well
    useEffect(() => {
        const handleAnimationEnd = () => {
            setShowAlert(false);
        };

        const alertElement = document.querySelector('.alert-container');
        console.log(alertElement);
        if (alertElement) {
            alertElement.addEventListener('animationend', handleAnimationEnd);

            // Cleanup event listener
            return () => {
                alertElement.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, []);

    useEffect(() => {
        if (likedItems.length > prevLikedItemsLength) {
            setAnimationKey(animationKey + 1);
        }
    }, [likedItems, prevLikedItemsLength]);

    useEffect(() => {
        setPrevLikedItemsLength(likedItems.length);
    });

    return (
        <>
            {showAlert && (
                
               <div 
               key={animationKey}
               className="alert-container"
               >
               {/* <img src={likedIcon} alt="liked icon"/> */}
                <img className="preview-image" src={images[lastLikedItemIdx]} alt="liked icon"/>
                <p className="alert-text">Saved to <span className="alert-text-bold"> Favourites</span></p>
               </div>
            )}
        </>
    );
};

export default Alert;
