import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from "react-router-dom"
import _ from 'lodash'

import ErrorList from '../ErrorList'

const AddCampgroundImages = (props) => {
  // const [newCampground, setNewCampground] = useState(defaultFields);
  // const [errors, setErrors] = useState({})
  // const [shouldRedirect, setShouldRedirect] = useState(false)

  // if (shouldRedirect) {
  //   return <Redirect to='/campgrounds' />
  // }

  // const addImages = (formData) => {
  //   fetch("/api/v1/campgrounds", {
  //     method: 'POST',
  //     body: JSON.stringify(formData),
  //     credentials: 'same-origin',
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //       error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //     if (body.errors) {
  //       // handle errors
  //     } else {
  //       setShouldRedirect(true)
  //     }
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`));
  // };

  // const handleChange = event => {
  //   setNewCampground({
  //     ...newCampground,
  //     [event.currentTarget.name]: event.currentTarget.value
  //   });
  // };

  // const validForSubmission = () => {
  //   let submitErrors = {}
  //   const requiredFields = ['name', 'caption', 'description', 'location']
  //   requiredFields.forEach(field => {
  //     if ((newCampground[field].trim() === '') || (newCampground[field].trim() === '') || (newCampground[field].trim() === '') || (newCampground[field].trim() === '')) {
  //       submitErrors = {
  //         ...submitErrors,
  //         [field]: 'is blank'
  //       }
  //     }
  //   })

  //   setErrors(submitErrors)
  //   return _.isEmpty(submitErrors)
  // }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   if (validForSubmission()) {
  //     addImages(newCampground);
  //     setNewCampground(defaultFields);
  //   }
  // };

  return (
 <div>
  <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
    {({getRootProps, getInputProps}) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </section>
    )}
  </Dropzone>
 </div>
  )
}
  
export default AddCampgroundImages