import React, { useState } from 'react'
import _ from "lodash";
import ErrorList from '../ErrorList'

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    title: '',
    body: '',
    rating: '',
    image: '',
    id: props.id
  });

  const [errors, setErrors] = useState({})
  const handleChange = event => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ['title', 'body', 'rating']
    
    requiredFields.forEach(field => {
      if (newReview[field].trim() === '') {
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
      props.newReviewData(true)
      props.addNewReview(newReview);
      setNewReview({
        title: '',
        body: '',
        rating: '',
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}className='new-review-form callout'>
      <h3>Leave A Review!</h3>
      <ErrorList errors={errors} />
      <label>
        Title:
        <input
          name='title'
          id='title'
          type='text'
          onChange={handleChange}
          value={newReview.title}
        />
      </label>
      <label>
        Body:
        <input
          name='body'
          id='body'
          type='text'
          onChange={handleChange}
          value={newReview.body}
        />
      </label>
      <label>
          Rating:
          <select className='campground-form' name='rating' value={newReview.rating} onChange={handleChange}onBlur={handleChange}>
            <option className='campground-form' value={null}>--</option>
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
  )
};

export default ReviewForm