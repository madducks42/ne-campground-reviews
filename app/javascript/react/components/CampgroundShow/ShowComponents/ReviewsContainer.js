import React from "react";
import ReviewTile from "../ReviewComponents/ReviewTile";

const ReviewsContainer = (props) => {
  
  const reviewsArray = props.reviews.map((review) => {
    
    return (
      <ReviewTile
        key={review.id}
        review={review}
        currentUser={review.currentUser}
        editReview={props.editReview}
        deleteReview={props.deleteReview}
      />
    );
  });

  return (
    <div>
      <ul>{reviewsArray}</ul>
    </div>
  );
};

export default ReviewsContainer;

