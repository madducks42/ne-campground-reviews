import React from "react";

const AdminEditUser = (props) => {
  let defaultFields = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    role: "",
  };

  return (
    <div className="container">
      <div className="field">
        <label className="label">
          First Name:
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
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
              placeholder="e.g. alexsmith@gmail.com"
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
              placeholder="e.g. alexsmith@gmail.com"
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
              placeholder="e.g. alexsmith@gmail.com"
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
              // value={updatedCampground.dogs_allowed}
              // onChange={handleChange}
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
