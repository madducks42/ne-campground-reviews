import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from "react-router-dom"
import _ from 'lodash'

// import ErrorList from '../ErrorList'

const AddCampgroundImages = (props) => {
  const [campgroundImages, setCampgroundImages] = useState([])

  const handleFileUpload = (acceptedFiles) => {
    setCampgroundImages([
      ...campgroundImages,
      acceptedFiles[0]
    ])
  };

  const handleSubmit = event => {
    event.preventDefault();
    let body = new FormData()
    body.append("campground_image", campgroundImages.image)   
    
    addImages(body);
    setCampgroundImages([])
  };

  const addImages = (event) => {
    fetch('/api/v1/ducks', {
      method: 'POST',
      body: body,
      credentials: "same-origin",
    })
    .then(response => response.json())
    .then(newDuck => {
      setDucks([
        ...ducks,
        newDuck])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

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