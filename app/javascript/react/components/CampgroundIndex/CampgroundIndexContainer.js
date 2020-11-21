import React, { useState, useEffect } from "react";

import CampgroundSearchBar from "./CampgroundSearchBar";
import CampgroundFilter from "./CampgroundFilter";
import CampgroundTile from "../HelperComponents/CampgroundTile";
import ErrorList from "../ErrorList";

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
    <div className="grid-container full">
      <div className="grid-x">
        <div className="cell small-6 medium-4 large-3 left-nav-bar">
          <ul className="menu left-nav-bar nav-flex">
            <CampgroundSearchBar />
          </ul>
          <div className="menu filter-section">
            <ErrorList errors={errors} />
            <CampgroundFilter filterCampgrounds={filterCampgrounds} />
          </div>
        </div>
        <div className="cell small-6 medium-8 large-9">
          <div className="grid-x grid-margin-x campground-tile-container index-scrollable">
            {campgroundTiles}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampgroundIndexContainer;
