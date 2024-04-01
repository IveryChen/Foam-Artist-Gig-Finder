import React, { useState } from 'react';
import FilterIcon from '../assets/filter_icon.png';
import './style.css';


const FilterBar = ({ selectedItems, setSelectedItems, handleItemClick, imageData, modifiedImageData, setModifiedImageData}) => {

  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showMajorDropdown, setShowMajorDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAvailabilityDropdown, setShowAvailabilityDropdown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [sortingCriteria, setSortingCriteria] = useState('None');

  const toggleMajorDropdown = () => {
    setShowMajorDropdown(!showMajorDropdown);
  };

  const toggleLocationDropdown = () => {
    setShowLocationDropdown(!showLocationDropdown);
  };

  const toggleAvailabilityDropdown = () => {
    setShowAvailabilityDropdown(!showAvailabilityDropdown);
  };

  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  }

  const resetSelection = () => {
    setIsClicked(true);
    setSortingCriteria('None');
    setSelectedItems(['All Majors', 'All Locations', 'All Availability', 'FAV', 'Ceramics', 'Illustration','Painting', 'Sculpture', 'Jewelry', "Apparel", "Furniture", "PrintMaking", "Graphic Design", "Industrial Design", 'Providence',  'Boston', "Los Angeles", 'New York',  'Chicago', 'Available Now', 'Available Soon', 'Not Available']);
  }

  const majorOptions = ['All Majors', 'FAV', 'Ceramics', 'Illustration','Painting', 'Sculpture', 'Jewelry', "Apparel", "Furniture", "PrintMaking", "Graphic Design", "Industrial Design"];
  const locationOptions = ['All Locations', 'Providence',  'Boston', "Los Angeles", 'New York',  'Chicago'];
  const availabilityOptions = ['All Availability', 'Available Now', 'Available Soon', 'Not Available'];
  
  const handleMajorSelection = (option) => {
    // setShowMajorDropdown(false);

    if (option === 'All Majors') {
      if (!selectedItems.includes('All Majors')) {
        setSelectedItems([...selectedItems, ...majorOptions]);
      } else {
        setSelectedItems(selectedItems.filter(item => !majorOptions.includes(item)));
    }
    } else {
      const updatedSelection = selectedItems.includes(option)
        ? selectedItems.filter(item => item !== option)
        : [...selectedItems, option];
      setSelectedItems(updatedSelection);
    }
  };

  const handleLocationSelection = (option) => {
    // setShowLocationDropdown(false);

    if (option === 'All Locations') {
        if (!selectedItems.includes('All Locations')) {
            setSelectedItems([...selectedItems, ...locationOptions]);
        } else {
            setSelectedItems(selectedItems.filter(item => !locationOptions.includes(item)));
        }
        } else {
        const updatedSelection = selectedItems.includes(option)
            ? selectedItems.filter(item => item !== option)
            : [...selectedItems, option];
        setSelectedItems(updatedSelection);
        }  
    };

  const handleAvailabilitySelection = (option) => {
    // setShowAvailabilityDropdown(false);

    if (option === 'All Availability') {
        if (!selectedItems.includes('All Availability')) {
          setSelectedItems([...selectedItems, ...availabilityOptions]);
        } else {
            setSelectedItems(selectedItems.filter(item => !availabilityOptions.includes(item)));
        }
      } else {
        const updatedSelection = selectedItems.includes(option)
          ? selectedItems.filter(item => item !== option)
          : [...selectedItems, option];
        setSelectedItems(updatedSelection);
      }  
    };

    const handleSortSelection = (option) => {
        setSortingCriteria(option);
        setShowSortDropdown(false);
        
        if (option === 'Price') {
          const sortedImageData = [...imageData];
            sortedImageData.sort((a, b) => {
                const priceA = a.price.length;
                const priceB = b.price.length;
                if (priceA < priceB) { return -1;}
                if (priceA > priceB) { return 1; }
                return 0; 
          });

          setModifiedImageData(sortedImageData);

        } else if (option === 'Artist Name') {
            const sortedImageData = [...imageData];
            sortedImageData.sort((a, b) => a.artist.localeCompare(b.artist));
            setModifiedImageData(sortedImageData);

        } else {
            setModifiedImageData(imageData);
        }
      };

  return (
    <div className="filter-bar">
        <p1 className="grey-text">Filter By</p1>

        <div className="dropdown-container">
            <div className="button-frame" onClick={toggleMajorDropdown}>
                    <div className="button-content">
                            <img src={FilterIcon} alt="filter"/>
                            <p1>Major</p1>
                    </div>
            </div>
            {showMajorDropdown && (
                <div className="dropdown-menu">
                    {['All Majors', 'FAV', 'Ceramics', 'Illustration', 'Sculpture', 'Painting', 'Jewelry', "Apparel", "Furniture", "PrintMaking", "Graphic Design", "Industrial Design"].map((option) => (
                    <label key={option}>
                        <input
                        type="checkbox"
                        checked={selectedItems.includes(option)}
                        onChange={() => handleMajorSelection(option)}
                        />
                        {option}
                    </label>
                    ))}
                </div>
            )}
        </div>

        <div className="dropdown-container">
            <div className="button-frame" onClick={toggleLocationDropdown}>
                    <div className="button-content">
                            <img src={FilterIcon} alt="filter"/>
                            <p1>Location</p1>
                    </div>
            </div>
            {showLocationDropdown && (
                        <div className="dropdown-menu">
                            {['All Locations', 'Providence', 'Boston', 'New York', 'Los Angeles', 'Chicago'].map((option) => (
                            <label key={option}>
                                <input
                                type="checkbox"
                                checked={selectedItems.includes(option)}
                                onChange={() => handleLocationSelection(option)}
                                />
                                {option}
                            </label>
                            ))}
                        </div>
            )}
        </div>

       <div className="dropdown-container">
            <div className="button-frame" onClick={toggleAvailabilityDropdown}>
                    <div className="button-content">
                            <img src={FilterIcon} alt="filter"/>
                            <p1>Availability</p1>
                    </div>
            </div>
            {showAvailabilityDropdown && (
                <div className="dropdown-menu">
                    {['All Availability', 'Available Now', 'Available Soon', 'Not Available'].map((option) => (
                    <label key={option}>
                    <input
                    type="checkbox"
                    checked={selectedItems.includes(option)}
                    onChange={() => handleAvailabilitySelection(option)}
                    />
                    {option}
                    </label>
                    ))}
                </div>
            )}
       </div>

       <p1 className="grey-text">Sort By</p1>
       <div className="dropdown-container">
            <div className="button-frame" onClick={toggleSortDropdown}>
                    <div className="button-content">
                            <img src={FilterIcon} alt="filter"/>
                            <p1>{sortingCriteria}</p1>
                    </div>
            </div>
            {showSortDropdown && (
                <div className="dropdown-menu">
                    {['None', 'Price', 'Artist Name'].map((option) => (
                    <label key={option}>
                    <input
                    type="checkbox"
                    checked={sortingCriteria === option}
                    onChange={() => handleSortSelection(option)}
                    />
                    {option}
                    </label>
                    ))}
                </div>
            )}
       </div>

       <div onClick={resetSelection}>
            <div className="button-content">
                <p1 className="underline-text grey-text">Reset All</p1>
            </div>
        </div>

    </div>
  );
};

export default FilterBar;
