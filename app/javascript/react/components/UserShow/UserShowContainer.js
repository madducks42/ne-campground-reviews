import React, { useState, useEffect } from "react";

import UserShowTile from "./UserShowTile";
import UserReviewTile from "./UserReviewTile";

const UserShowContainer = (props) => {
  const [userInfo, setUserInfo] = useState({
    userID: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });
  const [userReviews, setUserReviews] = useState([]);

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
        });
        setUserReviews(body.reviews);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let userReviewArray = [];
  let userNoReviewMessage = "";
  if (userInfo.reviews) {
    userReviewArray = userInfo.reviews.map((review) => {
      return (
        <UserReviewTile
          key={review.id}
          title={review.title}
          body={review.body}
          rating={review.rating}
          current_user={review.currentUser}
        />
      );
    });
  } else {
    userNoReviewMessage = "You have not posted any reviews yet.";
  }

  return (
    <div className="grid-container show-style">
      <div className="user-show-container">
        <UserShowTile userInfo={userInfo} />

        <h3>Reviews: {userNoReviewMessage}</h3>
        {userReviewArray}
      </div>
    </div>
  );
};

export default UserShowContainer;
