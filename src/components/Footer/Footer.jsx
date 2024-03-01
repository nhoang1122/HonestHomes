import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* LEFT SIDE */}
        <div className="flexColStart f-left">
          <h1 width={120}>HonestHomes</h1>
          <span className="secondaryText">
            Our Vision is to Make All People
            <br />
            The Best Place to Live For Them.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Houston, TX, USA</span>
          <div className="flexCenter f-menu">
            <a href="#residencies">Property</a>
            <a href="#values">Values</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
