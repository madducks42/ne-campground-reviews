import React, { useState } from "react";

import ErrorList from '../../ErrorList'

const EditReviewTile = (props) => {
  const [review, setReview] = useState({
    title: props.review.title,
    body: props.review.body,
    rating: props.review.rating,
    campgroundId: props.review.campground.id,
    reviewId: props.review.id
  });

  const [errors, setErrors] = useState({})
  const handleChange = event => {
    setReview({
      ...review,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const validForSubmission = () => {
    let submitErrors = {}
    
    const requiredFields = ['title', 'body']
    
    requiredFields.forEach(field => {
      if (review[field].trim() === '') {
        submitErrors = {
          ...submitErrors,
          [field]: 'is blank'
        }
      }
    });

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validForSubmission()) {
      props.editReview(review);
      setReview({
        title: '',
        body: '',
        rating: '',
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}className='new-review-form callout'>
      <h3>Edit Review</h3>
      <ErrorList errors={errors} />
      <label>
        Title:
        <input
          name='title'
          id='title'
          type='text'
          onChange={handleChange}
          value={review.title}
        />
      </label>
      <label>
        Body:
        <input
          name='body'
          id='body'
          type='text'
          onChange={handleChange}
          value={review.body}
        />
      </label>
      <label>
          Rating:
          <select className='campground-form' name='rating' value={review.rating} onChange={handleChange}>
            <option className='campground-form' value='1'>1</option>
            <option className='campground-form' value='2'>2</option>
            <option className='campground-form' value='3'>3</option>
            <option className='campground-form' value='4'>4</option>
            <option className='campground-form' value='5'>5</option>
          </select>
        </label>
      <div className='button-group'>
        <input className='button' type='submit' value='Submit' />
      </div>
    </form>
  );
};

export default EditReviewTile;