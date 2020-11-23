import React from "react";

const ShowReviewTile = (props) => {
  let buttonChangeGroup = null;
  if (props.review.userIsAdmin) {
    buttonChangeGroup = (
      <>
        <button
          type="button"
          value="Edit"
          className="button"
          id="edit-review"
          onClick={props.onEditClickHandler}
        >
          Edit
        </button>
        <button
          type="button"
          className="button"
          id="delete-review"
          onClick={props.onDeleteClickHandler}
        >
          Delete
        </button>
      </>
    );
  }

  return (
    <div className="callout review-tile">
      <h5>{props.review.title}</h5>
      <div className="callout">
        <p>{props.review.body}</p>
        <br />
        <p>Rating: {props.review.rating}</p>
        <br />
      </div>
        <p>Created by {props.review.ownerUsername} on {props.review.reviewCreated}</p>
        {buttonChangeGroup}
    </div>
  );
};

export default ShowReviewTile;
