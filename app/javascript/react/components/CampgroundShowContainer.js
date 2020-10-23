import React, { useState, useEffect } from 'react'

import CampgroundShowTile from './CampgroundShowTile'
import ReviewShowTile from './ReviewShowTile'

const CampgroundShowContainer = (props) => {
  const[campgroundShow, setCampgroundShow] = useState("")

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/campgrounds/${id}.json`)
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
        < ReviewShowTile
          key={review.id}
          title={review.title}
          comment={review.comment}
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
    <div>
      < CampgroundShowTile 
        key={campgroundShow.id}
        name={campgroundShow.name}
        description={campgroundShow.description}
        location={campgroundShow.location}
        amenities={campgroundShow.amenities}
      />
      <h3>Average Rating: {getAvgRating()}</h3>
      <h3>Reviews: {noReviewsMessage}</h3>
      {campgroundReviews}
    </div>
  )
}

export default CampgroundShowContainer