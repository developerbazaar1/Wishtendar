import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { IoIosAdd } from "react-icons/io";
import SocialLinkModal2 from "./SocialLinkModal2";

const SocialLinkModal1 = ({ showSocilMdl1, setShowSocilMdl1 }) => {
  const [showSocilMdl2, setShowSocilMdl2] = useState(false);

  const handleShowModal2 = () => {
    setShowSocilMdl1(false);
    setShowSocilMdl2(true);
  };

  const handleCloseadvetModal = () => {
    setShowSocilMdl1(false);
  };

  return (
    <>
      <div>
        <Modal
          show={showSocilMdl1}
          onHide={handleCloseadvetModal}
          id="modal-container"
          centered
        >
          <div>
            <h5 className="sec-head">Update Your Social Links</h5>
            <div className="my-3 goal-title ">You have no social links.</div>
            <div className="social-btn-group">
              <button
                className="add-link-btn goal-title text-black"
                onClick={handleShowModal2}
              >
                <IoIosAdd /> add Link
              </button>
              <button
                className="save-social-btn goal-title text-white all-btn"
                onClick={handleCloseadvetModal}
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      </div>

      <SocialLinkModal2
        showSocilMdl2={showSocilMdl2}
        setShowSocilMdl2={setShowSocilMdl2}
      />
    </>
  );
};

export default SocialLinkModal1;
