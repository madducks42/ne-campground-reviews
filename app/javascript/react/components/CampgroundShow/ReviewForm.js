import React, { useState } from "react";
import _ from "lodash";
import ErrorList from "../HelperComponents/ErrorList";

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    title: "",
    body: "",
    rating: "",
    image: "",
    id: props.id,
  });

  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["title", "body", "rating"];

    requiredFields.forEach((field) => {
      if (newReview[field].trim() === "") {
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
      props.addNewReview(newReview);
      setNewReview({
        title: "",
        body: "",
        rating: "",
        id: null,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-review-form callout">
      <h3 className="is-size-3 mb-3">Leave A Review!</h3>
      <ErrorList errors={errors} />
      <div className="field">
        <label className="label" htmlFor="title">Title</label>
          <div className="control mb-6">
            <input
              className="input"
              type="text"
              placeholder="Add Review Title"
              name="title"
              id="title"
              onChange={handleChange}
              value={newReview.title}
            />
          </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="body">Review</label>
          <div className="control mb-6">
            <textarea
              className="textarea"
              placeholder="Add Review Body"
              name="body"
              id="body"
              onChange={handleChange}
              value={newReview.body}
            ></textarea>
          </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="rating">Rating</label>
          <div className="control">
            <div className="select">
              <select
                className="campground-form"
                name="rating"
                value={newReview.rating}
                onChange={handleChange}
                onBlur={handleChange}
              >
                <option className="campground-form" value={null}>
                  Select Rating
                </option>
                <option className="campground-form" value="1">
                  1
                </option>
                <option className="campground-form" value="2">
                  2
                </option>
                <option className="campground-form" value="3">
                  3
                </option>
                <option className="campground-form" value="4">
                  4
                </option>
                <option className="campground-form" value="5">
                  5
                </option>
              </select>
            </div>
          </div>
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
  );
};

export default ReviewForm;
