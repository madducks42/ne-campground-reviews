import React, { useState } from 'react'

import EditReview from '../AdminFeatures/EditReview'

const CampgroundShowReviewTile = (props) => {
  const[showEditComponent, setShowEditComponent] = useState(false)

  const onClickShowEdit = event => {
    setShowEditComponent(true)
  }

  // if (showEditComponent === true) {

  // }

  return (
    <div className='callout'>
      <h6>{props.title}</h6>
      <p>{props.body}</p>
      <p>Rating: {props.rating}</p>
      {props.currentUser.role === 'admin' && <div className='grid-x grid-margin-x admin-flex'>
        <input onClick={onClickShowEdit} className='button' type='submit' value='Edit Review' />
        { showEditComponent ? <EditReview /> : null }
      </div>}
    </div>
  )
}

export default CampgroundShowReviewTile