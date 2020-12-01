import React, { useState } from "react";

import MattressUpgrade from "./CamperMods/MattressUpgrade";
import UnderBedStorage from "./CamperMods/UnderBedStorage";
const CamperModsContainer = () => {
  const sectionsData = [
    {
      key: 0,
      id: "mattressUpgrade",
      title: "Mattress Upgrade",
      body: (
        <div>
          <MattressUpgrade />
        </div>
      ),
    },
    {
      key: 1,
      id: "speakerUpgrade",
      title: "Speaker Upgrade",
      body: (
        <div>
          <UnderBedStorage />
        </div>
      ),
    },
  ];
  const [visibility, setVisibility] = useState({
    mattressUpgrade: false,
    speakerUpgrade: false,
  });
  const onClickHandler = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    console.log(id);
    setVisibility({
      ...visibility,
      [id]: !visibility[id],
    });
  };
  const sectionsOutput = sectionsData.map((section) => {
    if (visibility[section.id]) {
      return (
        <div className="callout">
          <div className="flex-row" key={section.key}><h3>{section.title}</h3>
            <button type="button" id={section.id} onClick={onClickHandler} className="fas fa-minus-square">
            </button>
          </div>
          <div>
            {section.body}
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex-row callout" key={section.key}>
          <h3>{section.title}</h3>
          <button type="button" id={section.id} onClick={onClickHandler} className="fas fa-plus-square">
          </button>
        </div>
      );
    }
  });
  return (
    <div>
      <h1>Camper Modifications</h1>
      <p>
        As much as we love the Wolf Pup (aka the &apos;Gray Ghost&apos;), there
        are some things that we tweaked...
      </p>
      {sectionsOutput}
    </div>
  );
};
export default CamperModsContainer;
