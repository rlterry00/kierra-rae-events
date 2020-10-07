import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/image6.jpg';
import pic1 from '../assets/images/luigi-pozzoli-34Xicn82lY4-unsplash.jpg';
import pic2 from '../assets/images/jess-bailey-94Ld_MtIUf0-unsplash.jpg';
import pic3 from '../assets/images/brandon-jacoby-JH3R3JP2w4c-unsplash.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <div className="head-pic d-flex justify-content-center align-items-center ">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="intro-button mx-auto">
            <a className="btn btn-primary btn-xl" href="#about">
              Learn More!
            </a>
          </div>
        </div>
      </div>
    </div>
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro" id="about">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt="Kierra Rae Profile"
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">About Me</span>
              <span className="section-heading-lower">Kierra Rae</span>
            </h2>
            <p className="mb-3">
              Kierra Rae Events & Consulting, LLC, is a remote, premier event
              company that offers event planning and consulting services. The
              Owner & Event Planner Kierra Bonner has over 10 years of
              experience in the catering and event industry. With experience in
              the North Carolina market, Kierra has now expanded her business in
              Houston and surrounding areas. She brings her vast amount of
              knowledge and experience to every aspect of planning for her
              clients. Paired with her impeccable customer service, Kierra is
              committed to making her clients experience top notch!
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/#">
                Contact Me Today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="site-background container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">My</span>
              <span className="section-heading-lower">Services</span>
            </h2>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4 avatar-container">
            <img className="avatar" src={pic1} alt="Events" />
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower">Events</span>
            </h2>
          </div>
          <div className="col-md-4 avatar-container">
            <img className="avatar" src={pic2} alt="Events" />
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower">Consulting</span>
            </h2>
          </div>
          <div className="col-md-4 avatar-container">
            <img className="avatar" src={pic3} alt="Events" />
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower">Community</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Our Promise</span>
                <span className="section-heading-lower">To You</span>
              </h2>
              <p className="mb-0">
                When you walk into our shop to start your day, we are dedicated
                to providing you with friendly service, a welcoming atmosphere,
                and above all else, excellent products made with the highest
                quality ingredients. If you are not satisfied, please let us
                know and we will do whatever we can to make things right!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
