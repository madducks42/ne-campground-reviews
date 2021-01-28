import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminEditUser = (props) => {
  const [userInfo, setUserInfo] = useState({
    userID: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    role: "",
  });

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
        setUserInfo({
          userID: body.id,
          firstName: body.first_name,
          lastName: body.last_name,
          username: body.username,
          email: body.email,
          role: body.role,
        });
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <div className="container">
      <div className="field">
        <label className="label">
          First Name:
          <div className="control">
            <input
              className="input"
              type="text"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
        </label>
      </div>

      <div className="field">
        <label className="label">
          Last Name:
          <div className="control">
            <input
              className="input"
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
        </label>
      </div>

      <div className="field">
        <label className="label">
          Username:
          <div className="control">
            <input
              className="input"
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
        </label>
      </div>

      <div className="field">
        <label className="label">
          Email:
          <div className="control">
            <input
              className="input"
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
        </label>
      </div>

      <div className="field">
        <label className="label">
          Role:
          <div className="control">
            <select
              className=""
              name="role"
              value={userInfo.role}
              onChange={handleChange}
              onBlur={handleChange}
            >
              <option className="" value={true}>
                Member
              </option>
              <option className="" value={false}>
                Admin
              </option>
            </select>
          </div>
        </label>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button">Submit</button>
        </div>
        <div className="control">
          <button className="button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AdminEditUser;
