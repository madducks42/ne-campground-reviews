import React, { useState, useEffect } from "react";

import UserShowTile from "./UserShowTile";
import UserReviewTile from "./UserReviewTile";
import CampgroundTile from "../HelperComponents/CampgroundTile";
import UserMemberTile from "../UserShow/UserMemberTile";
import UserAdminTile from "../UserShow/UserAdminTile"

const UserShowContainer = (props) => {
  const [userInfo, setUserInfo] = useState({
    userID: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    accountCreated: "",
    userIsAdmin: ""
  });
  const [userReviews, setUserReviews] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    let id = props.match.params.id;
    fetch(`/api/v1/users/${id}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setUserInfo({
          userID: body.id,
          firstName: body.first_name,
          lastName: body.last_name,
          username: body.username,
          email: body.email,
          accountCreated: body.accountCreated,
          userIsAdmin: body.userIsAdmin
        });

        setUserReviews(body.reviews);

        setUserFavorites(body.campgrounds);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let campgroundTiles = userFavorites.map((campground) => {
    return (
      <CampgroundTile
        key={campground.id}
        id={campground.id}
        name={campground.name}
        location={campground.location}
        caption={campground.caption}
      />
    );
  });

  let userReviewsArray = [];
  let reviewMessage = "Your Reviews:";

  if (userReviews) {
    userReviewsArray = userReviews.map((review) => {
      return (
        <UserReviewTile
          key={review.id}
          title={review.title}
          body={review.body}
          rating={review.rating}
          campgroundID={review.campground.id}
          campgroundName={review.campground.name}
        />
      );
    });
  } else {
    reviewMessage = "You have not posted any reviews yet.";
  }

  let userDisplayTile = null;
  let userIsAdmin = userInfo.userIsAdmin

  if (userIsAdmin === false) {
    userDisplayTile = (
      <UserMemberTile
        campgroundTiles={campgroundTiles}
        reviewMessage={reviewMessage}
        userReviewsArray={userReviewsArray}

      />
    );
  } else if (userIsAdmin === true) {
    userDisplayTile = (
      <UserAdminTile
        
      />
    );
}

  return (
    <div className="container">
      <div className="user-show-container">
        <UserShowTile userInfo={userInfo} />
        {userDisplayTile}
      </div>
    </div>
  );
};

export default UserShowContainer;
