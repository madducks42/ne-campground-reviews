import React from "react";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="flex-column callout  mt-6">
        <h1 className="is-size-1">About Us</h1>
        <p className="is-size-7">
          We&apos;re just two nerds constantly looking for ways to escape the
          city and do not have the ability to not turn everything into a
          project. Upon getting back from a long camping trip we talked about
          how one of the campgrounds was a bit of a let down and discussed
          future modifications for our camper. This led to an off-hand comment
          of, &quot;Hey we should create a website to post our campground
          reviews and trailer modifications because it&apos;s not like we have
          dozens of other projects piling up that we should be working on.&quot;
          It took us less than five minutes to grab our laptops and get to work.
        </p>
        <p className="is-size-7">
          So that&apos;s how this website came to be. Everytime we visit a new
          campground we&apos;ll add it here as well as add updates to our
          favorite campgrounds. The camper modifications will never be done.
          Neither of us are capable of not continuing to find ways to improve it
          because neither of us know how to relax and do nothing.
        </p>
        <p className="is-size-7">
          If you&apos;re interested in following our adventures on social media
          check out the links below for Perpetually Lost Photography. In
          addition to camping around New England we normally take several trips
          a year to various national parks and try to visit Costa Rica as often
          as we can.
        </p>
        <br/>
        <p className="is-size-7">-Maddox & Caesar</p>
      </div>
      <div className="social-media-callout">
        <a
          href="https://www.instagram.com/perpetuallylostphotography/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/icons/instagram.png" alt="Instagram icon" />
        </a>
        <a
          href="http://www.facebook.com/perpetuallylostphotography/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/icons/facebook.png" alt="Facebook icon" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
