import React from "react";
import Modal from "react-bootstrap/Modal";
import { IoIosAdd } from "react-icons/io";

const SocialLinkModal1 = () => {
  return (
    <>
      <div>
        <Modal
          show={true}
          // onHide={handleCloseadvetModal}
          id="modal-container"
          centered
        >
          <div>
            <h5 className="sec-head">Update Your Social Links</h5>
            <div className="my-3 goal-title ">You have no social links.</div>
            <div className="social-btn-group">
              <button className="add-link-btn goal-title text-black">
                <IoIosAdd /> add Link
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

export default SocialLinkModal1;
