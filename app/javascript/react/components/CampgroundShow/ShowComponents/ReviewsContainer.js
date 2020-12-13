import React from "react";
import ReviewTile from "../ReviewComponents/ReviewTile";

const ReviewsContainer = (props) => {
  const reviewsArray = props.reviews.map((review) => {
    
    return (
      <ReviewTile
        key={review.id}
        review={review}
        userIsAdmin={review.userIsAdmin}
        userIsOwner={review.UserIsOwner}
        editReview={props.editReview}
        deleteReview={props.deleteReview}
      />
    );
  });

  return (
    <div className="flex-column">
      {reviewsArray}
    </div>
  );
};

export default ReviewsContainer;

