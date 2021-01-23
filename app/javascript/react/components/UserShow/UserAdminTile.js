import React, { useState, useEffect } from "react";

const UserAdminTile = () => {
  const [usersInfo, setUsersInfo] = useState([])
 
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

  let usersInfoArray = []

    if (usersInfo) {
      usersInfoArray = usersInfo.map((user) => {
        debugger
        return (
          <UsersInfoTile
            key={user.id}
            user={user}
          />
        );
      });
    }

  return (
    <div>
      <h1>Testing</h1>
    </div>
  );
  };
  
export default UserAdminTile;
