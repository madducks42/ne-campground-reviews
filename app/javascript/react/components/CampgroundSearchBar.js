import React, { Component } from 'react';

class CampgroundSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campgrounds: [],
      searchString: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
  }

  handleSubmit(event) {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: this.state.searchString
    })
    fetch('/api/v1/campgrounds/search.json', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ campgrounds: body })
    })
  }

  render() {
    const campgrounds = this.state.campgrounds.map(campground => {
      return(
        <li className='nav-search'>{campground.name}</li>
      )
    })
  
  let isResultsAvailable
  if (campgrounds.length === 0) {
    isResultsAvailable = false
  } else {
    isResultsAvailable = true
  };

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className='nav-search'>
            <input className='search-field' type='text' name='searchString' value={this.state.searchString} onChange={this.handleChange} />
          </label>
  
          <input className='search-button' type='submit' value='Search' />
        </form>
        <div className='nav-search'>
          {isResultsAvailable && <h6>Search Results:</h6>}
        </div> 
        <ul className='nav-search'>{campgrounds}</ul>
      </div>
    )
  }
}

export default CampgroundSearchBar;

{/* <li><input className="nav-search-input" type="search" placeholder="Search" /></li>
<li><button type="button" className="search-button">Search</button></li> */}