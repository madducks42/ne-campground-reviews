import React from 'react'

const ImageTiles = (props) => {
  let name = props.name
  let url = props.url
  
  return (
    <div className="m-sm">
      <img className="image-sm" src={`https://campground-reviews-dev.s3.amazonaws.com/${url}`} alt="Campground"/>
      <h6 className="is-size-6 has-text-centered">Image Name: {name}</h6>
    </div>
  )
}

export default ImageTiles