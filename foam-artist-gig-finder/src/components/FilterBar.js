import React, { useState } from 'react';
import FilterIcon from '../assets/filter_icon.png';
import './style.css';


const FilterBar = ({ selectedItems, setSelectedItems, handleItemClick }) => {

  const [showMajorDropdown, setShowMajorDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAvailabilityDropdown, setShowAvailabilityDropdown] = useState(false);

  const toggleMajorDropdown = () => {
    setShowMajorDropdown(!showMajorDropdown);
  };
  const toggleLocationDropdown = () => {
    setShowLocationDropdown(!showLocationDropdown);
  };
  const toggleAvailabilityDropdown = () => {
    setShowAvailabilityDropdown(!showAvailabilityDropdown);
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
                    {['FAV', 'Ceramics', 'Illustration', 'Jewelry', "Apparel", "Furniture", "PrintMaking", "Graphic Design", "Industrial Design"].map((option) => (
                    <label key={option}>
                        <input
                        type="checkbox"
                        checked={selectedItems.includes(option)}
                        onChange={() => handleItemClick(option)}
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
                            {['Providence', 'Boston', 'New York', 'Los Angeles', 'Chicago'].map((option) => (
                            <label key={option}>
                                <input
                                type="checkbox"
                                checked={selectedItems.includes(option)}
                                onChange={() => handleItemClick(option)}
                                />
                                {option}
                            </label>
                            ))}
                        </div>
            )}
        </div>


       <p1 className="grey-text">Sort By</p1>
       <div className="dropdown-container">
            <div className="button-frame" onClick={toggleAvailabilityDropdown}>
                    <div className="button-content">
                            <img src={FilterIcon} alt="filter"/>
                            <p1>Availability</p1>
                    </div>
            </div>
            {showAvailabilityDropdown && (
                <div className="dropdown-menu">
                    {['Available Now', 'Available Soon', 'Not Available'].map((option) => (
                    <label key={option}>
                    <input
                    type="checkbox"
                    checked={selectedItems.includes(option)}
                    onChange={() => handleItemClick(option)}
                    />
                    {option}
                    </label>
                    ))}
                </div>
            )}
       </div>
    </div>
  );
};

export default FilterBar;
