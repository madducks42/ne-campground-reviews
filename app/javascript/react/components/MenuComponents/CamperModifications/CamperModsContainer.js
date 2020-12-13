import React, { useState } from "react";

import MattressUpgrade from "./CamperMods/MattressUpgrade";
import UnderBedStorage from "./CamperMods/UnderBedStorage";
import InsideSpeakerUpgrade from "./CamperMods/InsideSpeakerUpgrade";
import Subwoofer from "./CamperMods/Subwoofer";
import CabinetDoorLifter from "./CamperMods/CabinetDoorLifter";
import UnderseatDoorLifter from "./CamperMods/UnderseatDoorLifter";
import MotionActivatedLights from "./CamperMods/MotionActivatedLights";
import PowerOutlet from "./CamperMods/PowerOutlet";
import StabilizerJack from "./CamperMods/StabilizerJack";
import CellBooster from "./CamperMods/CellBooster";
import RearviewCamera from "./CamperMods/RearviewCamera";
import Monitor from "./CamperMods/Monitor";
import TabletMount from "./CamperMods/TabletMount";
import SolarSuitcase from "./CamperMods/SolarSuitcase";
import KeylessLockStorage from "./CamperMods/KeylessLockStorage";
import Cupholders from "./CamperMods/Cupholders";
import BatteryMonitor from "./CamperMods/BatteryMonitor";
import ExternalSpeakers from "./CamperMods/ExternalSpeakers";

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
      id: "underBedStorage",
      title: "Under Bed Storage",
      body: (
        <div>
          <UnderBedStorage />
        </div>
      ),
    },
    {
      key: 2,
      id: "insideSpeakerUpgrade",
      title: "Inside Speaker Upgrade",
      body: (
        <div>
          <InsideSpeakerUpgrade />
        </div>
      ),
    },
    {
      key: 3,
      id: "subwoofer",
      title: "Subwoofer",
      body: (
        <div>
          <Subwoofer />
        </div>
      ),
    },
    {
      key: 4,
      id: "cabinetDoorLifter",
      title: "Overhead Cabinet Door Lifter",
      body: (
        <div>
          <CabinetDoorLifter />
        </div>
      ),
    },
    {
      key: 5,
      id: "underseatDoorLifter",
      title: "Underseat Door Lifter",
      body: (
        <div>
          <UnderseatDoorLifter />
        </div>
      ),
    },
    {
      key: 6,
      id: "motionLights",
      title: "Motion Activated Ceiling Lights",
      body: (
        <div>
          <MotionActivatedLights />
        </div>
      ),
    },
    {
      key: 7,
      id: "powerOutlets",
      title: "12v Power Outlets",
      body: (
        <div>
          <PowerOutlet />
        </div>
      ),
    },
    {
      key: 8,
      id: "stabilizer-jack",
      title: "Stabilizer Jack Replacements",
      body: (
        <div>
          <StabilizerJack />
        </div>
      ),
    },
    {
      key: 9,
      id: "cellBooster",
      title: "Cell Booster",
      body: (
        <div>
          <CellBooster />
        </div>
      ),
    },
    {
      key: 10,
      id: "rearviewCamera",
      title: "Rearview Camera",
      body: (
        <div>
          <RearviewCamera />
        </div>
      ),
    },
    {
      key: 11,
      id: "monitor",
      title: "Monitor",
      body: (
        <div>
          <Monitor />
        </div>
      ),
    },
    {
      key: 12,
      id: "tabletMount",
      title: "Tablet Mount",
      body: (
        <div>
          <TabletMount />
        </div>
      ),
    },
    {
      key: 13,
      id: "solarSuitcase",
      title: "Solar Suitcase",
      body: (
        <div>
          <SolarSuitcase />
        </div>
      ),
    },
    {
      key: 14,
      id: "keylessLockStorage",
      title: "Keyless Lock for Underside Storage",
      body: (
        <div>
          <KeylessLockStorage />
        </div>
      ),
    },
    {
      key: 15,
      id: "cupholders",
      title: "Bedside Cup Holders",
      body: (
        <div>
          <Cupholders />
        </div>
      ),
    },
    {
      key: 16,
      id: "batteryMonitor",
      title: "Battery Monitor",
      body: (
        <div>
          <BatteryMonitor />
        </div>
      ),
    },
    {
      key: 17,
      id: "externalSpeakers",
      title: "External Speakers",
      body: (
        <div>
          <ExternalSpeakers />
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
    setVisibility({
      ...visibility,
      [id]: !visibility[id],
    });
  };
  const sectionsOutput = sectionsData.map((section) => {
    if (visibility[section.id]) {
      return (
        <div className="camper-mods-section" key={section.key}>
          <div className="flex-row">
            <h4 className="is-size-4">{section.title}</h4>
            <i
              type="input"
              id={section.id}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              role="button"
              tabIndex="0"
              className="fas fa-minus-square mods-button"
            ></i>
          </div>
          <div>{section.body}</div>
        </div>
      );
    } else {
      return (
        <div className="camper-mods-section" key={section.key}>
          <div className="flex-row">
            <h4 className="is-size-4">{section.title}</h4>
            <i
              type="input"
              id={section.id}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              role="button"
              tabIndex="0"
              className="fas fa-plus-square mods-button"
            ></i>
          </div>
        </div>
      );
    }
  });
  return (
    <div>
      <h1 className="is-size-1 font-red has-text-centered has-text-weight-semibold mt-6">Camper Modifications</h1>
      <p className="is-size-7 mt-4">
        As much as we love the Wolf Pup (aka the &apos;Gray Ghost&apos;), there
        are some things that we tweaked...
      </p>
      <div className="camper-mods-container">{sectionsOutput}</div>
    </div>
  );
};
export default CamperModsContainer;
