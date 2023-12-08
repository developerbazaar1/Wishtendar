import React from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const SendSurpriseModal = ({
  sendShowSurpriseModal,
  setSendShowSurpriseModal,
}) => {
  const navigate = useNavigate();
  const handleCloseSurpriceGiftModal = (action) => {
    if (action === "checkout") {
      console.log("incheckout");
      navigate("/cartfighter");
    }
    if (action === "continueshopping") {
      console.log("nothing");
    }

    setSendShowSurpriseModal(false);
  };
  return (
    <>
      <div>
        <Modal
          show={sendShowSurpriseModal}
          onHide={() => handleCloseSurpriceGiftModal("nothing")}
          id="modal-container"
          centered
        >
          <div>
            <h5 className="sec-head">Send a Surprise</h5>
            <div className="giftmodal-body">
              <div className="MinAmount-grup">
                <label
                  htmlFor="minammount "
                  className="typo-grey-16-600 text-black"
                >
                  Amount
                </label>
                <div className="send-gift-container typo-grey-16-600">
                  <span>CA$</span>
                  <input type="text" />
                </div>
                <small className="type-12-18-4">
                  [Fighter's Name] has set the minimum surprise amount to
                  CA$X.XX.
                </small>
              </div>
              <div className="MinAmount-grup">
                <label
                  htmlFor="minammount "
                  className="typo-grey-16-600 text-black"
                >
                  Message
                </label>
                <div className="send-gift-container typo-grey-16-600">
                  <textarea type="text" rows={4} cols={60} />
                </div>
              </div>
            </div>
            <div className="social-btn-group">
              <button
                className="goal-title add-surprise-to-card-btn"
                onClick={() => handleCloseSurpriceGiftModal("continueshopping")}
                style={{
                  width: "58%",
                }}
              >
                Add to Cart and Continue Shopping
              </button>
              <button
                className="save-social-btn goal-title text-white all-btn"
                onClick={() => handleCloseSurpriceGiftModal("checkout")}
                style={{
                  width: "58%",
                  padding: "8px 0px",
                }}
              >
                Add to Cart and Checkout
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SendSurpriseModal;
