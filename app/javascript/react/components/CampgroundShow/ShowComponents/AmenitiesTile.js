import React from "react";

const AmenitiesTile = (props) => {
  let dogsAllowedStatus;
  let electricHookupsStatus;
  let waterHookupsStatus;
  let potableWaterStatus;
  let dumpStationStatus;
  let bathroomsStatus;
  let showersStatus;

  if (props.dogsAllowed == true) {
    dogsAllowedStatus = "Yes";
  } else {
    dogsAllowedStatus = "No";
  }

  if (props.electricHookups == true) {
    electricHookupsStatus = "Yes";
  } else {
    electricHookupsStatus = "No";
  }

  if (props.waterHookups == true) {
    waterHookupsStatus = "Yes";
  } else {
    waterHookupsStatus = "No";
  }

  if (props.potableWater == true) {
    potableWaterStatus = "Yes";
  } else {
    potableWaterStatus = "No";
  }

  if (props.dumpStation == true) {
    dumpStationStatus = "Yes";
  } else {
    dumpStationStatus = "No";
  }

  if (props.bathrooms == true) {
    bathroomsStatus = "Yes";
  } else {
    bathroomsStatus = "No";
  }

  if (props.showers == true) {
    showersStatus = "Yes";
  } else {
    showersStatus = "No";
  }

  return (
    <div>
      <h3 className="is-size-4">General Info:</h3>
      <ul>
        <li>
          <a href={props.campgroundLink} target="_blank" rel="noreferrer">
            Official Website
          </a>
        </li>
        <li>Dogs Allowed - {dogsAllowedStatus}</li>
        <li>Electric Hookups - {electricHookupsStatus}</li>
        <li>Water Hookups - {waterHookupsStatus}</li>
        <li>Potable Water - {potableWaterStatus}</li>
        <li>Dump Station - {dumpStationStatus}</li>
        <li>Bathrooms - {bathroomsStatus}</li>
        <li>Showers - {showersStatus}</li>
      </ul>
      <br />
    </div>
  );
};

export default AmenitiesTile;
