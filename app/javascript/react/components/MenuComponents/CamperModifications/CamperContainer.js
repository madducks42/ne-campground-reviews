import React from "react";

import CamperInfo from "./CamperInfo";
import CamperModsContainer from "./CamperModsContainer";
import CamperMisc from "./CamperMisc"

const CamperContainer = () => {
  return (
    <div className="grid-container camper-mods-style">
      <CamperInfo />
      <CamperModsContainer />
      <CamperMisc />
    </div>
  );
};

export default CamperContainer;
