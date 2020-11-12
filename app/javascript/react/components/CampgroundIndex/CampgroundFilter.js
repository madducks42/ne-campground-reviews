import React, { useState } from "react"

const CampgroundFilter = (props) => {
  // const [locations, setLocations] = useState([]);
  const [filterObjects, setFilterObjects] = useState ({
    massachusetts: false,
    newHampshire: false,
    vermont: false,
    maine: false,
    newYork: false
  });

  const handleInputChange = (event) => {
    // debugger
    const target = event.target;
    let value
    if (target.type === 'checkbox' ? target.checked : target.value = true) {
      value = true
    } else {
      value = false
    }
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // debugger
    setFilterObjects({
      ...filterObjects,
      [name]: value
    });
    // debugger
  }
  
  props.filterCampgrounds(filterObjects)

    return (
      <div className='callout filter-container'>
        <h2>Filter By Location:</h2>
        <div className='filter-items'>  
          <label className='checkbox-label'>
            Massachusetts:
            <input
              className='checkbox-input'
              name="massachusetts"
              type="checkbox"
              checked={filterObjects.massachusetts}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            New Hampshire:
            <input
              className='checkbox-input'
              name="newHampshire"
              type="checkbox"
              checked={filterObjects.newHampshire}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            Vermont:
            <input
              className='checkbox-input'
              name="vermont"
              type="checkbox"
              checked={filterObjects.vermont}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            Maine:
            <input
              className='checkbox-input'
              name="maine"
              type="checkbox"
              checked={filterObjects.maine}
              onChange={handleInputChange} />
          </label>
          <label className='checkbox-label'>
            New York:
            <input
              className='checkbox-input'
              name="newYork"
              type="checkbox"
              checked={filterObjects.newYork}
              onChange={handleInputChange} />
          </label>
        </div>
      </div>
    );
  }

export default CampgroundFilter;
