import React, { useState } from 'react'
import ErrorList from './ErrorList'

const NewCampgroundForm = (props) => {
  debugger
  let defaultFields = {
    name: '',
    caption: '',
    description: '',
    location: '',
    campground_link: '',
    dogs_allowed: '',
    electronic_hookups: '',
    water_hookups: '',
    potable_water: '',
    dump_station: '',
    bathrooms: '',
    showers: ''
  };

  const [newCampground, setNewCampground] = useState(defaultFields);
  const [errors, setErrors] = useState({})

  const handleChange = event => {
    setNewCampground({
      ...newCampground,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = [defaultFields]
    
    // requiredFields.forEach(field => {
    //   debugger
    //   if (newCampground[field].trim() === '') {
    //     submitErrors = {
    //       ...submitErrors,
    //       [field]: 'is blank'
    //     }
    //   }
    // })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (validForSubmission()) {
      props.addNewCampground(newCampground);
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
          <select>
            <option name='dogs_allowed' id='dogs_allowed' onChange={handleChange} className='campground-form' value={true}>Yes</option>
            <option name='dogs_allowed' id='dogs_allowed' onChange={handleChange} className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Electronic Hookups:
          <select>
            <option name='electronic_hookups' id='electronic_hookups' onChange={handleChange} className='campground-form' value={true}>Yes</option>
            <option name='electronic_hookups' id='electronic_hookups' onChange={handleChange} className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Water Hookups:
          <select>
            <option name='water_hookups' id='water_hookups' onChange={handleChange} className='campground-form' value={true}>Yes</option>
            <option name='water_hookups' id='water_hookups' onChange={handleChange} className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Potable Water:
          <select>
            <option name='potable_water' id='potable_water' onChange={handleChange} className='campground-form' value={true}>Yes</option>
            <option name='potable_water' id='potable_water' onChange={handleChange} className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Dump Station:
          <select>
            <option name='dump_station' id='dump_station' onChange={handleChange} className='campground-form' value={true}>Yes</option>
            <option name='dump_station' id='dump_station' onChange={handleChange} className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Bathrooms:
          <select>
            <option name='bathrooms' id='bathrooms' onChange={handleChange} className='campground-form' value={true}>Yes</option>
            <option name='bathrooms' id='bathrooms' onChange={handleChange} className='campground-form' value={false}>No</option>
          </select>
        </label>
        <label>
          Showers:
          <select>
            <option name='showers' id='showers' onChange={handleChange} className='campground-form' value={true}>Yes</option>
            <option name='showers' id='showers' onChange={handleChange} className='campground-form' value={false}>Yes</option>
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