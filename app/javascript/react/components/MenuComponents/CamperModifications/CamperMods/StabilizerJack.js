import React from "react";

const StabilizerJack = () => {
  return (
    <div>
      <p className="is-size-7 mb-4">
        On our third or fourth trip with the Gray Ghost, I was backing it into a
        campsite in the dark. The ground was uneven, and I ended up catching the
        two front stabilizer jacks on the ground. While mostly still functional,
        they were bent up, tough to crank, and a lot of the paint flaked off
        (see the pics, below). I figured replacement would be straight forward,
        but given the price of a decent replacement, I decided to fix one first.
        I ordered{" "}
        <a
          href="https://www.amazon.com/gp/product/B003ZOJADQ/"
          target="_blank"
          rel="noreferrer"
        >
          this as a replacement
        </a>
        . It's definitely heavier-duty than the original. Installation
        wasn&apos;t hard, but it didn&apos;t just bolt right in in-place of the
        original. Two of the four mounting holes lined up, but I had to drill
        the other two. This jack didn&apos;t come with mounting hardware, but I
        had a few grade-5 bolts just the right size laying around. Bolted it
        right in. And it's definitely more solid than the original. At some
        point, I&apos;ll replace the other less-bent one.
      </p>
      <div className="lightbox-container-mods">
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/jack1.jpg"
          data-lightbox="stabilizer-jack"
          data-title="Stabilizer Jack Upgrades"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/jack1.jpg"
            alt="Stabilizer Jack Upgrades"
          />
        </a>
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/jack2.jpg"
          data-lightbox="stabilizer-jack"
          data-title="Stabilizer Jack Upgrades"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/jack2.jpg"
            alt="Stabilizer Jack Upgrades"
          />
        </a>
      </div>
    </div>
  );
};
export default StabilizerJack;
