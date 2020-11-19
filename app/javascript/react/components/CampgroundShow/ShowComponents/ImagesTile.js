import React from 'react'

const ImagesTile = () => {
  
  return (
    <div className="lightbox-container">
      <a href="/images/sample-gallery/image-1.jpg" data-lightbox="carousel" data-title="Campground Images">
        <img className ="galleryimage" src="/images/sample-gallery/image-1.jpg" alt="Campground"/>
      </a>
      <a href="/images/sample-gallery/image-2.jpg" data-lightbox="carousel" data-title="Campground Images" ></a>
      <a href="/images/sample-gallery/image-3.jpg" data-lightbox="carousel" data-title="Campground Images"></a>
      <a href="/images/sample-gallery/image-4.jpg" data-lightbox="carousel" data-title="Campground Images"></a>
      <a href="/images/sample-gallery/image-5.jpg" data-lightbox="carousel" data-title="Campground Images"></a>
      <a href="/images/sample-gallery/image-6.jpg" data-lightbox="carousel" data-title="Campground Images"></a>
      <p>(click on image to view more)</p>
    </div>
  )
}

export default ImagesTile