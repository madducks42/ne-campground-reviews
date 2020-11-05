import React, { useEffect, useState } from 'react'

const DestroyCampground = (props) => {
  
  const deleteCampground = () => {
    let id = props.match.params.id
    fetch(`/api/v1/campgrounds/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(formData),
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      debugger
      if (body.errors) {
        // handle errors
      } else {
        setShouldRedirect(body.id)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const handleSubmit = event => {
    event.preventDefault();
    deleteCampground()
  };

  return (
    <div className='grid-container wrapper'>
      <h4>Are you sure you want to delete this campground?</h4>
      <div className='button-group'>
          <input onSubmit={handleSubmit} className='button' type='submit' value='Delete Campground' />
        </div>
    </div>
  )
}

export default DestroyCampground