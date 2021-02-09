import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from "react-router-dom"
import ErrorList from "../../HelperComponents/ErrorList"

const AddCampgroundImages = (props) => {
  const [campgroundImages, setCampgroundImages] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({});
  
  const addImages = (newImages) => {
    let id = props.currentCampgroundID

    fetch(`/api/v1/campgrounds/${id}/campground_images`, {
      method: 'POST',
      body: newImages,
      credentials: 'same-origin',
      headers: {
        "Accept": "application/json",
        // eslint-disable-next-line no-dupe-keys
        "Accept": "image/jpeg" 
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.errors) {
        setShouldRedirect(false)
        setErrors(body.errors)
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
    let body = new FormData()
    campgroundImages.forEach((image) => {
      body.append('image', image)    
    })
    addImages(body);
    setCampgroundImages([])
  };

  return (
    <div className='container'>
        <h4 className="is-size-4 mt-6">Add Images</h4>
        <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
          <Dropzone onDrop={handleFileUpload} multiple={true}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div className='dropzone-box' {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag and drop some files here, or click to select files</p>
              </div>
            </section>
          )}
          </Dropzone>
          <div>
            <h6 className="is-size-6">Uploaded Images:</h6>
            <ul>
            {campgroundImages.map(campgroundImage => (
              <li key={campgroundImage.id}>{campgroundImage.name}</li>
            ))}
          </ul>
          </div>
          <div className='button-group'>
            <input className='button mt-6 mb-6' type='submit' value='Submit' />
          </div>
        </form>
    </div>
  )
}
  
export default AddCampgroundImages