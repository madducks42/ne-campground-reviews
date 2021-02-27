import React from "react";

const BatteryMonitor = () => {
  return (
    <div>
      <p className="is-size-7 mb-4">
        The &quot;Black Label&quot; package on the Gray Ghost came with a
        &quot;battery minder&quot;, also known as a voltmeter. While it gives
        you a vague indication of the state of your battery, it's mostly along
        the lines of OK, Almost Not OK, and Not OK. You have to turn off just
        about anything using the battery to get a decent reading and even then
        it's not very precise. Note, the gauge works as intended, but voltage
        (alone) doesn&apos;t tell you all you want to know about the state of a
        battery.
      </p>
      <p className="is-size-7 mb-4">
        And, again, we&apos;re rarely on site with power, so knowing what&apos;s
        going on with the batteries is important to us. Fundamentally, I want to
        know how much &quot;time&quot; I have left on a battery, or how much is
        left in the &quot;tank&quot;.
      </p>
      <p className="is-size-7 mb-4">
        So, I started looking into better battery monitors. To oversimplify what
        I&apos;ve learned....the better/best battery monitors:
      </p>
      <div className="content">
        <ol>
          <li>
            Determine the capacity of the battery (typically by asking you to
            enter it each time you change the battery).
          </li>
          <li>Keep track of what you pull out of the battery (more below)</li>
          <li>
            Do some math to determine how much power is left, usually presented as
            a percentage of the battery.
          </li>
        </ol>
      </div>       
      <p className="is-size-7 mb-4">
        This is considerably more accurate and informative than just using
        voltage. With a meter that measures power used, you can determine how
        much capacity you actually have (run a battery till &apos;empty&apos;,
        measure what you use, and then you know its capacity). Do it across all
        your batteries, add &apos;em up, and you know your total capacity.
      </p>
      <p className="is-size-7 mb-4">
        You can also get a sense for the rate at which you consume power (e.g.
        how many Ah (amp-hours) per day). So, this lets you estimate how many
        days you can camp for off the batteries you have.
      </p>
      <p className="is-size-7 mb-4">
        It turns out that in the battery meter space, there&apos;s the{" "}
        <a
          href="https://www.victronenergy.com/battery-monitors"
          target="_blank"
          rel="noreferrer"
        >
          Victron line
        </a>
        , and there&apos;s everything else. Just about everything else out there
        compares itself to the Victron. And while ultimately a fair bit more
        expensive, I went with the Victron, too. The big reason I chose the
        Victron is because it measures the power being used (many meters do),
        but it keeps track of what you&apos;ve used. AND, it also makes it
        really easy to update the meter&apos;s capacity setting for your battery
        via an app that connects to the meter via bluetooth.
      </p>
      <p className="is-size-7 mb-4">
        The Victron is one of the few meters that uses Ah-consumed relative to
        Ah-in-the-battery-when-fully-charged to display remaining capacity (most
        use voltage). This makes it more accurate. And the blue-tooth interface
        makes it trivial to update the capacity remaining when you swap
        batteries. All this adds up to a better sense for the power we&apos;re
        using, the power we have left in a given battery, and the power we have
        left in the remaining batteries.
      </p>
      <p className="is-size-7 mb-4">
        We don&apos;t have a battery bank. We have a bunch of batteries, and we
        swap them in as needed. This means roughly every two days I need to swap
        in a new battery. And, to effectively keep track of how much power we
        have left in the current battery, we need to update the meter when we
        swap batteries (tell the meter how much power is in the new battery).
        The{" "}
        <a
          href="https://www.amazon.com/Victron-Energy-MONITOR-VTBMV-S-BMV-712-Battery"
          target="_blank"
          rel="noreferrer"
        >
          Victron BMV-712
        </a>{" "}
        makes all of that easy.
      </p>
      <p className="is-size-7 mb-4">
        Also, as mentioned above, we have the Solar Suitcase. The Victron also
        measures Ah put back into the battery via charging. Again, this is a
        critical feature if we&apos;re going to use solar and keep track of the
        power left in a battery.
      </p>
      <p className="is-size-7 mb-4">
        While on the topic of battery meters, one other point... to measure the
        power-actually-used, battery meters use a &quot;shunt&quot; which is a
        small monitoring device that sits between the negative pole of the
        battery and the load (often carried via ground/frame in cars, travel
        trailers, etc). That means all current from (and to) the battery flows
        through this thing. The shunt is connected to the monitor, and
        that&apos;s how the monitor &quot;knows&quot; how much power is pulled
        from (or pushed to) the battery.
      </p>
      <p className="is-size-7 mb-4">
        Unfortunately, most shunts have some exposed circuitry, which means
        they&apos;re not well suited to being inside your typical tongue-mounted
        plastic battery box. So, when I ordered the monitor, I also order a box
        to house the shunt.
      </p>
    </div>
  );
};
export default BatteryMonitor;
