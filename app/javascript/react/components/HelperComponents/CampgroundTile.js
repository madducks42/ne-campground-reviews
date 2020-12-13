import React from "react";
import { Link } from "react-router-dom";

const CampgroundTile = (props) => {
  let tileImage;

  if (props.name == "Bear Brook State Park") {
    tileImage = "/images/bear-brook/bear-brook-1.jpg";
  } else if (props.name == "Forked Lake Campground") {
    tileImage = "/images/forked-lake/forked-lake-1.jpg";
  } else if (props.name == "Green Lakes State Park") {
    tileImage = "/images/green-lakes/green-lakes-1.jpg";
  } else if (props.name == "Mount Greylock State Park") {
    tileImage = "/images/greylock/greylock-1.jpg";
  } else if (props.name == "Letchworth State Park") {
    tileImage = "/images/letchworth/letchworth-1.jpg";
  } else if (props.name == "Little River State Park") {
    tileImage = "/images/little-river/little-river-1.jpg";
  } else if (props.name == "Mohawk Trail State Forest") {
    tileImage = "/images/mohawk/mohawk-1.jpg";
  } else if (props.name == "Moreau Lake State Park") {
    tileImage = "/images/moreau/moreau-1.jpg";
  } else if (props.name == "Coolidge State Park") {
    tileImage = "/images/coolidge/coolidge-1.jpg";
  } else if (props.name == "Savoy State Forest") {
    tileImage = "/images/savoy/savoy-1.jpg";
  }

  return (
    <div className="mr-2 ml-2 mt-2 mb-2">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={tileImage} alt="Campground" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="card-title">
                <Link to={`/campgrounds/${props.id}`}>{props.name}</Link>
              </p>
              <p className="subtitle is-6">{props.location}</p>
            </div>
          </div>
          <div className="content">{props.caption}</div>
        </div>
      </div>
    </div>
  );
};

export default CampgroundTile;
