import React, { useState, useEffect } from 'react'

import CampgroundShowDescriptionTile from './CampgroundShowDescriptionTile'
import CampgroundShowAmenitiesTile from './CampgroundShowAmenitiesTile'
import CampgroundShowReviewTile from './CampgroundShowReviewTile'

const CampgroundShowContainer = (props) => {
  const[campgroundShow, setCampgroundShow] = useState("")

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/campgrounds/${id}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Errror(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setCampgroundShow(body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let campgroundReviews = []
  let noReviewsMessage = ""
  if (campgroundShow.reviews) {
    campgroundReviews = campgroundShow.reviews.map((review) => {
      return(
        < CampgroundShowReviewTile
          key={review.id}
          title={review.title}
          body={review.body}
          rating={review.rating}
        />
      )
    })
  } else {
    noReviewsMessage = "No reviews yet."
  }

  let avgReviewRating = ""
  const getAvgRating = () => {
    if (campgroundShow.reviews) {
      let counter = 0
      campgroundShow.reviews.forEach((review) => {
        counter += review.rating
      })
      avgReviewRating = counter / campgroundShow.reviews.length
    } else {
      avgReviewRating = "No ratings yet."
    }
    return avgReviewRating
  }
  
  return (
    <div className='grid-container fluid show-container'>
      <div className='grid-x grid-margin-x'>
        <div className='cell small-4'>Placeholder for picture</div>
        <div className='cell auto'>
          < CampgroundShowDescriptionTile 
            key={campgroundShow.id}
            name={campgroundShow.name}
            description={campgroundShow.description}
            location={campgroundShow.location}
          />
        </div>
      </div>
      <div className='grid-x grid-margin-x amenities-container'>
        <div className='cell small-4'>Placeholder for map</div>
        <div className='cell auto'>
        < CampgroundShowAmenitiesTile 
            key={campgroundShow.id}
            campgroundLink={campgroundShow.campground_link}
            dogsAllowed={campgroundShow.dogs_allowed}
            electronicHookups={campgroundShow.electronic_hookups}
            waterHookups={campgroundShow.water_hookups}
            potableWater={campgroundShow.potable_water}
            dumpStation={campgroundShow.dump_station}
            bathrooms={campgroundShow.bathrooms}
            showers={campgroundShow.showers}
          />
        </div>
      </div>
      <div className='grid-x grid-margin-x'>
        <div className='cell'>
          <h3>Average Rating: {getAvgRating()}</h3>
          <h3>Reviews: {noReviewsMessage}</h3>
          {campgroundReviews}
        </div>
      </div>
    </div>
  )
}

export default CampgroundShowContainer