export const deleteImageFetch = (deletedImage) => {
  const id = deletedImage.id
  const campgroundId = deletedImage.campgroundId
  
  return fetch(`/api/v1/campgrounds/${campgroundId}/images/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(),
    credentials: 'same-origin',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
    .then(body => {
      if (body.errors) {
        return body.errors;
      } else {
        return body;
      }
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}