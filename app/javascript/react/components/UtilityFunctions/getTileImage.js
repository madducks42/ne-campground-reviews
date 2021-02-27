exports.getTileImage = (name) => {
  let tileImage = ""

  if (name == "Bear Brook State Park") {
    tileImage = "/images/bear-brook/bear-brook-1.jpg";
  } else if (name == "Forked Lake Campground") {
    tileImage = "/images/forked-lake/forked-lake-1.jpg";
  } else if (name == "Green Lakes State Park") {
    tileImage = "/images/green-lakes/green-lakes-1.jpg";
  } else if (name == "Mount Greylock State Park") {
    tileImage = "/images/greylock/greylock-1.jpg";
  } else if (name == "Letchworth State Park") {
    tileImage = "/images/letchworth/letchworth-1.jpg";
  } else if (name == "Little River State Park") {
    tileImage = "/images/little-river/little-river-1.jpg";
  } else if (name == "Mohawk Trail State Forest") {
    tileImage = "/images/mohawk/mohawk-1.jpg";
  } else if (name == "Moreau Lake State Park") {
    tileImage = "/images/moreau/moreau-1.jpg";
  } else if (name == "Coolidge State Park") {
    tileImage = "/images/coolidge/coolidge-1.jpg";
  } else if (name == "Savoy State Forest") {
    tileImage = "/images/savoy/savoy-1.jpg";
  }
  return tileImage
}