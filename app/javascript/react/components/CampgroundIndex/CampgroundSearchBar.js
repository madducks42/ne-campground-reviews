import React, { Component } from "react";
import { Link } from "react-router-dom";

class CampgroundSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campgrounds: [],
      searchString: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newSearchString = event.target.value;
    this.setState({ searchString: newSearchString });
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = JSON.stringify({
      search_string: this.state.searchString,
    });
    fetch("/api/v1/campgrounds/search.json", {
      method: "POST",
      body: body,
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((body) => {
        this.setState({ campgrounds: body });
      });
  }

  render() {
    const campgrounds = this.state.campgrounds.map((campground) => {
      return (
        <div>
          <li className="nav-search">
            <Link to={`/campgrounds/${campground.id}`}>{campground.name}</Link>
          </li>
        </div>
      );
    });

    let isResultsAvailable;
    if (campgrounds.length === 0) {
      isResultsAvailable = false;
    } else {
      isResultsAvailable = true;
    }

    return (
      <div className="search-container">
        <form onSubmit={this.handleSubmit}>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input search-field"
                type="text"
                placeholder="Search Campgrounds"
                name="searchString"
                value={this.state.searchString}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <input className="button" type="submit" value="Search" />
            </div>
          </div>
        </form>
        <div className="nav-search">
          {isResultsAvailable && (<h6 className="nav-search">Search Results:</h6>)}
        </div>
        <ul className="nav-search">{campgrounds}</ul>
      </div>
    );
  }
}

export default CampgroundSearchBar;
