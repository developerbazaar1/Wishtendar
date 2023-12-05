import React from 'react'

const CookiePolicy = () => {
  return (
    <main className="main-content">
      {/* main page head */}
      <section className="help-center">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11 text-center">
            <div className="f-page-head">
              <h2>Understanding Our Use of Cookies to Enhance Your Experience</h2>
              <p>Exploring Our Commitment to Protecting Your Information</p>
            </div>
          </div>
        </div>
      </section>
      {/* cookie policy content */}
      <section className="cookie-policy mt-3">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11">
            <div className="cookie-content">
              <h3 className="mb-2">Cookie Policy:</h3>
              <p>At [Your Company], we utilize cookies to enhance your browsing experience. Cookies are small text files stored on your device that assist us in understanding how you interact with our website. These files enable personalized content, improve site functionality, and analyze traffic patterns.</p>
              <p className="mb-0">We use both session and persistent cookies. Session cookies are temporary and expire when you close your browser, while persistent cookies remain on your device for an extended period. Our cookies do not collect personal information unless explicitly provided.</p>
              <p className="mt-0">By using our website, you consent to the use of cookies. You can manage cookie preferences through your browser settings. However, please note that restricting cookies may impact the functionality of the site.</p>
              <p>This Cookie Policy is subject to periodic updates, and any changes will be reflected on this page. For more information about our data practices, please refer to our Privacy Policy.</p>
              <p>Thank you for choosing [Your Company].</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CookiePolicy