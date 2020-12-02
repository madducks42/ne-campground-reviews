import React from "react";

const DeleteReviewTile = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let deletedReview = { 
      reviewId: props.review.id,
      campgroundId: props.review.campground.id, 
      review: props.review 
    };
    debugger
    props.deleteReview(deletedReview);
  };

  return (
    <div className='callout'>
      <h4>{props.review.title}</h4>
      <p>{props.review.body}</p>
      <p>Rating: {props.review.rating}</p>
        <button
          className="button"
          type="button"
          onClick={handleSubmit}
        >
          Yes Delete
        </button>
        <button
          className="button delete-button"
          type="button"
          onClick={props.onCancelDeleteClickHandler}
        >
          No! Keep
        </button>
      </div>
  );
};

export default DeleteReviewTile;