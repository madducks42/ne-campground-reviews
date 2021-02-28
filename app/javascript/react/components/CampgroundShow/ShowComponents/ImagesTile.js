import React, { useState, useEffect } from "react";

import Image from "./Image";
// import { getImageData } from "../FetchComponents/ImageData";

const ImagesTile = (props) => {
  // debugger

  let imageData = [];
  imageData = props.campgroundImages.map((image) => {
    return image.image.url;
  });

  return (
    <div className="lightbox-container-show">
      <a
        href={imageData[0]}
        data-lightbox="carousel"
        data-title="Campground Images"
      >
        <img className="galleryimage" src={imageData[0]} alt="Campground" />
      </a>
      <Image image={imageData[1]} />
      <Image image={imageData[2]} />
      {/* <Image image={imageData[3]} /> */}
      {/* <Image image={imageData[4]} /> */}
      {/* <Image image={imageData[5]} /> */}
      {/* <Image image={imageData[6]} /> */}
      {/* <Image image={imageData[7]}/> */}
      
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
