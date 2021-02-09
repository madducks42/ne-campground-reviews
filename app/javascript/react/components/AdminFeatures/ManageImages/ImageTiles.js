import React from 'react'

const ImageTiles = (props) => {
  const url = props.url
  
  return (
    <div className="m-sm">
      <img className="image-sm" src={url}alt="Campground"/>
    </div>
  )
}

export default ImageTiles