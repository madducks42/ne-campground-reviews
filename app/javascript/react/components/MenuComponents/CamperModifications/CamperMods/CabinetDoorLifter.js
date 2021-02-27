import React from "react";

const CabinetDoorLifter = () => {
  return (
    <div className="camper-mods-style">
      <p className="is-size-7 mb-4">
        We tend to store food in the cabinets over the dining table. These
        cabinets swing up, which make them space-efficient. But it's tough to dig
        around in the cabinet, and impossible to grab something with one hand.
        So, in a common mod, we added{" "}
        <a
          href="https://www.amazon.com/gp/product/B01H18I46K/"
          target="_blank"
          rel="noreferrer"
        >
          gas struts (lifters)
        </a>{" "} 
        to hold the doors open.
      </p>
      <p className="is-size-7 mb-4">
        There are two tricks to this mod, finding the right strut, and the
        installation itself. Struts vary in size (length) and power. Size is key
        to ensuring the fit, and power is important to ensure the door stays
        open (and doesn&apos;t damage the frame). For this application I used 10
        lb, 10 inch struts, and they worked perfectly. They&apos;re strong
        enough to hold the door open, but still easy to close.
      </p>
      <p className="is-size-7 mb-4">
        The slightly more challenging part was the actual installation. If your
        cabinets are solid wood, then you don&apos;t have much to worry about.
        The doors on our cabinets are solid wood (thanks to the Black Label
        Edition) but the cabinet frames are still particle board. And over time,
        the pressure from the strut when closing will rip the screws out of
        particle board. So, I mounted a short piece of 2x2 to the back of the
        cabinet face (stained to match the cabinets) and mounted the lower end
        of the structure to that. Note that the 2x2 is resting on the bottom of the
        cabinet to help absorb the constant downward pressure when the cabinet
        is closed.
      </p>
      <div className="lightbox-container-mods">
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/lifter1.jpg"
          data-lightbox="cabinet-door-lifter"
          data-title="Cabinet Door Lifter"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/lifter1.jpg"
            alt="Cabinet Door Lifter"
          />
        </a>
      </div>
    </div>
  );
};
export default CabinetDoorLifter;
