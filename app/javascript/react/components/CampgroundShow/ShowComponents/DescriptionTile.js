import React from "react";

const DescriptionTile = (props) => {
  return (
    <div>
      <p className="paragraph-format is-size-7 mt-6 mb-6">{props.description}</p>
    </div>
  );
};

export default DescriptionTile;
