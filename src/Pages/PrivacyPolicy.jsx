import React from 'react'

const PrivacyPolicy = () => {
  return (
    <main className="main-content">
      {/* main page head */}
      <section className="help-center">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11 text-center">
            <div className="f-page-head">
              <h2>Your Privacy Matters</h2>
              <p>Exploring Our Commitment to Protecting Your Information</p>
            </div>
          </div>
        </div>
      </section>
      {/* privacy policy content area */}
      <section className="policy-content">
        <div className="row justify-content-center">
          <div className="col-md-11 col-lg-11 col-sm-12 col-xs-12">
            <div className="main-para">
              <p>Welcome to [Your Website]! We are committed to protecting your privacy and ensuring a secure online experience. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information. By accessing or using our website, you consent to the terms outlined in this policy.</p>
            </div>
            {/* main description area */}
            <div className="main-policy mt-4">
              <div className="main-policy-content listing mb-4">
                <h4>Personal Information:</h4>
                <ul>
                  <li><p className="mb-0 mt-0">Name</p></li>
                  <li><p className="mb-0 mt-0">Email Address</p></li>
                  <li ><p className="mt-0 mb-0">Contact information</p></li>
                </ul>
              </div>
              <div className="main-policy-content listing mb-4">
                <h4>Non-Personal Information:</h4>
                <ul>
                  <li><p className="mt-0 mb-0">Browser type</p></li>
                  <li><p className="mt-0 mb-0">IP address</p></li>
                  <li><p className="mt-0 mb-0">Operating system</p></li>
                  <li><p className="mt-0 mb-0">Anonymous usage data</p></li>
                </ul>
              </div>
              <div className="main-policy-content listing mb-4">
                <h4>How We Use Your Information:</h4>
                <p>We may use your information for the following purposes:</p>
                <ul>
                  <li><p className="mt-0 mb-0">Personalize your experience on our website</p></li>
                  <li><p className="mt-0 mb-0">Improve our website based on your feedback</p></li>
                  <li><p className="mt-0 mb-0">Send periodic emails regarding our products and services</p></li>
                </ul>
              </div>
              <div className="main-policy-content listing mb-4">
                <h4>Information Protection:</h4>
                <p>We employ industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.</p>
              </div>
              <div className="main-policy-content listing mb-4">
                <h4>Cookies:</h4>
                <p>We use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can disable cookies in your browser settings, but this may affect certain functionalities.</p>
              </div>
              <div className="main-policy-content listing mb-4">
                <h4>Third-Party Links:</h4>
                <p>Our website may contain links to third-party websites. We have no control over their privacy practices and are not responsible for the content or activities on those sites. We encourage you to review the privacy policies of these third parties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy