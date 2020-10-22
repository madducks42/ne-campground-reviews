import React, { useState, useEffect } from 'react'

import CampgroundShowTile from './CampgroundShowTile'

const CampgroundShowContainer = (props) => {
  const[campgroundShow, setCampgroundShow] = useState("")

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/campgrounds/${id}.json`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Errror(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setCampgroundShow(body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    < CampgroundShowTile 
      key={campgroundShow.id}
      name={campgroundShow.name}
      description={campgroundShow.description}
      location={campgroundShow.location}
      amenities={campgroundShow.amenities}
    />
  )
}

export default CampgroundShowContainer