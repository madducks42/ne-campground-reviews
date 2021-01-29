import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

import ErrorList from "../HelperComponents/ErrorList";

const AdminEditUser = (props) => {
  const [userInfo, setUserInfo] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
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
        setUserInfo({
          user_id: body.id,
          first_name: body.first_name,
          last_name: body.last_name,
          username: body.username,
          email: body.email,
          role: body.role,
        });
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const updateUser = (formData) => {
    let id = props.match.params.id;
    fetch(`/api/v1/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
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
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.errors) {
          setErrors(body.errors);
        } else {
          setShouldRedirect(body.id);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["first_name", "last_name", "username", "email"];
    requiredFields.forEach((field) => {
      if (
        userInfo[field].trim() === "" ||
        userInfo[field].trim() === "" ||
        userInfo[field].trim() === "" ||
        userInfo[field].trim() === ""
      ) {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });

    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validForSubmission()) {
      updateUser(userInfo);
    }
  };

  if (shouldRedirect) {
    return <Redirect to={`/users/${shouldRedirect}/admin`} />;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="">
        <ErrorList errors={errors} />
        <div className="field">
          <label className="label">
            First Name:
            <div className="control">
              <input
                className="input"
                type="text"
                name="first_name"
                value={userInfo.first_name}
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
                name="last_name"
                value={userInfo.last_name}
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
      </form>
    </div>
  );
};

export default AdminEditUser;
