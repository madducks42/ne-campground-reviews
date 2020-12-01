import React, { useState, useEffect } from "react";
import MattressUpgrade from "./CamperMods/MattressUpgrade";
const CamperModsContainer = () => {
  const [selectedSections, setSelectedSections] = useState([]);
  const sectionsData = [
    {
      title: "Mattress Upgrade",
      id: "mattressUpgrade",
      body: (
        <div>
          <p>Mattress Upgrade Section</p>
        </div>
      ),
    },
    {
      title: "Speaker Upgrade",
      id: "speakerUpgrade",
      body: (
        <div>
          <p>Mattress Upgrade Section</p>
        </div>
      ),
    },
  ];

  // useEffect(() => {
  //   setSelectedSections([])
  // }, [//something needs to go here]);

  const onClickHandler = (event) => {
    event.preventDefault();
    let newSections;
    const id = event.currentTarget.id;
    if (selectedSections.includes(id)) {
      newSections = selectedSections.splice(selectedSections.indexOf(id, 1));
      setSelectedSections(newSections);
    } else {
      newSections = selectedSections.push(id);
      setSelectedSections(newSections);
    }
    console.log(selectedSections);
  };
  const sections = sectionsData.map((section) => {
    const minusIcon = "fas fa-minus-square";
    const plusIcon = "fas fa-plus-square";
    if (selectedSections.includes(section.id)) {
      return (
        <div className="flex-row">
          <h3>{section.title}</h3>
          <button
            type="button"
            id={section.id}
            className={minusIcon}
            onClick={onClickHandler}
          ></button>
          {section.body}
        </div>
      );
    } else {
      return (
        <div className="flex-row">
          <h3>{section.title}</h3>
          <button
            type="button"
            id={section.id}
            className={plusIcon}
            onClick={onClickHandler}
          ></button>
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
      {sections}
    </div>
  );
};
export default CamperModsContainer;
