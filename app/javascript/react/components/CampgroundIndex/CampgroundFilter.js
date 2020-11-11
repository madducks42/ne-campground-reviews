import React, { useState } from "react"

const CampgroundFilter = (props) => {
  // const [locations, setLocations] = useState([]);
  const [filterItems, setFilterItems] = useState ({
    massachusetts: false,
    newHampshire: false,
    vermont: false,
    maine: false,
    newYork: false
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    setFilterItems({
      ...filterItems,
      [name]: value
    });
    props.filterCampgrounds(filterItems)
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
      </div>
    );
  }

export default CampgroundFilter;
