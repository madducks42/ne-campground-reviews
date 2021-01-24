import React from "react";

const UserMemberTile = (props) => {
  return (
    <div className="flex-column">
      <div className="user-container">
        <h2 className="has-centered-text is-size-2">
          ~ Favorite Campgrounds ~
        </h2>
        <div className="flex-row">{props.campgroundTiles}</div>
      </div>
      <hr className="style-one" />
      <div className="user-container">
        <h2 className="has-centered-text is-size-2">{props.reviewMessage}</h2>
        <div className="flex-row">
          <br />
          {props.userReviewsArray}
        </div>
      </div>
    </div>
  );
};
export default UserMemberTile;