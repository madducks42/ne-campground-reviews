import React, { useState, useEffect } from "react";

const Image = (props) => {
  // debugger
  return (
    <a
      href={props.url}
      data-lightbox="carousel"
      data-title="Campground Images"
    ></a>
  );
};

export default Image;
