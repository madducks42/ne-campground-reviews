import React, { useEffect, useState } from 'react'
import { Redirect } from "react-router-dom"
import ErrorList from "../../HelperComponents/ErrorList"

const DestroyCampground = (props) => {
  const [currentCampground, setCurrentCampground] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/campgrounds/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(body => {
      setCurrentCampground(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, []);
  
  const onClickDelete = event => {
    event.preventDefault()
    let id = props.match.params.id
    fetch(`/api/v1/campgrounds/${id}`, {
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
        setShouldRedirect(true)
      } else
      setErrors(body.errors)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  if (shouldRedirect) {
    return <Redirect to='/campgrounds' />
  }

  return (
    <div className='container'>
      <ErrorList errors={errors} />
      <h4>Are you sure you want to delete {currentCampground.name}?</h4>
      <div>
          <input onClick={onClickDelete} className='button' type='submit' value='Delete Campground' />
        </div>
    </div>
  )
}

export default DestroyCampground