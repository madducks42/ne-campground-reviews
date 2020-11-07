import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from "react-router-dom"
import _ from 'lodash'

// import ErrorList from '../ErrorList'

const AddCampgroundImages = (props) => {
  const [campgroundImages, setCampgroundImages] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

  
  const addImages = (event) => {
    let body = new FormData()
    body.append("image", campgroundImages)
    let id = props.match.params.id

    fetch(`/api/v1/campgrounds/${id}/campground_images`, {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: {
        "Accept": "application/json",
        "Accept": "image/jpeg"
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
  }
  
  if (shouldRedirect) {
    return <Redirect to='/campgrounds' />
  }

  const handleFileUpload = (acceptedFiles) => {
    setCampgroundImages([
      ...campgroundImages,
      acceptedFiles[0]
    ])
  };

  const handleSubmit = event => {
    event.preventDefault(); 
    addImages(campgroundImages);
    setCampgroundImages([])
  };

  return (
    <div className='grid-container wrapper'>
        <h4>Add images</h4>
        <form onSubmit={handleSubmit}>
          <Dropzone onDrop={handleFileUpload} multiple={true}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div className='dropzone-box' {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
          </Dropzone>
          <div>
            <h6>Uploaded Images:</h6>
            <ul>
            {campgroundImages.map(campgroundImage => (
              <li key={campgroundImage.id}>{campgroundImage.name}</li>
            ))}
          </ul>
          </div>
          <div className='button-group'>
            <input className='button' type='submit' value='Submit' />
          </div>
        </form>
    </div>
  )
}
  
export default AddCampgroundImages