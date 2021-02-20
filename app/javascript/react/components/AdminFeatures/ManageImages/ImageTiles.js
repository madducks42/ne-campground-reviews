import React from 'react'

const ImageTiles = (props) => {
  const url = props.url
  const id = props.id
  const campgroundId = props.campgroundId
  
  const onClickDelete = event => {
    event.preventDefault()
    let deletedImage = { 
      id: id,
      campgroundId: campgroundId, 
    };
    props.deleteImage(deletedImage)
  };
  
  return (
    <div className="m-sm">
      <img className="image-sm" src={url} alt="Campground" />
      <div className="has-text-centered">
        <input onClick={onClickDelete} className='button' type='submit' value='Delete' />
      </div>
    </div>
  )
}

export default ImageTiles