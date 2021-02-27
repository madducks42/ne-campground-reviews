import React from "react";

const InsideSpeakerUpgrade = () => {
  return (
    <div>
      <p className="is-size-7 mb-4">
        We like music. A lot. Our whole house is wired for sound. Bedrooms,
        kitchen, living room, playroom, a bathroom, and even the deck (complete
        with subwoofer). And while we don&apos;t blast our tunes while camping,
        it's still nice to have decent sound.
      </p>
      <p className="is-size-7 mb-4">
        The Wolf Pup came with a sound system which included radio, bluetooth
        and an indoor zone and an outdoor zone. But, the speakers were junk.
        So,one of the first upgrades I did was to replace the inside speakers
        with a pair of{" "}
        <a
          href="https://www.amazon.com/gp/product/B01EXOTD56/"
          target="_blank"
          rel="noreferrer"
        >
          Polk DB652 6.5&quot; speakers
        </a>
        . I chose these because:
      </p>
      <div className="content">
        <ul>
          <li>
            Polk makes a decent speaker for the cost. I&apos;ve got 2 pairs in my
            Wrangler and they sound great.
          </li>
          <li>
            They&apos;re efficient (92 dB sensitivity) so they do well making good
            sound out of little power, important given the somewhat anemic head
            unit.
          </li>
          <li>
            They&apos;ve got a decent lower end for the size (these preceded the
            subwoofer)
          </li>
          <li>
            The marine IP55 certification means the elements will never be a
            problem (yes, they&apos;re inside, but still..)
          </li>
          <li>The price was reasonable</li>
          <li>
            They fit the stock holes (right diameter, not too deep) and
            they&apos;re light-weight enough that the thin ceiling can still
            support them.
          </li>
        </ul>
      </div>
      <p className="is-size-7 mb-4">
        All in all, they sound pretty good. The head unit is still too
        underpowered to get really good sound. But this is a huge step up.
      </p>
      <div className="lightbox-container-mods">
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/insidespeaker1.jpg"
          data-lightbox="inside-speakers"
          data-title="Inside Speaker Upgrade"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/insidespeaker1.jpg"
            alt="Inside Speaker Upgrade"
          />
        </a>
      </div>
    </div>
  );
};
export default InsideSpeakerUpgrade;
