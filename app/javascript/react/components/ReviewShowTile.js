import React from 'react'

const ReviewShowTile = (props) => {
  return (
    <div className='callout'>
      <h6>{props.title}</h6>
      <p>{props.body}</p>
      <p>Rating: {props.rating}</p>
    </div>
  )
}

export default ReviewShowTile