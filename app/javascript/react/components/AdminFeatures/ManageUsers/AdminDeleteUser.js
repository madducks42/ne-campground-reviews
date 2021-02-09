import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const AdminDeleteUser = (props) => {
  const [userToDelete, setUserToDelete] = useState({
    firstName: "",
    lastName: "",
  });
  const [currentUserID, setCurrentUserID] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    let id = props.match.params.id;
    fetch(`/api/v1/users/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((body) => {
        setUserToDelete({
          firstName: body.first_name,
          lastName: body.last_name,
        });
        setCurrentUserID(body.currentUser.id)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const onClickDelete = (event) => {
    event.preventDefault();
    let id = props.match.params.id;
    fetch(`/api/v1/users/${id}`, {
      method: "DELETE",
      body: JSON.stringify(),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((body) => {
        if (body.destroyed === true) {
          setShouldRedirect(true);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  if (shouldRedirect) {
    return <Redirect to={`/users/${currentUserID}`} />;
  }

  return (
    <div className="container">
      <div className="callout mt-6 mb-6 pd-lg">
        <h4 className="is-size-4">
          Are you sure you want to delete {userToDelete.firstName}{" "}
          {userToDelete.lastName}?
        </h4>
        <div>
          <input
            onClick={onClickDelete}
            className="button"
            type="submit"
            value="Delete User"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDeleteUser;
