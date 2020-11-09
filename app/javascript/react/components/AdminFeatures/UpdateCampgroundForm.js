import React, { useEffect, useState } from 'react'
import ErrorList from '../ErrorList'
import { Redirect } from "react-router-dom"

const UpdateCampgroundForm = (props) => {
  let defaultFields = {
    name: '',
    caption: '',
    description: '',
    location: '',
    campground_link: '',
    dogs_allowed: true,
    electric_hookups: true,
    water_hookups: true,
    potable_water: true,
    dump_station: true,
    bathrooms: true,
    showers: true
  };

  const [updatedCampground, setUpdatedCampground] = useState(defaultFields);
  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/campgrounds/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Errror(errorMessage)
        throw error
      }
    })
    .then(body => {
      setUpdatedCampground(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, []);

  const updateCampground = (formData) => {
    let id = props.match.params.id
    fetch(`/api/v1/campgrounds/${id}`, {
      method: 'PATCH',
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
      if (body.errors) {
        setErrors(body.errors)
      } else {
        setShouldRedirect(body.id)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = event => {
    setUpdatedCampground({
      ...updatedCampground,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ['name', 'caption', 'description', 'location']
    requiredFields.forEach(field => {
      if ((updatedCampground[field].trim() === '') || (updatedCampground[field].trim() === '') || (updatedCampground[field].trim() === '') || (updatedCampground[field].trim() === '')) {
        submitErrors = {
          ...submitErrors,
          [field]: 'is blank'
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (validForSubmission()) {
      updateCampground(updatedCampground);
    }
  };

  if (shouldRedirect) {
    return <Redirect to={`/campgrounds/${shouldRedirect}`} />
  }

  return (
    <div className='grid-container wrapper'>

      <form onSubmit={handleSubmit}className='new-campground-form callout'>
        <h3>Update Campground</h3>
        <ErrorList errors={errors} />
        <label>
          Name:
          <input
            name='name'
            id='name'
            type='text'
            onChange={handleChange}
            value={updatedCampground.name}
            className='campground-form'
          />
        </label>
        <label>
          Caption:
          <input
            name='caption'
            id='caption'
            type='text'
            onChange={handleChange}
            value={updatedCampground.caption}
            className='campground-form'
          />
        </label>
        <label>
          Description:
          <textarea
            name='description'
            id='description'
            type='text'
            onChange={handleChange}
            value={updatedCampground.description}
            className='campground-form'
          />
        </label>
        <label>
          Location:
          <input
            name='location'
            id='location'
            type='text'
            onChange={handleChange}
            value={updatedCampground.location}
            className='campground-form'
          />
        </label>
        <label>
          Campground Link:
          <input
            name='campground_link'
            id='campground_link'
            type='text'
            onChange={handleChange}
            value={updatedCampground.campground_link}
            className='campground-form'
          />
        </label>
        <label>
          Dogs Allowed:
          <select className='campground-form' name='dogs_allowed' value={updatedCampground.dogs_allowed} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Electric Hookups:
          <select className='campground-form' name='electric_hookups' value={updatedCampground.electric_hookups} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Water Hookups:
          <select className='campground-form' name='water_hookups' value={updatedCampground.water_hookups} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Potable Water:
          <select className='campground-form' name='potable_water' value={updatedCampground.potable_water} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Dump Station:
          <select className='campground-form' name='dump_station' value={updatedCampground.dump_station} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Bathrooms:
          <select className='campground-form' name='bathrooms' value={updatedCampground.bathrooms} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Showers:
          <select className='campground-form' name='showers' value={updatedCampground.showers} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <div className='button-group'>
          <input className='button' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default UpdateCampgroundForm