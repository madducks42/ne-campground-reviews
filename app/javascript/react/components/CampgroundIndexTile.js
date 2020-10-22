import React from 'react'
import { Link } from 'react-router-dom';

const CampgroundIndexTile = (props) => {

  return (
    <div>
      <Link to={`/campgrounds/${props.id}`}>{props.name}</Link>
    </div>
  )
}

export default CampgroundIndexTile
