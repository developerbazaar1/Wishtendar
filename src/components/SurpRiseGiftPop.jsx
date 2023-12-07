import React from "react";
import Modal from "react-bootstrap/Modal";

const SurpRiseGiftPop = ({ showsurpriseModal, setshowsurpriseModal }) => {
  const handleCloseSurpriceModal = () => {
    setshowsurpriseModal(false);
  };

  return (
    <>
      <div>
        <Modal
          show={showsurpriseModal}
          onHide={handleCloseSurpriceModal}
          id="modal-container"
          centered
        >
          <div>
            <h5 className="sec-head">Update Surprise Gift Settings</h5>
            <div className="giftmodal-body">
              <div className="ceckbox-grup">
                <input
                  type="checkbox"
                  name="surprisecheck"
                  id="surprisecheck"
                />
                <label
                  htmlFor="surprisecheck"
                  className="typo-grey-14 text-black"
                >
                  Enable surprise gift
                </label>
              </div>
              <div className="MinAmount-grup">
                <label
                  htmlFor="minammount "
                  className="typo-grey-16-600 text-black"
                >
                  Min Amount
                </label>
                <input
                  type="text"
                  name="minammount"
                  id="minammount"
                  placeholder="$ 0.00"
                />
              </div>
            </div>
            <div className="social-btn-group">
              <button
                className="save-social-btn goal-title text-white all-btn"
                onClick={handleCloseSurpriceModal}
                style={{
                  width: "51%",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SurpRiseGiftPop;
