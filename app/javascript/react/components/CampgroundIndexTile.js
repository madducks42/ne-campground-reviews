import React from 'react'
import { Link } from 'react-router-dom';

const CampgroundIndexTile = (props) => {

  return (
    <div class='cell'>
      <div class='card'>
        <img src='images/test_image.jpg' />
        <div class='card-section'>
          <h4><Link to={`/campgrounds/${props.id}`}>{props.name}</Link></h4>
          <p>{props.location}</p>
        </div>
      </div>
    </div>
  )
}

export default CampgroundIndexTile
