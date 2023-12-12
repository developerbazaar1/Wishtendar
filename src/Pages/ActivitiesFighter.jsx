import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";

const ActivitiesFighter = () => {
  return (
    <main className="main-content">
      <section className="search-fighter-sec page-head">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            <div className="back-page">
              <Link to="/accountfighter" className="back-to-page-btn link-text">
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
              </Link>
            </div>
          </div>
        </div>
        {/* page tittle */}
        <div className="row ">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center">
            <div className="page-head">
              <div class="card-head mb-3 mt-2">
                <h5>Activities </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section for activities content */}
      <section className="acttivities-content">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11">
            <div className="tab">
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-4"
              >
                {/* tab 01 for goal tracker */}
                <Tab eventKey="home" title="Goal Tracker">
                  <div className="goal-tracker-content">
                    {/* today goal section */}
                    <div className="today-goal-section">
                      {/* service tittle  - today*/}
                      <div className="service-label mb-4">
                        <div className="line-after">
                          <span>Today</span>
                        </div>
                      </div>
                      {/* service Accordian 01*/}
                      <Accordion defaultActiveKey={["0"]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                          {/* fighter accordian header */}
                          <Accordion.Header>
                            <div className="fighter-card">
                              <img
                                // loading="lazy"
                                src="https://content.latest-hairstyles.com/wp-content/uploads/haircuts-for-black-men.jpg"
                                className="fighter-image"
                                alt="profile"
                              />
                              <div className="fighter-details">
                                <div className="fighter-name">
                                  Ronald Richards
                                </div>
                                <div className="fighter-info">
                                  [09:40 AM] - [Fighter Promotion Company]
                                </div>
                              </div>
                            </div>
                          </Accordion.Header>
                          {/* fighter accordian header */}
                          {/* accordian body start from here */}
                          <Accordion.Body>
                            <div className="fighter-card-body d-flex">
                              {/* produnct image */}
                              <div className="pr-image">
                                <img
                                  className="f-subs-thumbnail"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100%20100w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200%20200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400%20400w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800%20800w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200%201200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600%201600w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000%202000w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                                  alt="loading"
                                ></img>
                              </div>
                              {/* description of card */}
                              <div className="acc-description">
                                {/* order id */}
                                <div className="order-id">
                                  <h6>
                                    <strong>Order ID </strong>
                                    <span className="order-name">
                                      1254875869564
                                    </span>
                                  </h6>
                                </div>
                                {/* estimate cost  */}
                                <div className="c-est-card">
                                  <span className="cost-n">
                                    <small className="est">Est. </small>
                                    CA$150.00
                                  </span>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="recv-per">
                                  <p>Your goal is now 96.35% funded</p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  <Link
                                    to="#"
                                    className="x-post-btn link-text"
                                    type="btn"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 136 136"
                                    >
                                      <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                                    </svg>
                                    <span className="mx-1">Post</span>
                                  </Link>{" "}
                                  &nbsp;
                                  {/* link 02 fpr message */}
                                  <Link
                                    to="#"
                                    className="view-msg link-text"
                                    type="btn"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26"
                                      height="26"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"
                                      />
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    <span className="mx-1">Messages</span>
                                  </Link>
                                </div>
                              </div>
                              <div className="gift-status text-end">
                                <span className="goal-amt-status complete-goal">
                                  Recieved
                                </span>
                              </div>
                            </div>
                          </Accordion.Body>
                          {/* accordian body end  here */}
                        </Accordion.Item>
                      </Accordion>
                      {/* service accordian end */}
                    </div>

                    {/* yesterday goal section*/}
                    <div className="yesterday-goal-section mt-4">
                      {/* section head - yesterday */}
                      <div className="service-label mb-4">
                        <div className="line-after">
                          <span>Yesterday</span>
                        </div>
                      </div>
                      {/* service profile yesterday */}
                      {/* accordian for sent subscription */}
                      <Accordion defaultActiveKey={["0"]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                          {/* fighter accordian header */}
                          <Accordion.Header>
                            <div className="fighter-card sent-card">
                              <img
                                // loading="lazy"
                                src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
                                className="fighter-image"
                                alt="profile"
                              />
                              <div className="fighter-details">
                                <div className="fighter-name">Jassy</div>
                                <div className="fighter-info">
                                  [09:40 AM] - [Fighter Promotion Company]
                                </div>
                              </div>
                            </div>
                          </Accordion.Header>
                          {/* fighter accordian header */}
                          {/* accordian body start from here */}
                          <Accordion.Body>
                            <div className="fighter-card-body d-flex">
                              {/* produnct image */}
                              <div className="pr-image">
                                <img
                                  className="f-subs-thumbnail"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100%20100w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200%20200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400%20400w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800%20800w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200%201200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600%201600w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000%202000w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                                  alt="loading"
                                ></img>
                              </div>
                              {/* description of card */}
                              <div className="acc-description">
                                {/* sender info */}
                                <div className="sent-subs-info">
                                  <p>
                                    You are contributing to :{" "}
                                    <span>
                                      <strong>jassy</strong>
                                    </span>
                                  </p>
                                </div>
                                {/* sender info end */}
                                {/* estimate cost  */}
                                <div className="c-est-card">
                                  <span className="cost-n">
                                    <small className="est">Est. </small>
                                    CA$150.00
                                  </span>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="recv-per">
                                  <p>Your goal is now 96.35% funded</p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  {/* link 02 fpr message */}
                                  <Link
                                    to="#"
                                    className="view-msg link-text"
                                    type="btn"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26"
                                      height="26"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"
                                      />
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    <span className="mx-1">Messages</span>
                                  </Link>
                                </div>
                              </div>
                              <div className="gift-status text-end">
                                <span className="goal-amt-status active-goal">
                                  Sent
                                </span>
                              </div>
                            </div>
                          </Accordion.Body>
                          {/* accordian body end  here */}
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    {/* other dated goal section */}
                    <div className="dated-goal-section mt-4">
                      {/* section head - multiple date */}
                      <div className="service-label mb-4">
                        <div className="line-after">
                          <span>Oct 23, 2023</span>
                        </div>
                      </div>
                      {/* service profile dated */}
                      <Accordion defaultActiveKey={["0"]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                          {/* fighter accordian header */}
                          <Accordion.Header>
                            <div className="fighter-card">
                              <img
                                // loading="lazy"
                                src="https://content.latest-hairstyles.com/wp-content/uploads/haircuts-for-black-men.jpg"
                                className="fighter-image"
                                alt="profile"
                              />
                              <div className="fighter-details">
                                <div className="fighter-name">
                                  Ronald Richards
                                </div>
                                <div className="fighter-info">
                                  [09:40 AM] - [Fighter Promotion Company]
                                </div>
                              </div>
                            </div>
                          </Accordion.Header>
                          {/* fighter accordian header */}
                          {/* accordian body start from here */}
                          <Accordion.Body>
                            <div className="fighter-card-body d-flex">
                              {/* produnct image */}
                              <div className="pr-image">
                                <img
                                  className="f-subs-thumbnail"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100%20100w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200%20200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400%20400w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800%20800w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200%201200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600%201600w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000%202000w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                                  alt="loading"
                                ></img>
                              </div>
                              {/* description of card */}
                              <div className="acc-description">
                                {/* order id */}
                                <div className="order-id">
                                  <h6>
                                    <strong>Order ID </strong>
                                    <span className="order-name">
                                      1254875869564
                                    </span>
                                  </h6>
                                </div>
                                {/* estimate cost  */}
                                <div className="c-est-card">
                                  <span className="cost-n">
                                    <small className="est">Est. </small>
                                    CA$150.00
                                  </span>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="recv-per">
                                  <p>Your goal is now 96.35% funded</p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  <Link
                                    to="#"
                                    className="x-post-btn link-text"
                                    type="btn"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 136 136"
                                    >
                                      <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                                    </svg>
                                    <span className="mx-1">Post</span>
                                  </Link>{" "}
                                  &nbsp;
                                  {/* link 02 fpr message */}
                                  <Link
                                    to="#"
                                    className="view-msg link-text"
                                    type="btn"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26"
                                      height="26"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"
                                      />
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    <span className="mx-1">Messages</span>
                                  </Link>
                                </div>
                              </div>
                              <div className="gift-status text-end">
                                <span className="goal-amt-status complete-goal">
                                  Recieved
                                </span>
                              </div>
                            </div>
                          </Accordion.Body>
                          {/* accordian body end  here */}
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </Tab>
                {/* tab 02 for fighter subscription */}
                <Tab eventKey="profile" title="Subscriptions">
                  <div className="subscription-drop-container">
                    <div className="dropdown subscription-drop-down">
                      <div
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <path
                            d="M13.125 7.29182C12.7383 7.29182 12.3673 7.44547 12.0938 7.71896C11.8204 7.99245 11.6667 8.36338 11.6667 8.75016C11.6667 9.13693 11.8204 9.50786 12.0938 9.78135C12.3673 10.0548 12.7383 10.2085 13.125 10.2085C13.5118 10.2085 13.8827 10.0548 14.1562 9.78135C14.4297 9.50786 14.5834 9.13693 14.5834 8.75016C14.5834 8.36338 14.4297 7.99245 14.1562 7.71896C13.8827 7.44547 13.5118 7.29182 13.125 7.29182ZM8.99796 7.29182C9.29925 6.43792 9.85799 5.6985 10.5972 5.17547C11.3363 4.65245 12.2195 4.37158 13.125 4.37158C14.0305 4.37158 14.9137 4.65245 15.6529 5.17547C16.3921 5.6985 16.9508 6.43792 17.2521 7.29182H27.7084C28.0951 7.29182 28.4661 7.44547 28.7396 7.71896C29.0131 7.99245 29.1667 8.36338 29.1667 8.75016C29.1667 9.13693 29.0131 9.50786 28.7396 9.78135C28.4661 10.0548 28.0951 10.2085 27.7084 10.2085H17.2521C16.9508 11.0624 16.3921 11.8018 15.6529 12.3248C14.9137 12.8479 14.0305 13.1287 13.125 13.1287C12.2195 13.1287 11.3363 12.8479 10.5972 12.3248C9.85799 11.8018 9.29925 11.0624 8.99796 10.2085H7.29171C6.90493 10.2085 6.534 10.0548 6.26051 9.78135C5.98702 9.50786 5.83337 9.13693 5.83337 8.75016C5.83337 8.36338 5.98702 7.99245 6.26051 7.71896C6.534 7.44547 6.90493 7.29182 7.29171 7.29182H8.99796ZM21.875 16.0418C21.4883 16.0418 21.1173 16.1955 20.8438 16.469C20.5704 16.7424 20.4167 17.1134 20.4167 17.5002C20.4167 17.8869 20.5704 18.2579 20.8438 18.5314C21.1173 18.8048 21.4883 18.9585 21.875 18.9585C22.2618 18.9585 22.6327 18.8048 22.9062 18.5314C23.1797 18.2579 23.3334 17.8869 23.3334 17.5002C23.3334 17.1134 23.1797 16.7424 22.9062 16.469C22.6327 16.1955 22.2618 16.0418 21.875 16.0418ZM17.748 16.0418C18.0493 15.1879 18.608 14.4485 19.3472 13.9255C20.0863 13.4025 20.9695 13.1216 21.875 13.1216C22.7805 13.1216 23.6637 13.4025 24.4029 13.9255C25.1421 14.4485 25.7008 15.1879 26.0021 16.0418H27.7084C28.0951 16.0418 28.4661 16.1955 28.7396 16.469C29.0131 16.7424 29.1667 17.1134 29.1667 17.5002C29.1667 17.8869 29.0131 18.2579 28.7396 18.5314C28.4661 18.8048 28.0951 18.9585 27.7084 18.9585H26.0021C25.7008 19.8124 25.1421 20.5518 24.4029 21.0748C23.6637 21.5979 22.7805 21.8787 21.875 21.8787C20.9695 21.8787 20.0863 21.5979 19.3472 21.0748C18.608 20.5518 18.0493 19.8124 17.748 18.9585H7.29171C6.90493 18.9585 6.534 18.8048 6.26051 18.5314C5.98702 18.2579 5.83337 17.8869 5.83337 17.5002C5.83337 17.1134 5.98702 16.7424 6.26051 16.469C6.534 16.1955 6.90493 16.0418 7.29171 16.0418H17.748ZM13.125 24.7918C12.7383 24.7918 12.3673 24.9455 12.0938 25.219C11.8204 25.4924 11.6667 25.8634 11.6667 26.2502C11.6667 26.6369 11.8204 27.0079 12.0938 27.2814C12.3673 27.5548 12.7383 27.7085 13.125 27.7085C13.5118 27.7085 13.8827 27.5548 14.1562 27.2814C14.4297 27.0079 14.5834 26.6369 14.5834 26.2502C14.5834 25.8634 14.4297 25.4924 14.1562 25.219C13.8827 24.9455 13.5118 24.7918 13.125 24.7918ZM8.99796 24.7918C9.29925 23.9379 9.85799 23.1985 10.5972 22.6755C11.3363 22.1525 12.2195 21.8716 13.125 21.8716C14.0305 21.8716 14.9137 22.1525 15.6529 22.6755C16.3921 23.1985 16.9508 23.9379 17.2521 24.7918H27.7084C28.0951 24.7918 28.4661 24.9455 28.7396 25.219C29.0131 25.4924 29.1667 25.8634 29.1667 26.2502C29.1667 26.6369 29.0131 27.0079 28.7396 27.2814C28.4661 27.5548 28.0951 27.7085 27.7084 27.7085H17.2521C16.9508 28.5624 16.3921 29.3018 15.6529 29.8248C14.9137 30.3479 14.0305 30.6287 13.125 30.6287C12.2195 30.6287 11.3363 30.3479 10.5972 29.8248C9.85799 29.3018 9.29925 28.5624 8.99796 27.7085H7.29171C6.90493 27.7085 6.534 27.5548 6.26051 27.2814C5.98702 27.0079 5.83337 26.6369 5.83337 26.2502C5.83337 25.8634 5.98702 25.4924 6.26051 25.219C6.534 24.9455 6.90493 24.7918 7.29171 24.7918H8.99796Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <ul className="dropdown-menu subscription-drop-down-list">
                        <li>
                          <a className="dropdown-item" href="#">
                            All
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Sending
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Receiving
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="goal-subscription-content">
                    {/* today goal section */}
                    <div className="today-goal-section">
                      {/* service head  - today*/}
                      <div className="service-label mb-4">
                        <div className="line-after">
                          <span>Today</span>
                        </div>
                      </div>
                      {/* service profile */}
                      <Accordion defaultActiveKey={["22"]} alwaysOpen>
                        <Accordion.Item eventKey="22">
                          {/* fighter accordian header */}
                          <Accordion.Header>
                            <div className="fighter-card">
                              <img
                                // loading="lazy"
                                src="https://img.freepik.com/free-photo/beautiful-young-woman-posing_144627-30511.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais"
                                className="fighter-image"
                                alt="profile"
                              />
                              <div className="fighter-details">
                                <div className="fighter-name">
                                  Ronald Richards
                                </div>
                                <div className="fighter-info">
                                  [10:40 AM] - [Daily Coffee]
                                </div>
                              </div>
                            </div>
                          </Accordion.Header>
                          {/* fighter accordian header */}
                          {/* accordian body start from here */}
                          <Accordion.Body>
                            <div className="fighter-card-body d-flex">
                              {/* produnct image */}
                              <div className="pr-image">
                                <img
                                  className="f-subs-thumbnail"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100%20100w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200%20200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400%20400w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800%20800w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200%201200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600%201600w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000%202000w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                                  alt="prImage"
                                ></img>
                              </div>
                              {/* description of card */}
                              <div className="acc-description">
                                {/* order id */}
                                <div className="order-id">
                                  <h6>
                                    <strong>Order ID </strong>
                                    <span className="order-name">
                                      1254875869564
                                    </span>
                                  </h6>
                                </div>
                                {/* estimate cost  */}
                                <div className="c-est-card">
                                  <span className="cost-n">
                                    <small className="est">Est. </small>
                                    CA$150.00
                                  </span>
                                </div>
                                <div className="subs-type mt-1">
                                  <h6>
                                    <strong>Subscription</strong>{" "}
                                    <span class="badge rounded-pill text-dark bg-light">
                                      Daily
                                    </span>
                                  </h6>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="next-pay">
                                  <p>
                                    Next payment expected by Mon: Nov 27 2023
                                  </p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  <Link
                                    to="#"
                                    className="x-post-btn link-text"
                                    type="btn"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 136 136"
                                    >
                                      <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                                    </svg>
                                    <span className="mx-1">Post</span>
                                  </Link>{" "}
                                  &nbsp;
                                  {/* link 02 fpr message */}
                                  <Link
                                    to="#"
                                    className="view-msg link-text"
                                    type="btn"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26"
                                      height="26"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"
                                      />
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    <span className="mx-1">Messages</span>
                                  </Link>
                                </div>
                              </div>
                              <div className="gift-status text-end">
                                <span className="goal-amt-status complete-goal">
                                  Recieved
                                </span>
                              </div>
                            </div>
                          </Accordion.Body>
                          {/* accordian body end  here */}
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    {/* yesterday goal subscription section*/}
                    <div className="yesterday-goal-section mt-4">
                      {/* section head - yesterday */}
                      <div className="service-label mb-4">
                        <div className="line-after">
                          <span>Yesterday</span>
                        </div>
                      </div>
                      {/* service profile yesterday */}
                      <Accordion defaultActiveKey={["222"]} alwaysOpen>
                        <Accordion.Item eventKey="222">
                          {/* fighter accordian header */}
                          <Accordion.Header>
                            <div className="fighter-card">
                              <img
                                // loading="lazy"
                                src="https://img.freepik.com/free-photo/beautiful-young-woman-posing_144627-30511.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais"
                                className="fighter-image"
                                alt="profile"
                              />
                              <div className="fighter-details">
                                <div className="fighter-name">
                                  Ronald Richards
                                </div>
                                <div className="fighter-info">
                                  [10:40 AM] - [Daily Coffee]
                                </div>
                              </div>
                            </div>
                          </Accordion.Header>
                          {/* fighter accordian header */}
                          {/* accordian body start from here */}
                          <Accordion.Body>
                            <div className="fighter-card-body d-flex">
                              {/* produnct image */}
                              <div className="pr-image">
                                <img
                                  className="f-subs-thumbnail"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100%20100w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200%20200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400%20400w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800%20800w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200%201200w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600%201600w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000%202000w,%20https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                                  alt="thumbnail"
                                ></img>
                              </div>
                              {/* description of card */}
                              <div className="acc-description">
                                {/* order id */}
                                <div className="order-id">
                                  <h6>
                                    <strong>Order ID </strong>
                                    <span className="order-name">
                                      1254875869564
                                    </span>
                                  </h6>
                                </div>
                                {/* estimate cost  */}
                                <div className="c-est-card">
                                  <span className="cost-n">
                                    <small className="est">Est. </small>
                                    CA$150.00
                                  </span>
                                </div>
                                <div className="subs-type mt-1">
                                  <h6>
                                    <strong>Subscription</strong>{" "}
                                    <span class="badge rounded-pill text-dark bg-light">
                                      Daily
                                    </span>
                                  </h6>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="next-pay">
                                  <p>
                                    Next payment expected by Mon: Nov 27 2023
                                  </p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  <Link
                                    to="#"
                                    className="x-post-btn link-text"
                                    type="btn"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 136 136"
                                    >
                                      <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                                    </svg>
                                    <span className="mx-1">Post</span>
                                  </Link>{" "}
                                  &nbsp;
                                  {/* link 02 fpr message */}
                                  <Link
                                    to="#"
                                    className="view-msg link-text"
                                    type="btn"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26"
                                      height="26"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"
                                      />
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    <span className="mx-1">Messages</span>
                                  </Link>
                                </div>
                              </div>
                              <div className="gift-status text-end">
                                <span className="goal-amt-status complete-goal">
                                  Recieved
                                </span>
                              </div>
                            </div>
                          </Accordion.Body>
                          {/* accordian body end  here */}
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    {/* other dated goal subscription section */}
                    <div className="dated-goal-section mt-4">
                      {/* section head - multiple date */}
                      <div className="service-label mb-4">
                        <div className="line-after">
                          <span>Oct 23, 2023</span>
                        </div>
                      </div>
                      {/* service profile dated added */}
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActivitiesFighter;
