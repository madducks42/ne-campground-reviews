import React from 'react'

const CampgroundShowDescriptionTile = (props) => {
  
  return (
    <div>
      <h1>{props.name}</h1>
      <p className='paragraph-format'>{props.description}</p>
    </div>
  )
}

export default CampgroundShowDescriptionTile