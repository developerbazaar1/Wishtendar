import Modal from "react-bootstrap/Modal";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLinkOutline, IoUnlinkOutline } from "react-icons/io5";

const SocialLinkModal2 = () => {
  return (
    <>
      <div>
        <Modal
          show={false}
          // onHide={handleCloseadvetModal}
          id="modal-container"
          centered
        >
          <div>
            <h5 className="sec-head">Update Your Social Links 2</h5>
            <div className="my-3">
              <div className="socal-links">
                <div className="social-top">
                  <div className="left dropdown">
                    <button
                      className=" dropdown-toggle social-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select a Platform
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item social-link-item" href="#">
                          <FaInstagram />
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item social-link-item" href="#">
                          <FaXTwitter /> Twitter
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item social-link-item" href="#">
                          <FaFacebookF />
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item social-link-item" href="#">
                          <FaTiktok />
                          Tiktok
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item social-link-item" href="#">
                          <IoLinkOutline />
                          Other
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <input
                      type="checkbox"
                      className="socialink"
                      id="checkbox2"
                    />
                    <label className="socialLablel" for="checkbox2"></label>
                  </div>
                </div>

                <div className="social-bottom">bootom</div>
              </div>
            </div>
            <div className="social-btn-group">
              <button className="add-link-btn goal-title text-black">
                <IoIosAdd /> <span className="text-black">add Link</span>
              </button>
              <button className="save-social-btn goal-title text-white all-btn">
                Save
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SocialLinkModal2;
