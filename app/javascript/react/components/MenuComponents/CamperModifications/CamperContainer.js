import React from "react";

import CamperInfo from "./CamperInfo";
import CamperModsContainer from "./CamperModsContainer";

const CamperContainer = () => {
  return (
    <div className="grid-container camper-mods-style">
      <CamperInfo />
      <CamperModsContainer />
    </div>
  );
};

export default CamperContainer;
