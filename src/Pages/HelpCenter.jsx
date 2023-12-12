import React from "react";
import AlertaImage from "../img/work-page-image.png";
// import { Link } from 'react-router-dom/dist';

const HelpCenter = () => {
  return (
    <div className="main-content">
      {/* main page head */}
      <section className="help-center">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11 text-center">
            <div className="f-page-head">
              <h2>Welcome To Our Help Center</h2>
              <p>Your Go-To Resource for Assistance and Information</p>
            </div>
          </div>
        </div>
      </section>
      {/* content section */}
      <section className="help-cnt">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11 text-center">
            <div className="help-page">
              <div className="inf-img">
                <img src={AlertaImage} alt="image" className="w-100" />
              </div>
              <div className="p-head mt-3">
                <h2>Are you facing any problem?</h2>
                <p>
                  If you need instant support then use live chat option to reach
                  us quickly. Our support will reply as soon as possible after
                  you send us a message
                </p>
              </div>
              <div className="btn-group mt-3">
                {/* Button for sending an email */}
                <a href="mailto:example@example.com" className="email-button">
                  Connect Us Via Mail
                </a>
                {/* Button for making a call */}
                <a href="tel:+123456789" className="call-button">
                  Connect Us Via Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
