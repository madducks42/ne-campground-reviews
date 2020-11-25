const getCampgroundData = (id) => {
  return(
    fetch(`/api/v1/campgrounds/${id}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } 
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage);
        throw error;
      })
     .then((response) => response.json())
     .catch(error => console.error(`Error in fetch: ${error.message}`))
   )  
 }
 export default getCampgroundData