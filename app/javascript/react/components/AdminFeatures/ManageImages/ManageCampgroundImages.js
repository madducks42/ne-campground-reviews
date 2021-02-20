import React, { useEffect, useState } from "react";

import ImageTiles from "./ImageTiles";
import AddCampgroundImages from "./AddCampgroundImages";
import { addNewImageFetch } from "../FetchComponents/AddNewImageFetch"
import { deleteImageFetch } from "../FetchComponents/DeleteImageFetch"
import ErrorList from "../../HelperComponents/ErrorList"

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

  const deleteImage = async (imageToDelete) => {
    const deletedImage = await deleteImageFetch(imageToDelete);

    if (deletedImage.errors) {
      setErrors(deletedImage.errors);
    } else {
      let imagesIndex = campgroundImages.findIndex(
        (image) => image.id === deletedImage.id
      );
      let tempImages = [...campgroundImages];
      tempImages.splice(imagesIndex, 1);
      setCampgroundImages(tempImages);
    }
  };

  let imageTiles = campgroundImages.map((image) => {
    return (
      <ImageTiles
        key={image.id}
        id={image.id}
        url={image.image.url}
        campgroundId={currentCampgroundID}
        deleteImage={deleteImage}
      />
    );
  });

  return (
    <div className="container mt-6">
      <h1 className="is-size-1">Manage Campground Images</h1>
      <ErrorList errors={errors} />
      <div className="flex-row">{imageTiles}</div>
      <AddCampgroundImages currentCampgroundID={currentCampgroundID} addNewImage={addNewImage} />
    </div>
  );
};

export default ManageCampgroundImages;
