import React, { useState, useEffect } from "react";

import MattressUpgrade from "./CamperMods/MattressUpgrade";

const CamperModsContainer = () => {
  const [iconType, setIconType] = useState("");
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setIconType("fas fa-plus-square")
    setShow(false)
    setHide(true)
  }, [])

  let onClickHandler = () => {
    toggleShow()
  }

  const toggleShow = () => {
    if (hide === true) {
      setIconType("fas fa-minus-square")
      setShow(true)
      setHide(false)
    } else if (hide === false) {
      setIconType("fas fa-plus-square")
      setShow(false)
      setHide(true)
    }
  }

  return (
    <div>
      <h1>Camper Modifications</h1>
      <p>
        As much as we love the Wolf Pup (aka the &apos;Gray Ghost&apos;), there
        are some things that we tweaked...
      </p>
      <div className="flex-row">
        <h3>Mattress Upgrade</h3>
        <button
          type="button"
          id= "mattress-upgrade"
          className={iconType}
          onClick={onClickHandler}
        ></button>
      </div>
      {show === true && <MattressUpgrade />}
    </div>
  );
};

export default CamperModsContainer;
