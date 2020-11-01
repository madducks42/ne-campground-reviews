import React from 'react'

const CampgroundShowAmenitiesTile = (props) => {
  return (
    <div>
      <h3>Campground Info:</h3>
        <ul>
          <li>Official Website - {props.campgroundLink}</li>
          <li>Dogs Allowed - {props.dogsAllowed}</li>
          <li>Electronic Hookups - {props.electronicHookups}</li>
          <li>Water Hookups - {props.waterHookups}</li>
          <li>Potable Water - {props.potableWater}</li>
          <li>Dump Station - {props.dumpStation}</li>
          <li>Bathrooms - {props.bathrooms}</li>
          <li>Showers - {props.showers}</li>
        </ul>
    </div>
  )
}

export default CampgroundShowAmenitiesTile