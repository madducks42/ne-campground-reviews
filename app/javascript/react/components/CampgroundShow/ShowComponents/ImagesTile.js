import React from "react";

import Image from "./Image";

const ImagesTile = (props) => {
  const urls = props.images.map((image) => {
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
        data-lightbox={props.campgroundName}
        data-title={props.campgroundName}
      >
        <img className="galleryimage" src={props.firstImage} alt="Campground" />
      </a>
      {urls}
      <p className="has-text-centered">(click on image to view more)</p>
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
