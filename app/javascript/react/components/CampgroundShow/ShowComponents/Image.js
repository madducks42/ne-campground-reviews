import React, { useState, useEffect } from "react";

const Image = (props) => {
  const urlString = props.url
  let title = ""

  if (urlString.includes("BearBrook")) {
    title = "Bear Brook State Park"
  } else if (urlString.includes("Coolidge")) {
    title = "Coolidge State Park"
  } else if (urlString.includes("ForkedLake")) {
    title = "Forked Lake Campground"
  }  else if (urlString.includes("Letchworth")) {
    title = "Letchworth State Park"
  }  else if (urlString.includes("MoreauLake")) {
    title = "Moreau Lake State Park"
  }  else if (urlString.includes("GreenLakes")) {
    title = "Green Lakes State Park"
  }  else if (urlString.includes("LittleRiver")) {
    title = "Little River State Park"
  }  else if (urlString.includes("MohawkTrail")) {
    title = "Mohawk Trail State Forest"
  }  else if (urlString.includes("Savoy")) {
    title = "Savoy State Forest"
  }  else if (urlString.includes("MountGreylock")) {
    title = "Mount Greylock State Park"
  }

  return (
    <a
      href={props.url}
      data-lightbox={title}
      data-title={title}
    ></a>
  );
};

export default Image;
