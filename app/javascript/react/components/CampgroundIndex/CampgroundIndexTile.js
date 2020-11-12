import React from 'react'
import { Link } from 'react-router-dom';

const CampgroundIndexTile = (props) => {
  let tileImage

  if (props.name == 'Bear Brook State Park') {
    tileImage = '/images/bear-brook/bear-brook-1.jpg'
  } else if (props.name == 'Forked Lake Campground') {
    tileImage = '/images/forked-lake/forked-lake-1.jpg'
  } else if (props.name == 'Green Lakes State Park') {
    tileImage = '/images/green-lakes/green-lakes-1.jpg'
  } else if (props.name == 'Mount Greylock State Park') {
    tileImage = '/images/greylock/greylock-1.jpg'
  } else if (props.name == 'Letchworth State Park') {
    tileImage = '/images/letchworth/letchworth-1.jpg'
  } else if (props.name == 'Little River State Park') {
    tileImage = '/images/little-river/little-river-1.jpg'
  } else if (props.name == 'Mohawk Trail State Forest') {
    tileImage = '/images/mohawk/mohawk-1.jpg'
  } else if (props.name == 'Moreau Lake State Park') {
    tileImage = '/images/moreau/moreau-1.jpg'
  } else if (props.name == 'Coolidge State Park') {
    tileImage = '/images/coolidge/coolidge-1.jpg'
  } else if (props.name == 'Savoy State Forest') {
    tileImage = '/images/savoy/savoy-1.jpg'
  } 

  return (
    <div className='campground-tile'>
      <div className='card'>
        <img className='tile-image' src={tileImage} />
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




