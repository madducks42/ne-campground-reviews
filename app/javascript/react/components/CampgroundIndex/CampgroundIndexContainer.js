import React, { useState, useEffect } from "react";

import CampgroundIndexTile from "./CampgroundIndexTile";
import CampgroundSearchBar from "./CampgroundSearchBar";
import CampgroundFilter from "./CampgroundFilter";

const CampgroundIndexContainer = (props) => {
  const [campgrounds, setCampgrounds] = useState([]);

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
      <CampgroundIndexTile
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
    <div className="grid-container full wrapper">
      <div className="grid-x grid-margin-x">
        <div className="cell small-4 medium-3 left-nav-bar">
          <ul className="menu left-nav-bar nav-flex">
            <CampgroundSearchBar />
          </ul>
          <div className="menu filter-section">
            <CampgroundFilter filterCampgrounds={filterCampgrounds} />
          </div>
        </div>
        <div className="cell small-8 auto">
          <div className="grid-x grid-margin-x flex-index index-scrollable">
            {campgroundTiles}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampgroundIndexContainer;
