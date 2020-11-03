import React, { useState, useEffect } from 'react'

import CampgroundShowDescriptionTile from './CampgroundShowDescriptionTile'
import CampgroundShowAmenitiesTile from './CampgroundShowAmenitiesTile'
import CampgroundReviewFormContainer from './CampgroundReviewFormContainer'
import CampgroundShowReviewTile from './CampgroundShowReviewTile'

const CampgroundShowContainer = (props) => {
  const[campgroundShow, setCampgroundShow] = useState("")
  const[reviews, setReviews] = useState([])
  
  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/campgrounds/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Errror(errorMessage)
        throw error
      }
    })
    .then(body => {
      setCampgroundShow(body)
      setReviews(body.reviews)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, []);
  
  const addNewReview = (formData) => {
    fetch(`/api/v1/campgrounds/${props.match.params.id}/reviews`, {
      method: 'POST',
      body: JSON.stringify(formData),
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {
      setReviews([...reviews, body]);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  let reviewForm
  if (campgroundShow.userSignedIn) {
    reviewForm = <CampgroundReviewFormContainer addNewReview={addNewReview}/>
  }

  let noReviewsMessage = ""
  const campgroundReviews = reviews.map((review) => {
    return(
      < CampgroundShowReviewTile
        key={review.id}
        title={review.title}
        body={review.body}
        rating={review.rating}
      />
    )
  })

  if (reviews.length === 0) {
    noReviewsMessage = "No reviews yet."
  }

  let averageRatingMessage = campgroundShow.averageRating
  if (averageRatingMessage === null) {
    averageRatingMessage = "No ratings yet."
  }

  return (
    <div className='grid-container fluid show-container wrapper'>
      <div className='grid-x grid-margin-x'>
        <div className='cell small-4'>Placeholder for picture</div>
        <div className='cell auto'>
          < CampgroundShowDescriptionTile 
            key={campgroundShow.id}
            campgroundLink={campgroundShow.campground_link}
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
          {reviewForm}
        </div>
      </div>
      <div className='grid-x grid-margin-x reviews-container'>
        <div className='cell'>
          <h3>Average Rating: {averageRatingMessage}</h3>
          <h3>Reviews: {noReviewsMessage}</h3>
          {campgroundReviews}
        </div>
      </div>
    </div>
  )
}

export default CampgroundShowContainer