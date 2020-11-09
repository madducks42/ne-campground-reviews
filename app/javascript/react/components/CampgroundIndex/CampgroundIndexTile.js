import React from 'react'
import { Link } from 'react-router-dom';

const CampgroundIndexTile = (props) => {

  return (
    <div className='campground-tile'>
      <div className='card'>
        <img src='images/test_image.jpg' />
        <div className='card-section'>
          <h5><Link to={`/campgrounds/${props.id}`}>{props.name}</Link></h5>
          <h6>{props.location}</h6>
          <p>{props.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default CampgroundIndexTile




