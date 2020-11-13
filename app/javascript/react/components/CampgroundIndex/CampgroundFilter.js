import React, { useState, useEffect } from "react"

const CampgroundFilter = (props) => {
  const [filterItems, setFilterItems] = useState({
    massachusetts: false,
    newHampshire: false,
    vermont: false,
    maine: false,
    newYork: false,
    dogsAllowed: false,
    electricHookups: false,
    waterHookups: false,
    potableWater: false,
    dumpStation: false,
    bathrooms: false,
    showers: false
  });
  
  useEffect(() => {
    props.filterCampgrounds(filterItems);
  }, [filterItems]); // Only re-run the effect if count changes

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFilterItems({
      ...filterItems,
      [name]: value
    });
 
  }

    return (
      <div className='callout filter-container'>
        <h2>Filter By Location:</h2>
        <div className='filter-items'>  
          <label className='checkbox-label'>
            MA:
            <input
              className='checkbox-input'
              name="massachusetts"
              type="checkbox"
              checked={filterItems.massachusetts}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            NH:
            <input
              className='checkbox-input'
              name="newHampshire"
              type="checkbox"
              checked={filterItems.newHampshire}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            VT:
            <input
              className='checkbox-input'
              name="vermont"
              type="checkbox"
              checked={filterItems.vermont}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            ME:
            <input
              className='checkbox-input'
              name="maine"
              type="checkbox"
              checked={filterItems.maine}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            NY:
            <input
              className='checkbox-input'
              name="newYork"
              type="checkbox"
              checked={filterItems.newYork}
              onChange={handleInputChange} />
          </label>
        </div>
        <h2>Filter By Amenities:</h2>
        <div className='filter-items'>  
          <label className='checkbox-label'>
            Dogs Allowed:
            <input
              className='checkbox-input'
              name="dogsAllowed"
              type="checkbox"
              checked={filterItems.dogsAllowed}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            Electric Hookups:
            <input
              className='checkbox-input'
              name="electricHookups"
              type="checkbox"
              checked={filterItems.electricHookups}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            Water Hookups:
            <input
              className='checkbox-input'
              name="waterHookups"
              type="checkbox"
              checked={filterItems.waterHookups}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            Potable Water:
            <input
              className='checkbox-input'
              name="potableWater"
              type="checkbox"
              checked={filterItems.potableWater}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            Dump Station:
            <input
              className='checkbox-input'
              name="dumpStation"
              type="checkbox"
              checked={filterItems.dumpStation}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            Bathrooms:
            <input
              className='checkbox-input'
              name="bathrooms"
              type="checkbox"
              checked={filterItems.bathrooms}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            Showers:
            <input
              className='checkbox-input'
              name="showers"
              type="checkbox"
              checked={filterItems.showers}
              onChange={handleInputChange} />
          </label>
        </div>
      </div>
    );
  }

export default CampgroundFilter;
