import React from "react";

const WelcomeMessage = () => {
  return (
    <section className="welcome-flex">
      <div className="welcome-callout">
        <h2 className="is-size-4 has-text-centered">
          Welcome to Northeast Campground Reviews!
        </h2>
        <p>
          Below you can view all the campgrounds we've been to in the northeast
          so far! We include our review of the campground, general information,
          and photos of hte campground and surrounding area. Signing up for a
          free account will give you the ability to leave your own comments
          about the campground as well!
        </p>
        <br />
        <p>
          We hope this information is useful for those camping in the Northeast.
          We'll be adding new campground reviews and updating existing ones
          every year!
        </p>
      </div>
    </section>
  );
};

export default WelcomeMessage;
