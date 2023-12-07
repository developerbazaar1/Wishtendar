import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { MdLock } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const AccountDeleteModal = ({ showPasswordModal, setshowPasswordModal }) => {
  const [confrimmessage, setconfrimmessage] = useState(false);
  const handleClosePasswordModal = () => {
    setshowPasswordModal(false);
    setconfrimmessage(false);
  };

  return (
    <>
      <div>
        <Modal
          show={showPasswordModal}
          onHide={handleClosePasswordModal}
          id="modal-container"
          centered
        >
          {!confrimmessage && (
            <div>
              <h5 className="sec-head">Delete Account</h5>
              <div className="deletPassrdmodal-body">
                {/* password input sectin */}
                <div className="password-grup">
                  <label
                    htmlFor="password "
                    className="typo-grey-16-600 text-black"
                  >
                    Password
                  </label>
                  <div>
                    <MdLock color="#9E9E9E" />

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <FaEye color="#9E9E9E" className="password-eye" />
                  </div>
                </div>
                {/* password message input sectin */}
                <div className="passwordmessage-grup">
                  <label
                    htmlFor="passwordmessage"
                    className="typo-grey-16-600 text-black"
                  >
                    Write a Reason
                  </label>
                  <textarea
                    rows="4"
                    cols="60"
                    type="text"
                    name="passwordmessage"
                    id="passwordmessage"
                  />
                </div>
              </div>
              <div className="social-btn-group">
                <button
                  className="save-social-btn goal-title text-white all-btn"
                  onClick={() => setconfrimmessage(true)}
                  style={{
                    width: "51%",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* account delection succes modal data  */}

          {confrimmessage && (
            <div>
              <div>
                <h5 className="sec-head"> Account Deletion Request Received</h5>
                <p className="deletPassrdmodal-success typo-grey-14">
                  A Confirmation Email has been Sent to Verify Your Account
                  Deletion Request
                </p>
                <div className="social-btn-group">
                  <button
                    className="save-social-btn goal-title text-white all-btn"
                    onClick={handleClosePasswordModal}
                    style={{
                      width: "51%",
                    }}
                  >
                    Go Check Your Email
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
};

export default AccountDeleteModal;
