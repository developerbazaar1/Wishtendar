import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import profilePic from "../img/userProfile.png";
import { Link } from "react-router-dom";
const MainContent = () => {
  return (
    <>
      <main className="main-content mt-2">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
            <div className="tile">
              <div className="tile-content">
                <div className="user-banner-image">
                  <img
                    loading="lazy"
                    alt="banner"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                    className="img u-banner"
                  />
                </div>

                <div className="user-profile-container">
                  <img src={profilePic} alt="profil-pic" />
                </div>
                <div className="user-info">
                  <div className="user-content">
                    <div className="user-details">
                      <div className="user-name sec-head">Andrew Ainsley</div>
                      <div className="user-handle">@AAinsley</div>
                      <div className="user-link profile-details">
                        https://www.fightcompanion.io/aainsley
                      </div>
                      <div className="promotion-company profile-details">
                        Fight Promotion Company: UFC
                      </div>
                    </div>
                    <div className="profilelink-copy-btn">
                      <IoCopyOutline className="img-2" />
                    </div>
                  </div>
                  <div className="log-user-info-right">
                    <div className="fighter-top text-end">
                      <Link className="follow-button fav-btn">Favorites</Link>
                    </div>
                    <div className="fighter-bottom d-flex gap-2 flex-column">
                      <div className="d-flex align-items-center gap-1">
                        <FaRegCalendarAlt size={23} /> Joined May 2020
                      </div>
                      <div className="d-flex gap-1 align-items-center justify-content-end">
                        <FaXTwitter className="social-icon-style" size={20} />
                        <FaInstagram className="social-icon-style" size={20} />
                        <FaFacebookF className="social-icon-style" size={20} />

                        <GoPencil size={20} className="social-picker" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainContent;
