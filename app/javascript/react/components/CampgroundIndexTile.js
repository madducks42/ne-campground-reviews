import React from 'react'
import { Link } from 'react-router-dom';

const CampgroundIndexTile = (props) => {

  return (
    <div className='cell small-3 campground-tile'>
      <div className='card'>
        <img src='images/test_image.jpg' />
        <div className='card-section'>
          <h4><Link to={`/campgrounds/${props.id}`}>{props.name}</Link></h4>
          <p>{props.location}</p>
          <p>{props.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default CampgroundIndexTile




