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
        location={campground.location}
        caption={campground.caption}
      />
    )
  })

  return(
    <div className='grid-container full'>
      <div className="grid-x grid-margin-x">
        <div className="cell small-4 medium-3 left-nav-bar">
          <ul className='menu left-nav-bar'>
            <li><input className="size" type="search" placeholder="Search" /></li>
            <li><button type="button" className="index-button">Search</button></li>
          </ul>
          <div className='menu filter-section'>
            <ul>
              <li>Filter</li>
              <li>feature</li>
              <li>for</li>
              <li>campgrounds</li>
            </ul>
          </div>
        </div>
        <div className="cell small-8 auto">
          <div className='grid-x grid-margin-x flex-index'>
            {campgroundTiles}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampgroundIndexContainer
