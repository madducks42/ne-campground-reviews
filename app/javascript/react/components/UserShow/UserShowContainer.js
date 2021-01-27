import React, { useState, useEffect } from "react";

import { getUserData } from "./UserShowFetches/UserData";
import UserReviewTile from "./UserReviewTile";
import CampgroundTile from "../HelperComponents/CampgroundTile";
import UserMemberTile from "../UserShow/UserMemberTile";
import UserAdminTile from "../UserShow/UserAdminTile";
import AdminViewUserTile from "../UserShow/AdminViewUserTile";

const UserShowContainer = (props) => {
  const [userInfo, setUserInfo] = useState({
    userID: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    accountCreated: "",
    userIsAdmin: "",
    userIsCurrentUser: "",
  });
  const [userReviews, setUserReviews] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);
  // const [currentUserID, setCurrentUserID] = useState();

  useEffect(() => {
    let id = props.match.params.id;
    getUserData(id).then((body) => {
      let isCurrentUser = null
      if (body.id === body.currentUser.id) {
        isCurrentUser = true
      } else {
        isCurrentUser = false
      };
      setUserInfo({
        userID: body.id,
        firstName: body.first_name,
        lastName: body.last_name,
        username: body.username,
        email: body.email,
        accountCreated: body.accountCreated,
        userIsAdmin: body.userIsAdmin,
        userIsCurrentUser: isCurrentUser,
      });
      setUserReviews(body.reviews);
      setUserFavorites(body.campgrounds);
      // setCurrentUserID(body.currentUser.id);
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
  let reviewMessage = "~ Your Reviews ~";

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
  let userIsAdmin = userInfo.userIsAdmin;

  if (userIsAdmin === false) {
    // if current user is not an admin
    userDisplayTile = (
      <UserMemberTile
        // currentUserID={currentUserID}
        userInfo={userInfo}
        campgroundTiles={campgroundTiles}
        reviewMessage={reviewMessage}
        userReviewsArray={userReviewsArray}
      />
    );
  } else if (userIsAdmin === true && userInfo.userID == props.match.params.id) {
    // if current user is an admin & is viewing their profile
    userDisplayTile = <UserAdminTile userInfo={userInfo} />;
  } else if (userIsAdmin === true && userInfo.userID != props.match.params.id) {
    userDisplayTile = (
      // if current user is an admin & is viewing another user's profile
      <AdminViewUserTile
      // currentUserID={currentUserID}
      // userInfo={userInfo}
      // campgroundTiles={campgroundTiles}
      // reviewMessage={reviewMessage}
      // userReviewsArray={userReviewsArray}
      />
    );
  }

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-full">{userDisplayTile}</div>
      </div>
    </div>
  );
};

export default UserShowContainer;

// useEffect(() => {
//   let id = props.match.params.id;
//   fetch(`/api/v1/users/${id}`)
//     .then((response) => {
//       if (response.ok) {
//         return response;
//       } else {
//         let errorMessage = `${response.status} (${response.statusText})`,
//           error = new Error(errorMessage);
//         throw error;
//       }
//     })
//     .then((response) => response.json())
//     .then((body) => {
//       setUserInfo({
//         userID: body.id,
//         firstName: body.first_name,
//         lastName: body.last_name,
//         username: body.username,
//         email: body.email,
//         accountCreated: body.accountCreated,
//         userIsAdmin: body.userIsAdmin,
//       });

//       setUserReviews(body.reviews);

//       setUserFavorites(body.campgrounds);
//     })
//     .catch((error) => console.error(`Error in fetch: ${error.message}`));
// }, []);
