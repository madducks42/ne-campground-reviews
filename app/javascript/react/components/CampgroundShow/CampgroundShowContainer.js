import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import _ from 'lodash'

import ImagesTile from './ShowComponents/ImagesTile'
import DescriptionTile from './ShowComponents/DescriptionTile'
import AmenitiesTile from './ShowComponents/AmenitiesTile'
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ShowComponents/ReviewsContainer'

const CampgroundShowContainer = (props) => {
  const[campground, setCampground] = useState({})
  const[reviews, setReviews] = useState([])
  const[currentUser, setCurrentUser] = useState({})
  const[userIsAdmin, setUserIsAdmin] = useState({})
  
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
      setCampground(body)
      setReviews(body.reviews)
      setUserIsAdmin(body.userIsAdmin)
      if (body.currentUser != null) {
        setCurrentUser(body.currentUser)
      }
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

  const editReview = (payload) => {
    const campgroundId = payload.campgroundId
    const reviewId = payload.reviewId
    fetch(`/api/v1/campgrounds/${campgroundId}/reviews/${reviewId}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((updatedReview) => {
        if (!updatedReview.errors) {
          let reviewIndex = reviews.findIndex(
            (review) => review.id === updatedReview.id
          );
          let tempReviews = [...reviews];
          tempReviews.splice(reviewIndex, 1, updatedReview);
          setReviews(tempReviews);
  
        } else if (updatedReview.errors) {
          setErrors(updatedReview.errors);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  // const deleteReview = (message) => {
  //   let reviewId = message.id;

  //   fetch(`/api/v1/giraffes/${id}/reviews/${reviewId}`, {
  //     credentials: "same-origin",
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //         throw error;
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((removeReview) => {
  //       if (!removeReview.errors) {
  //         let reviewIndex = giraffe.reviews.findIndex(
  //           (review) => review.id === removeReview.id
  //         );

  //         let tempReviews = [...giraffe.reviews];
  //         tempReviews.splice(reviewIndex, 1);

  //         setGiraffe({
  //           ...giraffe,
  //           reviews: tempReviews,
  //         });
  //       } else if (review.errors) {
  //         setErrors(review.errors);
  //       }
  //     })
  //     .catch((error) => console.error(`Error in fetch: ${error.message}`));
  // };

  let reviewForm
  if (campground.userSignedIn) {
    reviewForm = <ReviewForm addNewReview={addNewReview}/>
  }

  let noReviewsMessage = ""

  if (reviews.length === 0) {
    noReviewsMessage = "No reviews yet."
  }

  let averageRatingMessage = campground.averageRating
  if (averageRatingMessage === null) {
    averageRatingMessage = "No ratings yet."
  }

  return (
    <div className='grid-container fluid show-container wrapper'>
      <div className='grid-x grid-margin-x'>
        <div className='cell auto'>
          < ImagesTile />
        </div>
      </div>
      <div className='grid-x grid-margin-x'>
        <div className='cell auto'>
          < DescriptionTile 
            key={campground.id}
            campgroundLink={campground.campground_link}
            name={campground.name}
            description={campground.description}
            location={campground.location}
          />
        </div>
      </div>
      <div className='grid-x grid-margin-x amenities-container'>
        <div className='cell small-4'>Placeholder for map</div>
        <div className='cell auto'>
        < AmenitiesTile 
            key={campground.id}
            campgroundLink={campground.campground_link}
            dogsAllowed={campground.dogs_allowed}
            electronicHookups={campground.electronic_hookups}
            waterHookups={campground.water_hookups}
            potableWater={campground.potable_water}
            dumpStation={campground.dump_station}
            bathrooms={campground.bathrooms}
            showers={campground.showers}
          />
        </div>
      </div>
      {currentUser.role === 'admin' && <div className='grid-x grid-margin-x admin-flex'>
        <Link className='admin-link' to={`/campgrounds/${campground.id}/update`}>Update Campground</Link>
        <Link className='admin-link' to={`/campgrounds/${campground.id}/destroy`}>Delete Campground</Link>
      </div>}
      <div className='grid-x grid-margin-x'>
        <div className='cell'>
          {reviewForm}
        </div>
      </div>
      <div className='grid-x grid-margin-x reviews-container'>
        <div className='cell'>
          <h3>Average Rating: {averageRatingMessage}</h3>
          <h3>Reviews: {noReviewsMessage}</h3>
          <ReviewsContainer
            reviews={reviews}
            userIsAdmin={userIsAdmin}
            editReview={editReview}
            // deleteReview={deleteReview}
          />
        </div>
      </div>
    </div>
  )
}

export default CampgroundShowContainer