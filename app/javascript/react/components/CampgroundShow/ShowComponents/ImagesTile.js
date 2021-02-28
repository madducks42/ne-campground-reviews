import React, { useState, useEffect } from "react";

import Image from "./Image";
// import { getImageData } from "../FetchComponents/ImageData";

const ImagesTile = (props) => {
  // debugger

  // let imageData = [];
  // imageData = props.images.map((image) => {
  //   return image.image.url;
  // });

  const urls = props.images.map((image) => {
    // debugger
    return (
      <Image
        key={image.id}
        id={image.id}
        url={image.image.url}
      />
    );
  });

  return (
    <div className="lightbox-container-show">
      <a
        href={props.firstImage}
        data-lightbox="carousel"
        data-title="Campground Images"
      >
        <img className="galleryimage" src={props.firstImage} alt="Campground" />
      </a>
      {urls}
      <p>(click on image to view more)</p>
    </div>
  );
};

export default ImagesTile;

{
  /* <a
        href="/images/sample-gallery/image-2.jpg"
        data-lightbox="carousel"
        data-title="Campground Images"
      ></a>
      <a
        href="/images/sample-gallery/image-3.jpg"
        data-lightbox="carousel"
        data-title="Campground Images"
      ></a>
      <a
        href="/images/sample-gallery/image-4.jpg"
        data-lightbox="carousel"
        data-title="Campground Images"
      ></a>
      <a
        href="/images/sample-gallery/image-5.jpg"
        data-lightbox="carousel"
        data-title="Campground Images"
      ></a>
      <a
        href="/images/sample-gallery/image-6.jpg"
        data-lightbox="carousel"
        data-title="Campground Images"
      ></a> */
}
