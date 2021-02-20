export const addNewImageFetch = (newImages) => {
  const id = newImages[1]
  const data = newImages[0]
  
  return fetch(`/api/v1/campgrounds/${id}/images`, {
    method: 'POST',
    body: data,
    credentials: 'same-origin',
    headers: {
      "Accept": "application/json",
      // eslint-disable-next-line no-dupe-keys
      "Accept": "image/jpeg" 
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