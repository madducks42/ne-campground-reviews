import React from "react";

const MotionActivatedLights = () => {
  return (
    <div className="camper-mods-style">
      <p className="is-size-7 mb-4">
        This is another of my favorites. More often than not, we&apos;re camping
        on batteries. And while we do have 4 of them, we try to make each one
        last. So, that means turning off lights when we&apos;re not using them.
        This mod not only turns off the lights when we&apos;re out of the camper
        (common during dinner prep, for example), but it also turns them on
        &quot;hands-free&quot; when we enter.
      </p>
      <p className="is-size-7 mb-4">
        The key is a{" "}
        <a
          href="https://www.amazon.com/gp/product/B00JLB0GM6/"
          target="_blank"
          rel="noreferrer"
        >
          relatively cheap little 12V motion sensor switch
        </a>
        , and a little creative wiring. At a minimum, I wanted the two main
        ceiling lights to be controlled by the motion sensor. Not knowing
        exactly how the lights were wired, I started by removing the ceiling
        light closest to the power center (located) under the fridge. When I
        pulled the light from the ceiling, it was clear that the power came into
        the light, and then went on somewhere else. The only way I could think
        of to figure out what else was powered by this wire was to cut it, and
        see what stopped working, which is what I did. I was hoping all the
        lights in the camper would go out (and everything else would remain
        powered), but just the other ceiling light went out. That was good
        enough.
      </p>
      <p className="is-size-7 mb-4">
        This light is located right in front of the stereo head unit mounted in
        the overhead storage. This was convenient because I wanted to mount the
        motion sensor on that cabinet, right in front of the entry door. So, I
        spliced in a long loop of wire where I&apos;d cut the power supply to
        the lights, and was able to fish it through the ceiling and drop it into
        the cabinet where the speaker wires ran from the head unit to the
        speakers (also in the ceiling). With the &quot;switch&quot; wire in the
        cabinet, it was easy to staple it along the upper, inside of the front
        of the cabinet to get the wires opposite the door.
      </p>
      <p className="is-size-7 mb-4">
        When I ordered the motion sensor, I also picked up some of{" "}
        <a
          href="https://www.amazon.com/gp/product/B071LQFQ17/"
          target="_blank"
          rel="noreferrer"
        >
          these barrel power plug pigtails
        </a>
        . These allow me to plug the motion sensor &quot;in line&quot; in the
        power supply to the ceiling lights. It also allows me to easily remove
        the motion sensor and just plug the one end of the spliced-in wire into
        the other end, basically repairing the circuit I spliced and returning
        normal operation. And that&apos;s actually how things are right now.
        Once I find a SPDT switch that matches the ones already in the camper
        (probably something like{" "}
        <a
          href="https://www.amazon.com/gp/product/B002UC8MOM/"
          target="_blank"
          rel="noreferrer"
        >
          this
        </a>
        , but SPDT) then I&apos;ll use the switch to override the motion sensor,
        making the lights work &quot;normally&quot;. These ceiling lights have a
        built-in button switch that still operates and could confuse the whole
        thing a bit. If the lights, themselves, are switched off, it won&apos;t
        matter if the motion sensor sends them power. I may try to find an
        &quot;On/Off/On&quot; switch (and superglue the buttons on the lights in
        the &quot;On&quot; position). Then I&apos;d have a &quot;wall&quot;
        switch that could toggle between &quot;Off&quot;, &quot;On&quot;, and
        &quot;Motion Sensor&quot;.
      </p>
      <p className="is-size-7 mb-4">
        Also, I read some less-than-great reviews of the motion sensor but its
        worked <em>perfectly</em> for us. You can adjust the sensitivity (to
        motion), and we&apos;ve got ours set to it can detect you as you step up
        to the screen door from the outside. Literally, you hit the steps and
        the lights come on!
      </p>
      <p className="is-size-7 mb-4">
        You can also adjust the amount of time the lights stay on after the last
        motion was detected. So, ours stay on for about 5 min, then go off. But
        if you keep moving (or move at least once every 5 min) they stay on.
        Exactly what we wanted.
      </p>
      <div className="lightbox-container-mods">
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/motionsensor1.jpg"
          data-lightbox="motion-lights"
          data-title="Motion Sensor Ceiling Lights"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/motionsensor1.jpg"
            alt="Motion Sensor Ceiling Lights"
          />
        </a>
        <a
          href="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/motionsensor2.jpg"
          data-lightbox="motion-lights"
          data-title="Motion Sensor Ceiling Lights"
        >
          <img
            className="galleryimage"
            src="https://campground-reviews-prod.s3.amazonaws.com/CamperMods/motionsensor2.jpg"
            alt="Motion Sensor Ceiling Lights"
          />
        </a>
      </div>
    </div>
  );
};
export default MotionActivatedLights;
