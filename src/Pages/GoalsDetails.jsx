import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Gloves from "../img/product-gloves.png";
// import { ProgressBar } from "react-bootstrap";
// import LocaProgressBar from "../components/ProgressBar";

const GoalsDetails = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="main-content">
      <section className="search-fighter-sec page-head">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            <div className="back-page">
              <div onClick={goBack} className="back-to-page-btn link-text">
                <svg
                  className="mb-1 mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.7273 3.68676C12.8176 3.59129 12.8881 3.47898 12.9349 3.35626C12.9817 3.23353 13.0039 3.10278 13.0002 2.97148C12.9965 2.84017 12.9669 2.71089 12.9133 2.591C12.8596 2.47112 12.7828 2.36298 12.6873 2.27276C12.5919 2.18254 12.4796 2.11201 12.3568 2.0652C12.2341 2.01838 12.1034 1.9962 11.9721 1.99991C11.8408 2.00363 11.7115 2.03317 11.5916 2.08684C11.4717 2.14052 11.3636 2.21729 11.2733 2.31276L2.77334 11.3128C2.59781 11.4984 2.5 11.7442 2.5 11.9998C2.5 12.2553 2.59781 12.5011 2.77334 12.6868L11.2733 21.6878C11.363 21.7853 11.4711 21.8641 11.5914 21.9195C11.7117 21.975 11.8419 22.0059 11.9743 22.0106C12.1067 22.0153 12.2387 21.9937 12.3626 21.9469C12.4866 21.9002 12.6 21.8293 12.6963 21.7383C12.7927 21.6474 12.8699 21.5382 12.9237 21.4171C12.9775 21.296 13.0067 21.1655 13.0095 21.033C13.0124 20.9006 12.989 20.7689 12.9405 20.6456C12.8921 20.5223 12.8196 20.4098 12.7273 20.3148L4.87534 11.9998L12.7273 3.68676Z"
                    fill="black"
                  />
                </svg>
                Back
              </div>
            </div>
          </div>
        </div>
        {/* page tittle */}
        <div className="row ">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center">
            <div className="page-head">
              <div className="card-head mb-3 mt-2">
                <h5>Gloves</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="goal-details-container">
          <div className="goal-details-container-sub">
            <img
              alt="loading"
              loading="lazy"
              srcSet="
            https://cdn.builder.io/api/v1/image/assets/TEMP/f22e6b993513ba97c00195f354d5981e73fa18350347ddf8c18432047532091e?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100   100w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/f22e6b993513ba97c00195f354d5981e73fa18350347ddf8c18432047532091e?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200   200w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/f22e6b993513ba97c00195f354d5981e73fa18350347ddf8c18432047532091e?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400   400w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/f22e6b993513ba97c00195f354d5981e73fa18350347ddf8c18432047532091e?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800   800w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/f22e6b993513ba97c00195f354d5981e73fa18350347ddf8c18432047532091e?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200 1200w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/f22e6b993513ba97c00195f354d5981e73fa18350347ddf8c18432047532091e?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600 1600w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/f22e6b993513ba97c00195f354d5981e73fa18350347ddf8c18432047532091e?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000 2000w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/f22e6b993513ba97c00195f354d5981e73fa18350347ddf8c18432047532091e?apiKey=a05c6109e97c4bde98e757ca99d37c45&
          "
              className="goal-detial-img"
            />
            <div className="divii-3">
              <div className="divii-4"></div>
            </div>
            <div className="divii-5">
              <div className="divii-6">
                <div className="divii-7">25%</div>
                <div className="divii-8">Granted</div>
              </div>
              <div className="divii-9">
                <div className="divii-10">Est.</div>
                <div className="divii-11">CA $273.22</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/94203ab5c1b661a8ffc6efe0c835f37ccb3286c4d62fab45116c5b5a0dc10118?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                  className="goal-detial-img-2"
                  alt="loading"
                />
              </div>
            </div>
            <div className="divii-12">Amount: CA$50.00</div>
            <Link onClick={goBack} className="divii-13">
              Add to Cart and Continue Shopping
            </Link>
            <Link to="/cartfighter" className="divii-14">
              Add to Cart and Checkout
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoalsDetails;
