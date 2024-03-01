import React from "react";
import "./Contact.css";

import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper" id="contact">
      <div className="paddings innerWidth flexCenter c-container">
        {/* LEFT SIDE */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Ease To Contact Us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best service!
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              {/* FIRST CONTACT */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">713 222 4663</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a
                    href="mailto:johnhoang.dev@gmail.com?subject=Let's%20Find%20A%20New Home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Call Now
                  </a>
                </div>
              </div>
              {/* SECOND CONTACT */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">713 222 4663</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a
                    href="mailto:johnhoang.dev@gmail.com?subject=Let's%20Find%20A%20New Home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
            <div className="flexStart row">
              {/* THIRD CONTACT */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">honesthomes@gmail</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a
                    href="mailto:johnhoang.dev@gmail.com?subject=Let's%20Find%20A%20New Home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message Now
                  </a>
                </div>
              </div>
              {/* FOURTH CONTACT */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">E-Mail</span>
                    <span className="secondaryText">honesthomes@gmail</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a
                    href="mailto:johnhoang.dev@gmail.com?subject=Let's%20Find%20A%20New Home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    E-Mail Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
