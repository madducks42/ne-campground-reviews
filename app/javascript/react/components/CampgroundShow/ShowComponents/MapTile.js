import React from 'react'

const MapTile = () => {
  
  return (
    <div className="lightbox-container">
      <a href="/images/map.jpg" data-lightbox="map" data-title="Test Image">
        <img className ="map-image" src="/images/map.jpg" alt="campground map"/>
      </a>
    </div>
  )
}

export default MapTile
