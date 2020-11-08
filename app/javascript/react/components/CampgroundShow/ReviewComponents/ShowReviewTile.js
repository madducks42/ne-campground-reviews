import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import _ from 'lodash'

import ErrorList from '../../ErrorList'

const ShowReviewTile = (props) => {

  let commentDiv = null;
  let buttonChangeGroup = null;

  if (props.review.comment !== "" && props.review.comment !== null) {
    commentDiv = (
      <div className="grid-x">
        <h5 id="comment-label" className="cell shrink">
          Comment:
        </h5>
        <div className="cell auto callout">{props.review.comment}</div>
      </div>
    );
  }

  if (props.review.userIsOwner || props.review.userIsAdmin) {
    buttonChangeGroup = (
      <>
        <button
          type="button"
          className="button cell shrink"
          id="edit-review"
          onClick={props.onEditClickHandler}
        >
          Edit
        </button>
        <button
          type="button"
          className="button cell shrink"
          id="delete-review"
          onClick={props.onDeleteClickHandler}
        >
          Delete
        </button>
      </>
    );
  }

  return (
    <div className='callout'>
      <h6>{props.review.title}</h6>
      <p>{props.review.body}</p>
      <p>Rating: {props.review.rating}</p>
    </div>
  );
};

export default ShowReviewTile