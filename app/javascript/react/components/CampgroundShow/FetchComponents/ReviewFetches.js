export const addNewReviewFetch = (newReview) => {
  return fetch(`/api/v1/campgrounds/${newReview.id}/reviews`, {
    method: "POST",
    body: JSON.stringify(newReview),
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw error;
      }
    })
    .then((response) => response.json())
    .then((newReview) => {
      if (newReview.errors) {
        return newReview.errors;
      } else {
        return newReview;
      }
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
};

export const editedReviewFetch = (editedReview) => {
  const campgroundId = editedReview.campgroundId;
  const reviewId = editedReview.reviewId;
  return fetch(`/api/v1/campgrounds/${campgroundId}/reviews/${reviewId}`, {
    method: "PATCH",
    body: JSON.stringify(editedReview),
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw error;
      }
    })
    .then((response) => response.json())
    .then((editedReview) => {
      if (editedReview.errors) {
        return editedReview.errors;
      } else {
        return editedReview;
      }
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
};

export const deleteReviewFetch = (deletedReview) => {
  debugger
  const campgroundId = deletedReview.campgroundId;
  const reviewId = deletedReview.reviewId;
  return fetch(`/api/v1/campgrounds/${campgroundId}/reviews/${reviewId}`, {
    method: "DELETE",
    body: JSON.stringify(deletedReview),
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw error;
      }
    })
    .then((response) => response.json())
    .then((deletedReview) => {
      if (deletedReview.errors) {
        return deletedReview.errors;
      } else {
        return deletedReview;
      }
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
};
