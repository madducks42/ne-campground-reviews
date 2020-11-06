import React, { useState } from 'react'
import _ from 'lodash'
import { Redirect } from "react-router-dom"

import ErrorList from '../ErrorList'

const NewCampgroundForm = (props) => {
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

  const [newCampground, setNewCampground] = useState(defaultFields);
  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  if (shouldRedirect) {
    return <Redirect to='/campgrounds' />
  }

  const addNewCampground = (formData) => {
    fetch("/api/v1/campgrounds", {
      method: 'POST',
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
        // handle errors
      } else {
        setShouldRedirect(true)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = event => {
    setNewCampground({
      ...newCampground,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ['name', 'caption', 'description', 'location']
    requiredFields.forEach(field => {
      if ((newCampground[field].trim() === '') || (newCampground[field].trim() === '') || (newCampground[field].trim() === '') || (newCampground[field].trim() === '')) {
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
      addNewCampground(newCampground);
      setNewCampground(defaultFields);
    }
  };

  return (
    <div className='grid-container wrapper'>

      <form onSubmit={handleSubmit}className='new-campground-form callout'>
        <h3>Add a New Campground</h3>
        <ErrorList errors={errors} />
        <label>
          Name:
          <input
            name='name'
            id='name'
            type='text'
            onChange={handleChange}
            value={newCampground.name}
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
            value={newCampground.caption}
            className='campground-form'
          />
        </label>
        <label>
          Description:
          <input
            name='description'
            id='description'
            type='text'
            onChange={handleChange}
            value={newCampground.description}
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
            value={newCampground.location}
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
            value={newCampground.campground_link}
            className='campground-form'
          />
        </label>
        <label>
          Dogs Allowed:
          <select name='dogs_allowed' value={newCampground.dogs_allowed} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Electric Hookups:
          <select name='electric_hookups' value={newCampground.electric_hookups} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Water Hookups:
          <select name='water_hookups' value={newCampground.water_hookups} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Potable Water:
          <select name='potable_water' value={newCampground.potable_water} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Dump Station:
          <select name='dump_station' value={newCampground.dump_station} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Bathrooms:
          <select name='bathrooms' value={newCampground.bathrooms} onChange={handleChange}>
            <option className='campground-form' value={true}>Yes</option>
            <option className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Showers:
          <select name='showers' value={newCampground.showers} onChange={handleChange}>
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

export default NewCampgroundForm