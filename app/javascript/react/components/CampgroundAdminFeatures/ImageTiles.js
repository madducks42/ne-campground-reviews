import React from 'react'

const ImageTiles = (props) => {
  let name = props.name
  let url = props.url
  
  return (
    <div className="container mt-6">
      <img src={`https://campground-reviews-dev.s3.amazonaws.com/${url}`} alt="Campground"/>
      <h6>Image Name: {name}</h6>
    </div>
  )
}

export default ImageTiles