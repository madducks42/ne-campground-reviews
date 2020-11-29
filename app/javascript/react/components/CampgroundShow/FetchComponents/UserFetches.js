export const setCampgroundFavFetch = (favorite) => {
  return fetch(`/api/v1/users/favorite`, {
    method: "POST",
    body: JSON.stringify(favorite),
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
    .then((favorite) => {
      if (favorite.errors) {
        return favorite.errors;
      } else if (favorite.favoriteCampground === true) {
        return true;
      } else if (favorite.favoriteCampground === false) {
        return false;
      } else {
        return null;
      }
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
};
