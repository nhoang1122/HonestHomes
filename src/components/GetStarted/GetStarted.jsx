import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="started">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started</span>
          <span className="secondaryText">
            Subscribe and Find Attractive Prices!
            <br />
            Find Your Residence Soon!
          </span>
          <button className="button">
            <a
              href="mailto:johnhoang.dev@gmail.com?subject=Let's%20Find%20A%20New Home"
              target="_blank"
              rel="noreferrer"
            >Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
