import React from 'react'
import { Link } from 'react-router-dom';

const CampgroundIndexTile = (props) => {

  return (
    <div>
      <tr>
        <td><Link to={`/campgrounds/${props.id}`}>{props.name}</Link></td>
        <td>{props.description}</td>
        <td>{props.location}</td>
        <td>{props.amenities}</td>
      </tr>
    </div>
  )
}

export default CampgroundIndexTile
