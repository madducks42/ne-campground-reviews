import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { getUserData } from "./UserShowFetches/UserData"
import UserInfoTile from "../UserShow/UserInfoTile"
import UserReviewTile from "./UserReviewTile";
import CampgroundTile from "../HelperComponents/CampgroundTile";

const AdminViewUserTile = (props) => {
  const [userInfo, setUserInfo] = useState({
    userID: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    accountCreated: "",
    userIsAdmin: "",
  });
  const [userReviews, setUserReviews] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);
  const [currentUserID, setCurrentUserID] = useState();

  useEffect(() => {
    let id = props.match.params.id;
    getUserData(id).then((body) => {
      setUserInfo({
        userID: body.id,
        firstName: body.first_name,
        lastName: body.last_name,
        username: body.username,
        email: body.email,
        accountCreated: body.accountCreated,
        userIsAdmin: body.userIsAdmin,
      });
      setUserReviews(body.reviews);
      setUserFavorites(body.campgrounds);
      setCurrentUserID(body.currentUser.id)
    });
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
  let reviewMessage = "~ User's Reviews ~";

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
    reviewMessage = "User has not posted any reviews yet.";
  }

  return (
    <div className="flex-column">
      <div className="user-container">
      <div className="columns is-centered">
        <div className="column is-narrow">
          <Link className="button" to={`/users/${currentUserID}`} >Return to Admin Profile</Link>
          <UserInfoTile userInfo={userInfo} />
        </div>
      </div>
        <h2 className="has-centered-text is-size-2">
          ~ Favorite Campgrounds ~
        </h2>
        <div className="flex-row">{campgroundTiles}</div>
      </div>
      <hr className="style-one" />
      <div className="user-container">
        <h2 className="has-centered-text is-size-2">{reviewMessage}</h2>
        <div className="flex-row">
          <br />
          {userReviewsArray}
        </div>
      </div>
    </div>
  );
};

export default AdminViewUserTile;
