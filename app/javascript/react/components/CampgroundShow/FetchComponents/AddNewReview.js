const addNewReview = (newReview) => {

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
      }
      let errorMessage = `${response.status} (${response.statusText})`;
      let error = new Error(errorMessage);
      throw error;
    })
    .then((response) => response.json())
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
};
export default addNewReview;
