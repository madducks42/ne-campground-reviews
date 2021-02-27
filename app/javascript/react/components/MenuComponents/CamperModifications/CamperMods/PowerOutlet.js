import React from "react";

const PowerOutlet = () => {
  return (
    <div className="camper-mods-style">
      <p className="is-size-7 mb-4">
        I&apos;d been thinking about adding a 12 volt power outlet (a &quot;cigarette
        lighter&quot; style jack) for a while. I wasn&apos;t sure what I&apos;d use it for
        (there are USB jacks all over the place) but I knew some day the need
        would come. And it did.
      </p>
      <p className="is-size-7 mb-4">
        When it became clear that working from home was a long-term thing during
        the summer of 2020, Maddox tried to book as many campsites as possible.
        My company&apos;s vacation policy is pretty great, but it was clear that I&apos;d
        have to work on some of these trips. I&apos;m fortunate that I can work just
        about anywhere with a laptop, and internet. But as we started looking at
        longer trips I needed a way to charge the laptop. See the Macbook Charger I use on the road, below.
        And this thing can pull a fair amount of power, and be plugged in for a
        while, so I needed an outlet up to the task (lots of stories of cheap
        sockets melting out there).
      </p>
      <p className="is-size-7 mb-4">
        With this mod I had a few concerns... primarily not killing the battery,
        and not starting a fire.
      </p>
      <p className="is-size-7 mb-4">
        I thought about putting some sort of battery alarm in, but the camper
        came with a voltmeter gauge built-in, and it does a good job of letting
        me know the state of the battery. I tend to watch it closely when I&apos;m
        using the battery a lot. And worst case I bring spare batteries and can
        recharge via the
        solar setup.
      </p>
      <p className="is-size-7 mb-4">
        The &quot;not starting a fire&quot; requirement primarily meant the components had
        to be up to the task, and a little protection needed to be installed.
      </p>
      <p className="is-size-7 mb-4">
        For the outlet, a quick search revealed that just about every outlet on
        Amazon has at least one reviewer talking about the outlet overheating
        and melting. But I found{" "}
        <a
          href="https://www.amazon.com/gp/product/B00K0TQ94C/1"
          target="_blank" rel="noreferrer"
        >
          this one
        </a>{" "}
        with an all-metal body, and a fair amount of air-space around it to keep
        it cool.
      </p>
      <p className="is-size-7 mb-4">
        Next up was the wire. I really just wanted to make sure that, like the
        outlet, the wiring was up to the task. Primarily meaning weather-proof,
        and thick enough to keep cool under load. For cost and performance, I
        ended up using outdoor rated 12-2 wire from the big-box hardware store.
        The wire is only 10 feet long, and even if the laptop charger is pulling
        the full 90W it's capable of, that&apos;s no where near the capacity of the
        wire. While the wire is outdoor rated, where exposed to the elements it's also tucked into the existing wireloom.
      </p>
      <p className="is-size-7 mb-4">
        Lastly, since this thing is directly connected to the battery, I wanted
        to include some short protection. I opted for this{" "}
        <a href="https://www.amazon.com/gp/product/B07NSFHT2V/" target="_blank" rel="noreferrer">
          auto-reset 12V circuit breaker
        </a>
        . This is the same style of{" "}
        <a href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/powerjack1.jpg" target="_blank" rel="noreferrer">
          protection used by the RV manufacturer
        </a>
        . It will protect the circuit, and I won&apos;t need to replace a fuse if I
        do overload it.
      </p>
      <p className="is-size-7 mb-4">
        Wiring this up was pretty straight forward. The existing breaker and an
        electrical box are located right behind the battery{" "}
        <a href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/powerjack3.jpg" target="_blank" rel="noreferrer">
          on the back of a frame rail
        </a>
        . The battery cable from the battery to the hot side of the existing
        breaker is a standard car battery cable, and certainly up to the load
        I&apos;m adding to it. I used the &quot;hot&quot; terminal of the existing circuit
        breaker to tap into the power, and ran a little &quot;jumper&quot; to the
        new/additional breaker, which I put inside this conveniently located
        electrical box for a bit of extra weather protection. There was an
        existing ground screw inside there as well which made that easy. Added
        my 12-2 cable to the other end of the new breaker, ran it out of the
        electrical box, along the frame, and up inside the cabin through an
        existing plumbing hole. I sealed the hole with &quot;great stuff&quot; (basically
        what it was originally sealed with), and then I had my fault-protected
        hot wire inside the cabin.
      </p>
      <p className="is-size-7 mb-4">
        For esthetics, and ease, I mounted the outlet under the bed as well, to
        the back side of the
        storage unit I installed. It's out of the way,
        but easily accessible.
      </p>
    </div>
  );
};
export default PowerOutlet;
