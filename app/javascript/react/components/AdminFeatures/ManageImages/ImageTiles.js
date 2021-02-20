import React from 'react'

const ImageTiles = (props) => {
  const url = props.url
  const id = props.id
  const campgroundId = props.campgroundId
  
  const onClickDelete = event => {
    event.preventDefault()
    fetch(`/api/v1/campgrounds/${campgroundId}/images/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(),
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {
      if (body.destroyed === true) {
        console.log("Image deleted")
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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