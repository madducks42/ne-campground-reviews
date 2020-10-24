import React, { useState, useEffect } from "react"

import CampgroundIndexTile from './CampgroundIndexTile'

const CampgroundIndexContainer = (props) => {
  const [campgrounds, setCampgrounds] = useState([])

  useEffect(() => {
    fetch("/api/v1/campgrounds")
    .then(response => {
      if(response.ok){
        return response
      } else{
        let errorMessage = `${response.status}(${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      setCampgrounds(body)
    }).catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])
  
  let campgroundTiles = campgrounds.map((campground) => {
    return(
      < CampgroundIndexTile
        key={campground.id}
        id={campground.id}
        name={campground.name}
        description={campground.description}
        location={campground.location}
        amenities={campground.amenities}

      />
    )
  })

  return(
    <div>
      {/* <img src={require('../../../assets/images/sunset_boat.jpg')} /> */}
      <div className='landing_image_index'></div>
      <div className ='grid-container'>
        <h4>Campgrounds</h4>
        <table>
          <thead>
            <tr>
              <th width="200">Campground Name:</th>
              <th>Description:</th>
              <th width="150">Amenities:</th>
              <th width="150">Location:</th>
            </tr>
          </thead>
          <tbody>
            {campgroundTiles}
          </tbody>
        </table>
      </div>    
    </div>
  )
}

export default CampgroundIndexContainer