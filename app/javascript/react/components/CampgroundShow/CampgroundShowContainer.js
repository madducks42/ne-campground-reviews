import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ImagesTile from "./ShowComponents/ImagesTile";
import DescriptionTile from "./ShowComponents/DescriptionTile";
import MapTile from "./ShowComponents/MapTile";
import AmenitiesTile from "./ShowComponents/AmenitiesTile";
import OpenWeatherTile from "./ShowComponents/OpenWeatherTile";
import ReviewForm from "./ReviewForm";
import ReviewsContainer from "./ShowComponents/ReviewsContainer";
import ErrorList from "../HelperComponents/ErrorList";

import { getCampgroundData } from "./FetchComponents/CampgroundData";
import {
  addNewReviewFetch,
  editedReviewFetch,
  deleteReviewFetch,
} from "./FetchComponents/ReviewFetches";
import { setCampgroundFavFetch } from "./FetchComponents/UserFetches";

const CampgroundShowContainer = (props) => {
  const id = props.match.params.id;

  const [campground, setCampground] = useState({});
  const [reviews, setReviews] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userIsAdmin, setUserIsAdmin] = useState({});
  const [errors, setErrors] = useState({});
  const [signInError, setSignInError] = useState("");
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
    getCampgroundData(id).then((body) => {
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
    });
  }, []);

  const addNewReview = async (newReview) => {
    const addedReview = await addNewReviewFetch(newReview);
    if (addedReview.errors) {
      setErrors(addedReview.errors);
    } else {
      setReviews([...reviews, addedReview]);
    }
  };

  const editReview = async (reviewToEdit) => {
    const editedReview = await editedReviewFetch(reviewToEdit);
    if (editedReview.errors) {
      setErrors(editedReview.errors);
    } else {
      let reviewIndex = reviews.findIndex(
        (review) => review.id === editedReview.id
      );
      let tempReviews = [...reviews];
      tempReviews.splice(reviewIndex, 1, editedReview);
      setReviews(tempReviews);
    }
  };

  const deleteReview = async (reviewToDelete) => {
    const deletedReview = await deleteReviewFetch(reviewToDelete);

    if (deletedReview.errors) {
      setErrors(deletedReview.errors);
    } else {
      let reviewIndex = reviews.findIndex(
        (review) => review.id === deletedReview.id
        );
      let tempReviews = [...reviews];
      tempReviews.splice(reviewIndex, 1);
      setReviews(tempReviews);
    }
  };

  let reviewForm;
  if (campground.userSignedIn) {
    reviewForm = <ReviewForm addNewReview={addNewReview} id={id} />;
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

  const setCampgroundFavorite = async (favorite) => {
    favorite = await setCampgroundFavFetch(favorite);
    if (favorite === true) {
      setFavorite(true);
    } else if (favorite === false) {
      setFavorite(false);
    } else {
      setSignInError("You must be signed in to add favorites");
    }
  };

  return (
    <div className="container">
      <ErrorList errors={errors} />
      <div className="mb-6">
        <h1 className="has-text-centered is-size-1 has-text-weight-semibold font-red mb-6 mt-6">{campground.name}</h1>
        <div className="columns">
          <div className="column">
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
              <div className="flex-column">
                <i
                  type="input"
                  value={`${favorite}`}
                  id={`${campground.id}`}
                  className={`${favoriteIcon}`}
                  data-tooltip
                  aria-haspopup="true"
                  data-click-open="false"
                  data-disable-hover="false"
                  title={`${favoriteMessage}`}
                  onClick={onClickFavoriteHandler}
                  onKeyDown={onClickFavoriteHandler}
                  role="button"
                  tabIndex={0}
                ></i>
                {signInError}
              </div>
            </div>
          </div>
          <div className="column">
            <ImagesTile />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <DescriptionTile
              key={campground.id}
              campgroundLink={campground.campground_link}
              name={campground.name}
              description={campground.description}
              location={campground.location}
            />
          </div>
        </div>
        <div className="columns info-container">
          <div className="column is-narrow">
            <OpenWeatherTile key={campground.id} weather={weather} />
          </div>
          <div className=" column map-container">
            <MapTile />
          </div>
        </div>
        {currentUser.role === "admin" && (
          <div className="columns admin-flex">
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
        <div className="columns">
          <div className="column">{reviewForm}</div>
        </div>
        <div className="columns reviews-container">
          <div className="column">
            <h2 className="is-size-4">Average Member Rating: {averageRatingMessage}</h2>
            <h2 className="is-size-4">Member Reviews: {noReviewsMessage}</h2>
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
