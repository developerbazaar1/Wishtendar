import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <main className="main-content">
      {/* main page head */}
      <section className="help-center">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11 text-center">
            <div className="f-page-head">
              <h2>Frequently Asked Questions</h2>
              <p>Your Queries Addressed</p>
            </div>
          </div>
        </div>
      </section>
      {/* section for faq content */}
      <section className="faq-cnt">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-lg-11 col-xs-12">
            {/* accordian for faq */}
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0" className="cst-acc">
                <Accordion.Header>How do I create an account?</Accordion.Header>
                <Accordion.Body>
                Learn the steps to set up your account and start exploring our platform.
                </Accordion.Body>
              </Accordion.Item>
              {/* accodian item 02 */}
              <Accordion.Item eventKey="1" className="mt-4 cst-acc">
                <Accordion.Header>What are the system requirements?</Accordion.Header>
                <Accordion.Body>
                 Find out the specification needed to ensure optimal performance
                </Accordion.Body>
              </Accordion.Item>
              {/* accordian item 03 */}
              <Accordion.Item eventKey="2" className="mt-4 cst-acc">
                <Accordion.Header>What are the key features of [Your Product/Service]?</Accordion.Header>
                <Accordion.Body>
                  Discover the core functionalities that make our product/service unique.
                </Accordion.Body>
              </Accordion.Item>
              {/* accordian item 04 */}
              <Accordion.Item eventKey="3" className="mt-4 cst-acc">
                <Accordion.Header>How do I create an account?</Accordion.Header>
                <Accordion.Body>
                  Learn the steps to setup your account and start exploring our platform.
                </Accordion.Body>
              </Accordion.Item>
              {/* accordian item 05 */}
              <Accordion.Item eventKey="4" className="mt-4 cst-acc">
                <Accordion.Header>What are the system requirements?</Accordion.Header>
                <Accordion.Body>
                  Find out the specification needed to ensure optimal performance.
                </Accordion.Body>
              </Accordion.Item>
              {/* accordian item 06 */}
              <Accordion.Item eventKey="5" className="mt-4 cst-acc">
                <Accordion.Header>What are the key features of Product?</Accordion.Header>
                <Accordion.Body>
                  Discover the core functionalities that make our service/product unique.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Faq