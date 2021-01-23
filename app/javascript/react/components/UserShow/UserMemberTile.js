import React from "react";

const UserMemberTile = (props) => {
  return (
    <div>
      <div className="user-favorites-container callout">
        <h2 className="has-centered-text is-size-2">Favorite Campgrounds</h2>
        <div className="flex-row">{props.campgroundTiles}</div>
      </div>
      <h2 className="has-centered-text is-size-2">{props.reviewMessage}</h2>
      <div className="user-reviews-container">
        <br />
        {props.userReviewsArray}
      </div>
    </div>
  );
};
export default UserMemberTile;
