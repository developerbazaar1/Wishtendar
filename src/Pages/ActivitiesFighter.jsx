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
                                  alt="image"
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
                                 <span className="cost-n"><small className="est">Est. </small>CA$150.00</span>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="recv-per">
                                  <p>Your goal is now 96.35% funded</p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  <Link to="#" className="x-post-btn link-text" type="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 136 136"><path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/></svg>
                                  <span className="mx-1">Post</span>
                                  </Link> &nbsp;
                                  {/* link 02 fpr message */}
                                  <Link to="#" className="view-msg link-text" type="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"/><path fill="currentColor" fill-rule="evenodd" d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z" clip-rule="evenodd"/></svg>
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
                                <div className="fighter-name">
                                  Jassy
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
                                  alt="image"
                                ></img>
                              </div>
                              {/* description of card */}
                              <div className="acc-description">
                                {/* sender info */}
                                <div className="sent-subs-info">
                                  <p>You are contributing to : <span ><strong>jassy</strong></span></p>
                                </div>
                                {/* sender info end */}
                                {/* estimate cost  */}
                                <div className="c-est-card">
                                 <span className="cost-n"><small className="est">Est. </small>CA$150.00</span>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="recv-per">
                                  <p>Your goal is now 96.35% funded</p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  {/* link 02 fpr message */}
                                  <Link to="#" className="view-msg link-text" type="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"/><path fill="currentColor" fill-rule="evenodd" d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z" clip-rule="evenodd"/></svg>
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
                                  alt="image"
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
                                 <span className="cost-n"><small className="est">Est. </small>CA$150.00</span>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="recv-per">
                                  <p>Your goal is now 96.35% funded</p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  <Link to="#" className="x-post-btn link-text" type="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 136 136"><path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/></svg>
                                  <span className="mx-1">Post</span>
                                  </Link> &nbsp;
                                  {/* link 02 fpr message */}
                                  <Link to="#" className="view-msg link-text" type="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"/><path fill="currentColor" fill-rule="evenodd" d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z" clip-rule="evenodd"/></svg>
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
                                  alt="image"
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
                                 <span className="cost-n"><small className="est">Est. </small>CA$150.00</span>
                                </div>
                                <div className="subs-type mt-1">
                                <h6><strong>Subscription</strong> <span class="badge rounded-pill text-dark bg-light">Daily</span></h6>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="next-pay">
                                  <p>Next payment expected by Mon: Nov 27 2023</p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  <Link to="#" className="x-post-btn link-text" type="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 136 136"><path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/></svg>
                                  <span className="mx-1">Post</span>
                                  </Link> &nbsp;
                                  {/* link 02 fpr message */}
                                  <Link to="#" className="view-msg link-text" type="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"/><path fill="currentColor" fill-rule="evenodd" d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z" clip-rule="evenodd"/></svg>
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
                                  alt="image"
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
                                 <span className="cost-n"><small className="est">Est. </small>CA$150.00</span>
                                </div>
                                <div className="subs-type mt-1">
                                <h6><strong>Subscription</strong> <span class="badge rounded-pill text-dark bg-light">Daily</span></h6>
                                </div>
                                {/* recieve amount precentage */}
                                <div className="next-pay">
                                  <p>Next payment expected by Mon: Nov 27 2023</p>
                                </div>
                                {/* post on x  */}
                                <div className="x-post-btn d-flex">
                                  <Link to="#" className="x-post-btn link-text" type="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 136 136"><path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/></svg>
                                  <span className="mx-1">Post</span>
                                  </Link> &nbsp;
                                  {/* link 02 fpr message */}
                                  <Link to="#" className="view-msg link-text" type="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"/><path fill="currentColor" fill-rule="evenodd" d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252L16.1 4.593ZM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42l.194-.014Z" clip-rule="evenodd"/></svg>
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
