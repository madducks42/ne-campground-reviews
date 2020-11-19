import React from 'react'

const UserReviewTile = (props) => {
  return (
      <div className = 'callout'>
        <h4>{props.show_title}</h4>
        <p>{props.comment}</p>
        Rating: {props.rating}
      </div>
  )
}

export default UserReviewTile