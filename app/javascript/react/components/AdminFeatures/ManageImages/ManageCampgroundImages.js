import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";

import ImageTiles from "./ImageTiles";
import AddCampgroundImages from "./AddCampgroundImages";
import { addNewImageFetch } from "../FetchComponents/AddNewImageFetch"
// import ErrorList from "../HelperComponents/ErrorList"

const ManageCampgroundImages = (props) => {
  const [campgroundImages, setCampgroundImages] = useState([]);
  const [errors, setErrors] = useState({});

  let currentCampgroundID = props.match.params.id;
  useEffect(() => {
    fetch(`/api/v1/campgrounds/${currentCampgroundID}/images`)
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

  const addNewImage = async (newImage) => {
    const addImage = await addNewImageFetch(newImage);
    if (addImage.errors) {
      setErrors(addImage.errors);
    } else {
      setCampgroundImages([...campgroundImages, addImage]);
    }
  };

  let imageTiles = campgroundImages.map((image) => {
    return (
      <ImageTiles
        key={image.id}
        id={image.id}
        url={image.image.url}
        campgroundId={currentCampgroundID}
      />
    );
  });

  return (
    <div className="container mt-6">
      <h1 className="is-size-1">Manage Campground Images</h1>
      <div className="flex-row">{imageTiles}</div>
      <div>
        <h4 className="is-size-6 has-text-centered">Refresh page after adding or deleting images. (I know that sucks I&apos;ll fix it someday)</h4>
      </div>
      <AddCampgroundImages currentCampgroundID={currentCampgroundID} addNewImage={addNewImage} />
    </div>
  );
};

export default ManageCampgroundImages;
