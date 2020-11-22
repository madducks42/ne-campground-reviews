import React from "react";
import _ from "lodash";

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
    <div className="callout">
      <h6>{props.review.title}</h6>
      <p>{props.review.body}</p>
      <p>Rating: {props.review.rating}</p>
      {buttonChangeGroup}
    </div>
  );
};

export default ShowReviewTile;
