import React from "react";
import { Link } from "react-router-dom";

const UserReviewTile = (props) => {
  return (
    <div className="review-tile-container">
      <h3>
        <Link className="review-link" to={`/campgrounds/${props.campgroundID}`}>
          {props.campgroundName}
        </Link>
      </h3>
      <div className="review-content">
        <h6 className="is-size-6 font-red has-text-weight-semibold">{props.title}</h6>
        <div className="review-callout">
          <p>{props.body}</p>
        </div>
        <p>Rating: {props.rating}</p>
      </div>
    </div>
  );
};

export default UserReviewTile;
