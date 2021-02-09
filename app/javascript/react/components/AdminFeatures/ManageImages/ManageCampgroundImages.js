import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";

import ImageTiles from "./ImageTiles";
import AddCampgroundImages from "./AddCampgroundImages";
// import ErrorList from "../HelperComponents/ErrorList"

const ManageCampgroundImages = (props) => {
  const [campgroundImages, setCampgroundImages] = useState([]);

  let currentCampgroundID = props.match.params.id;
  // api/v1/campgrounds/:campground_id/campground_images
  useEffect(() => {
    fetch(`/api/v1/campgrounds/${currentCampgroundID}/campground_images`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setCampgroundImages(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let imageTiles = campgroundImages.map((image) => {
    return <ImageTiles key={image.id} url={image.image.url} />;
  });

  return (
    <div className="container mt-6">
      <h1 className="is-size-1">Manage Campground Images</h1>
      <div className="flex-row">{imageTiles}</div>
      <AddCampgroundImages currentCampgroundID={currentCampgroundID} />
    </div>
  );
};

export default ManageCampgroundImages;