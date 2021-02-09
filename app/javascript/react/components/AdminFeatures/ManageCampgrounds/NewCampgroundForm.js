import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

import ErrorList from "../../HelperComponents/ErrorList";

const NewCampgroundForm = () => {
  let defaultFields = {
    name: "",
    caption: "",
    description: "",
    location: "",
    campground_link: "",
    dogs_allowed: undefined,
    electric_hookups: undefined,
    water_hookups: undefined,
    potable_water: undefined,
    dump_station: undefined,
    bathrooms: undefined,
    showers: undefined,
  };

  const [newCampground, setNewCampground] = useState(defaultFields);
  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect to="/campgrounds" />;
  }

  const addNewCampground = (formData) => {
    fetch("/api/v1/campgrounds", {
      method: "POST",
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
          setShouldRedirect(true);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = (event) => {
    setNewCampground({
      ...newCampground,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["name", "caption", "description", "location"];
    requiredFields.forEach((field) => {
      if (
        newCampground[field].trim() === "" ||
        newCampground[field].trim() === "" ||
        newCampground[field].trim() === "" ||
        newCampground[field].trim() === ""
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
      addNewCampground(newCampground);
      setNewCampground(defaultFields);
    }
  };

  return (
    <div className="container">
      <h3 className="has-text-centered is-size-3 font-red mt-6 has-text-weight-semibold">
        Add A New Campground
      </h3>
      <div className="columns">
        <div className="column">
          <form onSubmit={handleSubmit} className="new-campground-form callout">
            <ErrorList errors={errors} />
            <div className="field">
              <label className="label">
                Name:
                <div className="control">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    onChange={handleChange}
                    value={newCampground.name}
                    className="campground-form"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Caption:
                <div className="control">
                  <input
                    name="caption"
                    id="caption"
                    type="text"
                    onChange={handleChange}
                    value={newCampground.caption}
                    className="campground-form"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Description:
                <div className="control">
                  <textarea
                    name="description"
                    id="description"
                    type="textarea"
                    onChange={handleChange}
                    value={newCampground.description}
                    className="campground-form"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Location:
                <div className="control">
                  <select
                    className="campground-form"
                    name="location"
                    value={newCampground.location}
                    onChange={handleChange}
                  >
                    <option className="campground-form" value="Vermont">
                      Vermont
                    </option>
                    <option className="campground-form" value="Massachusetts">
                      Massachusetts
                    </option>
                    <option className="campground-form" value="New Hampshire">
                      New Hampshire
                    </option>
                    <option className="campground-form" value="Maine">
                      Maine
                    </option>
                    <option className="campground-form" value="New York">
                      New York
                    </option>
                  </select>
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Campground Link:
                <div className="control">
                  <input
                    name="campground_link"
                    id="campground_link"
                    type="text"
                    onChange={handleChange}
                    value={newCampground.campground_link}
                    className="campground-form"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Dogs Allowed:
                <div className="control">
                  <select
                    className="campground-form"
                    name="dogs_allowed"
                    value={newCampground.dogs_allowed}
                    onChange={handleChange}
                  >
                    <option className="campground-form" value={true}>
                      Yes
                    </option>
                    <option className="campground-form" value={false}>
                      No
                    </option>
                  </select>
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Electric Hookups:
                <div className="control">
                  <select
                    className="campground-form"
                    name="electric_hookups"
                    value={newCampground.electric_hookups}
                    onChange={handleChange}
                  >
                    <option className="campground-form" value={true}>
                      Yes
                    </option>
                    <option className="campground-form" value={false}>
                      No
                    </option>
                  </select>
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Water Hookups:
                <div className="control">
                  <select
                    className="campground-form"
                    name="water_hookups"
                    value={newCampground.water_hookups}
                    onChange={handleChange}
                  >
                    <option className="campground-form" value={true}>
                      Yes
                    </option>
                    <option className="campground-form" value={false}>
                      No
                    </option>
                  </select>
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Potable Water:
                <div className="control">
                  <select
                    className="campground-form"
                    name="potable_water"
                    value={newCampground.potable_water}
                    onChange={handleChange}
                  >
                    <option className="campground-form" value={true}>
                      Yes
                    </option>
                    <option className="campground-form" value={false}>
                      No
                    </option>
                  </select>
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Dump Station:
                <div className="control">
                  <select
                    className="campground-form"
                    name="dump_station"
                    value={newCampground.dump_station}
                    onChange={handleChange}
                  >
                    <option className="campground-form" value={true}>
                      Yes
                    </option>
                    <option className="campground-form" value={false}>
                      No
                    </option>
                  </select>
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Bathrooms:
                <div className="control">
                  <select
                    className="campground-form"
                    name="bathrooms"
                    value={newCampground.bathrooms}
                    onChange={handleChange}
                  >
                    <option className="campground-form" value={true}>
                      Yes
                    </option>
                    <option className="campground-form" value={false}>
                      No
                    </option>
                  </select>
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Showers:
                <div className="control">
                  <select
                    className="campground-form"
                    name="showers"
                    value={newCampground.showers}
                    onChange={handleChange}
                  >
                    <option className="campground-form" value={true}>
                      Yes
                    </option>
                    <option className="campground-form" value={false}>
                      No
                    </option>
                  </select>
                </div>
              </label>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button" type="submit" value="Submit">
                  Submit
                </button>
              </div>
              {/* <div className="control">
                <button className="button" type="submit" value="Cancel">Cancel</button>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCampgroundForm;
