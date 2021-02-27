import React, { useState, useEffect } from "react";

import CampgroundSearchBar from "./CampgroundSearchBar";
import CampgroundFilter from "./CampgroundFilter";
import CampgroundTile from "../HelperComponents/CampgroundTile";
import WelcomeMessage from "./WelcomeMessage";
import ErrorList from "../HelperComponents/ErrorList";

const CampgroundIndexContainer = () => {
  const [campgrounds, setCampgrounds] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("/api/v1/campgrounds")
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
        setCampgrounds(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let campgroundTiles = campgrounds.map((campground) => {
    return (
      <CampgroundTile
        key={campground.id}
        id={campground.id}
        name={campground.name}
        location={campground.location}
        caption={campground.caption}
      />
    );
  });

  const filterCampgrounds = (filterItems) => {
    fetch("/api/v1/campgrounds/filter", {
      method: "POST",
      body: JSON.stringify(filterItems),
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
      .then((filteredCampgrounds) => {
        if (filteredCampgrounds.errors) {
          setErrors(filteredCampgrounds.errors);
        } else {
          setCampgrounds(filteredCampgrounds);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <div>
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body landing-image"></div>
      </section>
      
      <WelcomeMessage />
      <div className="columns">
        <div className="column is-narrow color-bg-white">
          <div className="left-nav-bar">
            <CampgroundSearchBar />
            <div className="flex-column">
              <ErrorList errors={errors} />
              <CampgroundFilter filterCampgrounds={filterCampgrounds} />
            </div>
          </div>
        </div>
        <div className="column color-bg-white">
          <div className="container campground-tile-container index-scrollable">
            {campgroundTiles}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampgroundIndexContainer;
