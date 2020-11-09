import React, { useState } from "react";
import ShowReviewTile from "./ShowReviewTile";
import EditReviewTile from "./EditReviewTile";
import DeleteReviewTile from "./DeleteReviewTile";

const ReviewTile = (props) => {
  const [showEditTile, setShowEditTile] = useState(false);
  const [showDeleteTile, setShowDeleteTile] = useState(false);

  const onEditClickHandler = (event) => {
    setShowEditTile(true);
    setShowDeleteTile(false);
  };

  const onDeleteClickHandler = (event) => {
    setShowDeleteTile(true);
    setShowEditTile(false);
  };

  const onDiscardClickHandler = (event) => {
    setShowEditTile(false);
  };

  const onCancelDeleteClickHandler = (event) => {
    setShowDeleteTile(false);
  };

  const onSaveClickHandler = (formPayLoad) => {
    setShowEditTile(false);
    props.editReview(formPayLoad);
  };

  const onConfirmDeleteClickHandler = (event) => {
    props.deleteReview(event);
  };

  let displayTile = null;

  if (showEditTile && !showDeleteTile) {
    displayTile = (
      <EditReviewTile
        review={props.review}
        editReview={onSaveClickHandler}
        onDiscardClickHandler={onDiscardClickHandler}
      />
    );
  } else if (showDeleteTile && !showEditTile) {
    displayTile = (
      <DeleteReviewTile
        review={props.review}
        deleteReview={onConfirmDeleteClickHandler}
        onCancelDeleteClickHandler={onCancelDeleteClickHandler}
      />
    );
  } else {
    displayTile = (
      <ShowReviewTile
        review={props.review}
        userIsAdmin={props.userIsAdmin}
        onEditClickHandler={onEditClickHandler}
        onDeleteClickHandler={onDeleteClickHandler}
      />
    );
  }

  return <div>{displayTile}</div>;
};

export default ReviewTile;

  // return (
    // <div className='callout'>
    //   <h6>{props.review.title}</h6>
    //   <p>{props.review.body}</p>
    //   <p>Rating: {props.review.rating}</p>
    //   {props.currentUser.role === 'admin' && <div className='grid-x grid-margin-x admin-flex'>
    //     <input onClick={onClickShowEdit} className='button' type='submit' value='Edit Review' />
    //     { showEditComponent ? <EditReview /> : null }
    //   </div>}
    // </div>
  // )
