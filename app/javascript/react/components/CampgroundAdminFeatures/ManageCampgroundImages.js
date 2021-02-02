import React, { useState } from 'react'
import { Redirect } from "react-router-dom"

import AddCampgroundImages from "../CampgroundAdminFeatures/AddCampgroundImages"
// import ErrorList from "../HelperComponents/ErrorList"

const ManageCampgroundImages = (props) => {
  let currentCampgroundID = props.match.params.id

  return (
    <div className="container mt-6">
      <h1 className="is-size-1">Manage Campground Images</h1>
      < AddCampgroundImages
        currentCampgroundID={currentCampgroundID}
      />
    </div>
  )
}

export default ManageCampgroundImages