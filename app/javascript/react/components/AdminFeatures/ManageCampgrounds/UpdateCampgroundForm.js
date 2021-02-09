import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

import ErrorList from "../../HelperComponents/ErrorList";

const UpdateCampgroundForm = (props) => {
  let defaultFields = {
    name: "",
    caption: "",
    description: "",
    location: "",
    campground_link: "",
    dogs_allowed: true,
    electric_hookups: true,
    water_hookups: true,
    potable_water: true,
    dump_station: true,
    bathrooms: true,
    showers: true,
  };

  const [updatedCampground, setUpdatedCampground] = useState(defaultFields);
  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    let id = props.match.params.id;
    fetch(`/api/v1/campgrounds/${id}`)
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
        setUpdatedCampground(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const updateCampground = (formData) => {
    let id = props.match.params.id;
    fetch(`/api/v1/campgrounds/${id}`, {
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
    setUpdatedCampground({
      ...updatedCampground,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["name", "caption", "description", "location"];
    requiredFields.forEach((field) => {
      if (
        updatedCampground[field].trim() === "" ||
        updatedCampground[field].trim() === "" ||
        updatedCampground[field].trim() === "" ||
        updatedCampground[field].trim() === ""
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
      updateCampground(updatedCampground);
    }
  };

  if (shouldRedirect) {
    return <Redirect to={`/campgrounds/${shouldRedirect}`} />;
  }

  return (
    <div className="container">
      <h3 className="has-text-centered is-size-3 font-red mt-6 has-text-weight-semibold">Update Campground</h3>
      <div className="columns">
        <div className="column">

          <form onSubmit={handleSubmit} className="new-campground-form callout">
            {/* <h3>Update Campground</h3> */}
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
                    value={updatedCampground.name}
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
                    value={updatedCampground.caption}
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
                    value={updatedCampground.description}
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
                    value={updatedCampground.location}
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
                    value={updatedCampground.campground_link}
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
                    value={updatedCampground.dogs_allowed}
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
                    value={updatedCampground.electric_hookups}
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
                    value={updatedCampground.water_hookups}
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
                    value={updatedCampground.potable_water}
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
                    value={updatedCampground.dump_station}
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
                    value={updatedCampground.bathrooms}
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
                    value={updatedCampground.showers}
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
                <button className="button" type="submit" value="Submit">Submit</button>
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

export default UpdateCampgroundForm;
