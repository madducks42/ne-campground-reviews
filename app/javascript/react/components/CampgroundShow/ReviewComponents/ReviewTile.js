import React, { useState } from "react";
import ShowReviewTile from "./ShowReviewTile";
import EditReviewTile from "./EditReviewTile";
import DeleteReviewTile from "./DeleteReviewTile";

const ReviewTile = (props) => {
  const [showEditTile, setShowEditTile] = useState(false);
  const [showDeleteTile, setShowDeleteTile] = useState(false);

  const onEditClickHandler = () => {
    setShowEditTile(true);
    setShowDeleteTile(false);
  };

  const onDeleteClickHandler = () => {
    setShowDeleteTile(true);
    setShowEditTile(false);
  };

  const onDiscardClickHandler = () => {
    setShowEditTile(false);
  };

  const onCancelDeleteClickHandler = () => {
    setShowDeleteTile(false);
  };

  const onSaveClickHandler = (formPayLoad) => {
    setShowEditTile(false);
    props.editReview(formPayLoad);
  };

  const onConfirmDeleteClickHandler = () => {
    props.deleteReview();
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
        userIsOwner={props.userIsOwner}
        onEditClickHandler={onEditClickHandler}
        onDeleteClickHandler={onDeleteClickHandler}
      />
    );
  }

  return <div>{displayTile}</div>;
};

export default ReviewTile;
