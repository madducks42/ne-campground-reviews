import React from "react";

const CellBooster = () => {
  return (
    <div>
      <p className="is-size-7 mb-4">
        Normally we go camping to &quot;get away&quot;. So, having poor or no connectivity
        is just fine. But, as I mentioned, over the summer of 2020 we had a lot
        of trips planned, and I needed to work through some of them. With the
        power outlet and laptop charger, the only other thing I need is a
        reliable cell/data signal. So, I started looking into cellphone
        boosters. After a little research, I learned a few things:
      </p>
      <div className="content">
        <ul>
          <li>
            These things are <em>boosters</em>. This means there needs to be{" "}
            <em>some</em> signal for them to boost. If there&apos;s no signal, these
            are useless.
          </li>
          <li>
            You need to get one that works for your carrier(s). Different carriers
            (Verizon, T-Mobile, Sprint, etc) use different frequencies and bands.
            Some boosters only support one carrier, some support multiple, but I
            don&apos;t believe any (affordable ones) support them all.
          </li>
          <li>
            These devices are basically two antennas with a booster in the middle.
            (This is over-simplified, but...) Think of it as one antenna (the
            external one) that pulls the signal in, and sends it to the booster
            box. The booster amplifies the signal, and rebroadcasts via the local
            antenna for your phone or hotspot to connect to.
          </li>
          <li>
            One major difference between models is the amount of space they can
            cover with the local (rebroadcasting) antenna. In short, how close do
            you need to stand to the antenna with your phone. As an example, for
            the brand I bought (not the model) local coverage of up to 6,000 sqft
            costs ~$550, And coverage for 10,000 sqft costs ~$700. Again, I didn&apos;t
            buy either of these.
          </li>
          <li>
            Another major difference is how they &quot;help&quot; you point the antenna.
            Fancy ones have a display right on the booster. Cheaper ones use an
            app on your phone to help you find the best signal. Basic ones have an
            LED on the booster that indicates &quot;ok&quot; or not.
          </li>
          <li>
            The ones designed for mobile use an omni-directional antenna. This is
            an antenna that doesn&apos;t have a front or back, and receives a signal
            equally well from any direction... but not necessarily &quot;well&quot;. The
            other type of antenna, the ones used by most non-mobile systems is
            directional, and must be pointed at the cell tower your boosting (not
            necessary with the omni-directional ones). This requires more work to
            set up, but directional antennas can pull in weaker signals than
            omni-directional ones. They&apos;re used in non-mobile systems because,
            while they&apos;re more work to set up (aim), you only have to do it once,
            and... they work better. Mobile systems are typically more expensive,
            and have shorter local range (because you&apos;re usually in the car with
            the internal antenna).
          </li>
          <li>
            Most (all?) boosters require significant distance/separation between
            the antennas so that the receiving antenna doesn&apos;t pick up the signal
            from the local antenna and create a feedback loop. The stronger the
            booster, the more separation required. And vertical separation is best
            (mounting the receiving one up high, like on a roof).
          </li>
        </ul>
      </div>
      <p className="is-size-7 mb-4">
        So, once I figured out the basics about how these things work, I made a
        few decisions. First, I was a bit skeptical that they would really solve
        my problem, so I wasn&apos;t willing to dump a TON of money into the really
        high-end ones.
      </p>
      <p className="is-size-7 mb-4">
        Next, I decided that to save money, <em>and</em> get better performance,
        I would buy one designed to be stationary (i.e. not mobile) and adapt it
        for my needs. This meant it would need to be able to run off 12V DC (or
        less), and I&apos;d need to figure out how to making setup (aiming the
        antenna) relatively easy.
      </p>
      <p className="is-size-7 mb-4">
        On that last note (making setup easy), that ruled out the cheapest
        models with the simple LED that helps you aim.
      </p>
      <p className="is-size-7 mb-4">
        I ended up getting the{" "}
        <a
          href="https://www.amazon.com/gp/product/B0871SZQDW/"
          target="_blank"
          rel="noreferrer"
        >
          HiBoost Dot
        </a>
        . I chose this one because:</p>
        <div className="content">
          <ul>
            <li>
              It supported Verizon and T-Mobile (my carrier and Maddox&apos;s) to
              maximize our chance of being able to find a signal that worked for
              at least one of us.
            </li>
            <li>
              It connects to an app on your phone via bluetooth to help you aim
              the exterior antenna. Way more helpful than a green LED.
            </li>
            <li>Reviews were solid.</li>
            <li> Price was ok.</li>
            <li>
              Part of the reason it was on the cheaper end (for these devices) is
              because it doesn&apos;t cover much area, locally. But since I figured I&apos;d
              use it in the camper, or immediately outside, I didn&apos;t need a lot of
              sq ft coverage. This one covers up to 1,000 sq ft. And in hindsight
              this is probably the unit&apos;s biggest weakness.
            </li>
        </ul>
      </div>
      <p className="is-size-7 mb-4">
        Once I had the booster, I had two things to figure out: power and the
        external antenna mount (and aiming).
      </p>
      <p className="is-size-7 mb-4">
        For power, I had an unused{" "}
        <a
          href="https://www.amazon.com/gp/product/B019RKVMKU/"
          target="_blank"
          rel="noreferrer"
        >
          step-down regulator
        </a>{" "}
        floating around from a previous project. This would take the 12+ VDC
        from a camper (car) battery or the power outlet and drop it down to the
        5VDC required by the booster. I threw this in a project box with a
        cigarette lighter plug on the input, and a barrel plug on the output.
        Power solved.
      </p>
      <p className="is-size-7 mb-4">
        Next was the antenna. The receiving antenna that had to be about 20 feet
        higher than the local/transmitting antenna. Obvious answer here? PVC
        pipe!
      </p>
      <p className="is-size-7 mb-4">
        I took two 10 foot pieces of PVC pipe, one 2&quot; in diameter, and the other
        1-1/2&quot;, and slid one inside the other, overlapping by about 1 foot. I
        drilled a hole through the overlap, and put an eye bolt through (I had
        one laying around, and easy to screw in by hand). This gave me a 19&apos;
        tall mast. I knew I&apos;d attach it to the back of the camper, and resting
        on the rear bumper gave me another 2&apos; of height.
      </p>
      <p className="is-size-7 mb-4">
        To secure the bottom of the mast I needed something that would hold it
        from sliding around, but let me rotate the mast easily for aiming. I
        ended up using{" "}
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/PVCflange.jpg"
          target="_blank"
          rel="noreferrer"
        >
          a PVC flange
        </a>{" "}
        held to the bumper with a bungee cord. Easy to set up, cheap, and not
        permanent (in case this whole thing didn&apos;t work).
      </p>
      <p className="is-size-7 mb-4">
        For the securing the top end, I (initially) took the easy route and used
        a few ratchet straps looped over the roof and down the sides of the
        camper.
      </p>
      <p className="is-size-7 mb-4">
        After the first trip with this setup, I got some... uh... &quot;feedback&quot;
        from my better half that I was making the camper look trashy with those
        neon straps and the PVC pipe. So a minor makeover was in order for the
        antenna and mast.
      </p>
      <p className="is-size-7 mb-4">
        The mast got a coat of gray paint (matches the camper), the neon straps
        were replaced with black, and the antenna got a big old pair of googley
        eyes.
      </p>
      <p className="is-size-7 mb-4">A few other things to note about the setup...</p>
      <p className="is-size-7 mb-4">
        It was pointed out that my cable management is for shit. I should have
        run the antenna coax inside the mast. The mast collapses down to 10&apos;,
        and I store/carry is strapped to the camper frame with a few heavy
        bungee cords.
      </p>
      <div className="lightbox-container-mods">
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/cellrepeaterv1-1.jpg"
          data-lightbox="cell-bungee-cords"
          data-title="Cell Tower Setup"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/cellrepeaterv1-1.jpg"
            alt="Cell Tower Setup"
          />
        </a>
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/cellrepeaterv2-1.jpg"
          data-lightbox="cell-bungee-cords"
          data-title="Cell Tower Setup"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/cellrepeaterv2-1.jpg"
            alt="Cell Tower Setup"
          />
        </a>
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/cellrepeaterv2-2.jpg"
          data-lightbox="cell-bungee-cords"
          data-title="Cell Tower Setup"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/cellrepeaterv2-2.jpg"
            alt="Cell Tower Setup"
          />
        </a>
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/cellrepeaterv2-3.jpg"
          data-lightbox="cell-bungee-cords"
          data-title="Cell Tower Setup"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/cellrepeaterv2-3.jpg"
            alt="Cell Tower Setup"
          />
        </a>
        </div>
      <p className="is-size-7 mb-4">So, that&apos;s the set up... but how does it work?</p>
      <p className="is-size-7 mb-4">
        First... aiming the thing. The app does a good job showing you the
        strength of the signal it's picking up... with a minor exception. The
        signal strength gauge in the app isn&apos;t updated in real-time. So you need
        to adjust the angle and wait about 5 seconds to see a response on the
        gauge. And a degree or two can make a meaningful difference. 5 seconds
        doesn&apos;t sound like very long, but getting it perfectly aimed typically
        takes about 10 minutes because of this.
      </p>
      <p className="is-size-7 mb-4">
        Aiming is also tricky because, at least for us, we&apos;re trying to find the
        best position for two different frequencies (one for her phone on
        T-Mobile, and one for mine on Verizon). There&apos;s a gauge for each, and we
        have to find the right balance between the two.
      </p>
      <p className="is-size-7 mb-4">
        Once the receiving antenna is set up, we need to set up the
        local/transmitting antenna. As I mentioned above, this antenna is pretty
        weak, and has very little range. So I tend to move it around a lot (it's
        on a 30&apos; coax cable) to position it near wherever I&apos;m working. And
        proximity of the phone to the local antenna makes a big difference in
        connection speed. I may get almost no signal 10 feet away, but 3 or 4
        bars with the phone right up against the antenna.
      </p>
      <p className="is-size-7 mb-4">
        Since I&apos;m mostly using this setup for internet access, I tend to turn on
        the hotspot on my phone, which has pretty good range, and then put the
        phone right next to the local antenna. This lets me move around easily,
        work where I want, and still keep a decent signal. But it's a bit
        annoying if I actually want to use the phone.
      </p>
      <p className="is-size-7 mb-4">
        I wish the entire setup process (assembling the mast, setting it up,
        aiming, power, etc) were a bit easier, and I do have some ideas for
        improvements here. And I wish the range on the local antenna was better.
        In hindsight, I should have spent a bit more to get better local range.
      </p>
      <p className="is-size-7 mb-4">
        But, all in all, I&apos;m happy with the setup. It has definitely enabled me
        to take trips that I wouldn&apos;t have been able to without it, due to work.
      </p>
    </div>
  );
};
export default CellBooster;
