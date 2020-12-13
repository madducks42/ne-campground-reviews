import React from "react";

const ShowReviewTile = (props) => {
  let buttonChangeGroup = null;
  if ((props.review.userIsAdmin) || (props.review.userIsOwner)) {
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
    <div>
      <h5 className="font-red is-size-5 has-text-weight-semibold">{props.review.title}</h5>
      <div className="review-content">
        <p className="is-size-7">{props.review.body}</p>
        <br />
        <p className="is-size-7">Rating: {props.review.rating}</p>
        <br />
      </div>
        <p className="is-size-7">Created by {props.review.ownerUsername} on {props.review.reviewCreated}</p>
        {buttonChangeGroup}
    </div>
  );
};

export default ShowReviewTile;
