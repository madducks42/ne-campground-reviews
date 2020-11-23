import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import _ from "lodash";

import ImagesTile from "./ShowComponents/ImagesTile";
import DescriptionTile from "./ShowComponents/DescriptionTile";
import MapTile from "./ShowComponents/MapTile";
import AmenitiesTile from "./ShowComponents/AmenitiesTile";
import OpenWeatherTile from "./ShowComponents/OpenWeatherTile";
import ReviewForm from "./ReviewForm";
import ReviewsContainer from "./ShowComponents/ReviewsContainer";
import ErrorList from "../ErrorList";

const CampgroundShowContainer = (props) => {
  const [campground, setCampground] = useState({});
  const [reviews, setReviews] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userIsAdmin, setUserIsAdmin] = useState({});
  const [errors, setErrors] = useState({});
  const [weather, setWeather] = useState({
    name: "",
    description: "",
    icon: "",
    conditions: "",
    currentTemp: "",
    highTemp: "",
    lowTemp: "",
    humidity: "",
    wind: "",
    location: "",
    date: "",
  });

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
        setCampground(body);
        setReviews(body.reviews);
        setUserIsAdmin(body.userIsAdmin);
        setFavorite(body.isFavorite);
        if (body.currentUser != null) {
          setCurrentUser(body.currentUser);
        }
        setWeather({
          name: body.name,
          description: body.weather.description,
          icon: body.weather.icon,
          conditions: body.weather.conditions,
          currentTemp: body.weather.temp,
          highTemp: body.weather.high,
          lowTemp: body.weather.low,
          humidity: body.weather.humidity,
          wind: body.weather.wind,
          location: body.weather.location,
          date: body.weather.date,
        });
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const addNewReview = (formData) => {
    fetch(`/api/v1/campgrounds/${props.match.params.id}/reviews`, {
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
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((body) => {
        if (body.errors) {
          setErrors(body.errors);
        } else {
          setReviews([...reviews, body]);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const editReview = (payload) => {
    const campgroundId = payload.campgroundId;
    const reviewId = payload.reviewId;
    fetch(`/api/v1/campgrounds/${campgroundId}/reviews/${reviewId}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(payload),
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
      .then((updatedReview) => {
        if (!updatedReview.errors) {
          let reviewIndex = reviews.findIndex(
            (review) => review.id === updatedReview.id
          );
          let tempReviews = [...reviews];
          tempReviews.splice(reviewIndex, 1, updatedReview);
          setReviews(tempReviews);
        } else if (updatedReview.errors) {
          setErrors(updatedReview.errors);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const deleteReview = (payload) => {
    const campgroundId = payload.campgroundId;
    const reviewId = payload.reviewId;

    fetch(`/api/v1/campgrounds/${campgroundId}/reviews/${reviewId}`, {
      credentials: "same-origin",
      method: "DELETE",
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
      .then((removeReview) => {
        if (!removeReview.errors) {
          let reviewIndex = reviews.findIndex(
            (review) => review.id === removeReview.id
          );
          let tempReviews = [...reviews];
          tempReviews.splice(reviewIndex, 1);
          setReviews(tempReviews);
        } else if (removeReview.errors) {
          setErrors(removeReview.errors);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  let reviewForm;
  if (campground.userSignedIn) {
    reviewForm = <ReviewForm addNewReview={addNewReview} />;
  }

  let noReviewsMessage = "";

  if (reviews.length === 0) {
    noReviewsMessage = "No reviews yet.";
  }

  let averageRatingMessage = campground.averageRating;
  if (averageRatingMessage === null) {
    averageRatingMessage = "No ratings yet.";
  }

  let favoriteIcon = "";
  let favoriteMessage = "";
  if (favorite === true) {
    favoriteIcon = "fas fa-heart favorite has-tip top";
    favoriteMessage = "Campground marked as favorite";
  } else {
    favoriteIcon = "fas fa-heart not-favorite has-tip top";
    favoriteMessage = "Mark campground as favorite";
  }

  let favoriteInfo = {};
  const onClickFavoriteHandler = (event) => {
    event.preventDefault();
    favoriteInfo = {
      campgroundID: event.currentTarget.id,
      favoriteStatus: event.currentTarget.value,
    };
    setCampgroundFavorite(favoriteInfo);
  };

  const setCampgroundFavorite = (payload) => {
    fetch(`/api/v1/users/favorite`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(payload),
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
        if (body.favoriteCampground === true) {
          setFavorite(true)
        } else if (body.favoriteCampground === false) {
          setFavorite(false)
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <div className="grid-container full flex-column">
      <ErrorList errors={errors} />
      <div className="show-container">
        <h1 className="center-text">{campground.name}</h1>
        <div className="grid-x grid-margin-x">
          <div className="cell full flex-row">
            <div className="amenities-container">
              <div>
                <AmenitiesTile
                  key={campground.id}
                  campgroundLink={campground.campground_link}
                  dogsAllowed={campground.dogs_allowed}
                  electricHookups={campground.electronic_hookups}
                  waterHookups={campground.water_hookups}
                  potableWater={campground.potable_water}
                  dumpStation={campground.dump_station}
                  bathrooms={campground.bathrooms}
                  showers={campground.showers}
                />
              </div>
              <div>
                <button
                  type="button"
                  value={`${favorite}`}
                  id={`${campground.id}`}
                  className={`${favoriteIcon}`}
                  data-tooltip
                  aria-haspopup="true"
                  data-click-open="false"
                  data-disable-hover="false"
                  title={`${favoriteMessage}`}
                  onClick={onClickFavoriteHandler}
                ></button>
              </div>
            </div>
            <div>
              <ImagesTile />
            </div>
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell auto description-tile">
            <DescriptionTile
              key={campground.id}
              campgroundLink={campground.campground_link}
              name={campground.name}
              description={campground.description}
              location={campground.location}
            />
          </div>
        </div>
        <div className="grid-x grid-margin-x info-container">
          <div className="weather-container">
            <OpenWeatherTile key={campground.id} weather={weather} />
          </div>
          <div className="map-container">
            <MapTile />
          </div>
        </div>
        {currentUser.role === "admin" && (
          <div className="grid-x grid-margin-x admin-flex">
            <Link
              className="admin-link"
              to={`/campgrounds/${campground.id}/update`}
            >
              Update Campground
            </Link>
            <Link
              className="admin-link"
              to={`/campgrounds/${campground.id}/destroy`}
            >
              Delete Campground
            </Link>
          </div>
        )}
        <div className="grid-x grid-margin-x">
          <div className="cell">{reviewForm}</div>
        </div>
        <div className="grid-x grid-margin-x reviews-container">
          <div className="cell">
            <h2>Average Member Rating: {averageRatingMessage}</h2>
            <h2>Member Reviews: {noReviewsMessage}</h2>
            <ReviewsContainer
              reviews={reviews}
              userIsAdmin={userIsAdmin}
              editReview={editReview}
              deleteReview={deleteReview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampgroundShowContainer;
