import React from 'react'

const CampgroundShowTile = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Description: {props.description}</p>
      <p>Location: {props.location}</p>
      <p>Amenities: {props.amenities}</p>
    </div>
  )
}

export default CampgroundShowTile