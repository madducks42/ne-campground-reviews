import React, { useState, useEffect } from "react";
import UsersInfoTile from "./UsersInfoTile";

const UserAdminTile = () => {
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    fetch("/api/v1/users")
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setUsersInfo(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let usersInfoArray = [];

  if (usersInfo) {
    usersInfoArray = usersInfo.map((user) => {
      return <UsersInfoTile key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <h1 className ="is-size-5 has-text-centered mb-4">Current Members</h1>
      <div className="table-container mb-6">
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>User ID</th>
              <th>Role</th>
              <th>Account Created</th>
              <th># of Favorites</th>
              <th># of Reviews</th>
              <th>Edit Member Info</th>
              <th>Delete Member</th>
            </tr>
          </thead>
          {usersInfoArray}
        </table>
      </div>
    </div>
  );
};

export default UserAdminTile;
