import React from 'react'
import ImgOne from '../img/about-image01.png'
import ImgTwo from '../img/about-image02.png'


const About = () => {
  return (
    <>
      <main className="main-content">
        {/* main page head */}
        <section className="help-center">
          <div className="row justify-content-center">
            <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11 text-center">
              <div className="f-page-head">
                <h2>Elevate Your Fan Experience with Personalized Connections</h2>
                <p>Welcome to Fight Companion</p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-content">
          <div className="row justify-content-center">
            <div className="col-md-11 col-lg-11 col-sm-12 col-xs-12">
             {/* row 01 for about card and content  */}
              <div className="row mt-2">
                {/* col for image */}
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                  <img src={ImgOne} alt="image" className="abt-img"/>
                </div>
                {/* col for content */}
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                  <div className="abt-c">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur. Aliquam risus amet et amet a ut. Mattis facilisi tellus amet nisl amet nibh risus vel. Ornare non velit nibh laoreet diam nullam. Tincidunt rhoncus mattis suspendisse sollicitudin massa leo viverra. Penatibus eget velit eleifend arcu massa adipiscing aliquam vulputate. At elementum condimentum consequat fermentum.</p>
                  </div>
                </div>
              </div>
              {/* row 02 about card and content */}
              <div className="row mt-5">
                {/* col for content */}
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                  <div className="abt-c">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur. Aliquam risus amet et amet a ut. Mattis facilisi tellus amet nisl amet nibh risus vel. Ornare non velit nibh laoreet diam nullam. Tincidunt rhoncus mattis suspendisse sollicitudin massa leo viverra. Penatibus eget velit eleifend arcu massa adipiscing aliquam vulputate. At elementum condimentum consequat fermentum.</p>
                  </div>
                </div>
                {/* col for image */}
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                  <img src={ImgTwo} alt="image" className="abt-img"/>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About