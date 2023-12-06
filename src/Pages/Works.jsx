import React from 'react'
import IconOne from "../img/number01.png";
import IconTwo from "../img/number02.png";
import IconThree from "../img/number03.png";

const Works = () => {
  return (
    <main className="main-content">
      {/* main page head */}
      <section className="help-center">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11 text-center">
            <div className="f-page-head">
              <h2>Our Process Unveiled</h2>
              <p>Understanding Our Methodology</p>
            </div>
          </div>
        </div>
      </section>
      {/* how its works content area  */}
      <section className="how-it-works-cnt">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11">
            {/* row 01 for card and content  */}
            <div className="row mt-2">
              {/* col-01  */}
              <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                {/* image */}
                <div className="thumbnail">
                  <img
                    src="https://buffer.com/library/content/images/2023/10/free-images.jpg"
                    className="works-thumbnail"
                    alt="profile"
                  />
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-lg-8 col-xs-12 align-self-cntr">
                {/* content */}
                <div className="work-content">
                  <div className="w-head d-flex">
                    <img className="number-icon" src={IconOne} alt="image" />
                    <h4 className="mb-0">Register an account</h4>
                  </div>
                  <div className="w-cnt mt-2 text-justify">
                    <p>In Job is the leading and longest-running online recruitmentin Turkey. We understand that job-seekers come to us notonly for a job, but for an opportunity to realize theirprofessional.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* :: row 02 for acard and content */}
            <div className="row mt-3">
              {/* col-01  */}
              <div className="col-md-8 col-sm-12 col-lg-8 col-xs-12 align-self-cntr">
                {/* content */}
                <div className="work-content">
                  <div className="w-head d-flex">
                    <img className="number-icon" src={IconTwo} alt="image" />
                    <h4 className="mb-0">Register an account</h4>
                  </div>
                  <div className="w-cnt mt-2 text-justify">
                    <p>In Job is the leading and longest-running online recruitmentin Turkey. We understand that job-seekers come to us notonly for a job, but for an opportunity to realize theirprofessional.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                {/* image */}
                <div className="thumbnail">
                  <img
                    src="https://buffer.com/library/content/images/2023/10/free-images.jpg"
                    className="works-thumbnail"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
            {/* row 03 for a card and content */}
            <div className="row mt-3">
              {/* col-01  */}
              <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                {/* image */}
                <div className="thumbnail">
                  <img
                    src="https://buffer.com/library/content/images/2023/10/free-images.jpg"
                    className="works-thumbnail"
                    alt="profile"
                  />
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-lg-8 col-xs-12 align-self-cntr">
                {/* content */}
                <div className="work-content">
                  <div className="w-head d-flex">
                    <img className="number-icon" src={IconThree} alt="image" />
                    <h4 className="mb-0">Register an account</h4>
                  </div>
                  <div className="w-cnt mt-2 text-justify">
                    <p>In Job is the leading and longest-running online recruitmentin Turkey. We understand that job-seekers come to us notonly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Works