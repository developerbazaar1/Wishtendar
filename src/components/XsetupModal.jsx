import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import TwiterLinkImg from "../img/lux_tweet.png";
const stepTitles = ["Link Twitter", "Tweet Settings"];
const XsetupModal = ({ showTwiterModaldModal, setshowTwiterModaldModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const numSteps = stepTitles.length;

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep % numSteps) + 1);
    if (currentStep === 2) {
      handleClosePasswordModal();
    }
  };

  const steps = Array.from({ length: numSteps }, (_, index) => index + 1);
  // const [confrimmessage, setconfrimmessage] = useState(false);
  const handleClosePasswordModal = () => {
    setshowTwiterModaldModal(false);
    // setconfrimmessage(false);
  };

  return (
    <>
      <div>
        <Modal
          show={showTwiterModaldModal}
          onHide={handleClosePasswordModal}
          id="modal-container"
          centered
        >
          <div>
            <h5 className="sec-head">Twitter Integration</h5>
            {/* steps sections  */}
            <div className="step-container">
              <div className="stepper-horizontal" id="stepper1">
                {steps.map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`step ${
                      currentStep === stepNum ? "editing" : ""
                    } ${currentStep > stepNum ? "done" : ""}`}
                  >
                    <div className="step-circle">
                      <span className="span">{stepNum}</span>
                    </div>
                    <div className="step-title"> {stepTitles[stepNum - 1]}</div>
                    <div className="step-bar-left"></div>
                    <div className="step-bar-right"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* step one 1 */}
            <div className="step-body">
              {/* step heading */}
              <div className="step-heading typeo-32-38">
                Step 1: Link Twitter
              </div>
              {/* step content */}
              <p className="step-one-info typeo-18-24-u mb-0">
                Set Up Twitter To Auto Tweet When You Receive A Gift.
              </p>

              <div className="step-one-sub-body">
                <img src={TwiterLinkImg} alt="loading" />
              </div>
              <div className="social-btn-group">
                <button
                  className="save-social-btn goal-title text-white all-btn"
                  onClick={nextStep}
                  style={{
                    width: "51%",
                  }}
                >
                  Link Twitter
                </button>
              </div>
            </div>
          </div>
          {/* account delection succes modal data  */}
          {/* {confrimmessage && (
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
          )} */}
        </Modal>
      </div>
    </>
  );
};

export default XsetupModal;
