import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Layout from '../components/Layout';
import ContactLottie from '../components/ContactLottie';
import LightBulbLottie from '../components/LightBulb';

import intro from '../assets/images/image6.jpg';
import pic1 from '../assets/images/luigi-pozzoli-34Xicn82lY4-unsplash.jpg';
import pic2 from '../assets/images/jess-bailey-94Ld_MtIUf0-unsplash.jpg';
import pic3 from '../assets/images/brandon-jacoby-JH3R3JP2w4c-unsplash.jpg';
import pic4 from '../assets/images/image7.jpg';
import pic5 from '../assets/images/stil-zv5QSKaP8G8-unsplash.jpg';
import pic6 from '../assets/images/image8.png';
import flyer from '../assets/images/Official Flyer- Night Under the Stars-1.png';

const IndexPage = () => (
  <Layout activeLink="home">
    <div className="head-pic d-flex justify-content-center align-items-center effect2">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="intro-button mx-auto">
            <a className="btn btn-primary btn-lg btn-light" href="#about">
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
            className="intro-img img-fluid mb-3 mb-lg-0 rounded effect1"
            src={intro}
            alt="Kierra Rae Profile"
          />
          <div
            className="intro-text left-0 text-center bg-faded p-5 rounded"
            style={{ marginTop: 50 }}
          >
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
              <a className="btn btn-primary btn-xl btn-light" href="#contact">
                Contact Me Today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section id="upcoming">
      <div className="site-background bg-faded container">
        <div className="content" style={{ padding: 50 }}>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Upcoming</span>
                <span className="section-heading-lower">Events</span>
              </h2>
              <p className="mb-3">(Press flyer to zoom in)</p>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <div>
              <h2 className="section-heading mb-4">
                <Zoom>
                  <img
                    className="intro-img img-fluid mb-3 mb-lg-0 rounded effect1"
                    src={flyer}
                    alt="Event Flyer"
                    width={600}
                  />
                </Zoom>
              </h2>
              <div className="intro-button mx-auto">
                <a
                  className="btn btn-primary btn-xl btn-light"
                  href="https://www.eventbrite.com/e/a-night-under-the-stars-chefs-table-experience-tickets-124779311279"
                >
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <section id="services">
      <div className="site-background container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4" style={{ marginTop: 80 }}>
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">My</span>
              <span className="section-heading-lower">Services</span>
            </h2>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4 avatar-container">
            <a href="#events">
              <img className="avatar effect2" src={pic1} alt="Events" />
            </a>
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower">Events</span>
            </h2>
          </div>
          <div className="col-md-4 avatar-container">
            <a href="#consulting">
              <img className="avatar effect2" src={pic2} alt="Consulting" />
            </a>
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower">Consulting</span>
            </h2>
          </div>
          <div className="col-md-4 avatar-container">
            <a href="#community">
              <img className="avatar effect2" src={pic3} alt="Community" />
            </a>
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower">Community</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta effect2" id="events">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <img className="avatar effect2" src={pic4} alt="Events" />
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Event</span>
                <span className="section-heading-lower">Services</span>
              </h2>
              <p className="mb-0">
                Event Planning for Corporate Events, Social Events, Fundraisers/
                Charity Functions, Galas, Banquets, Private Dinners, Baby
                Showers, Engagement Parties, and Small Weddings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section cta2 effect2" id="consulting">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <img className="avatar effect2" src={pic5} alt="Events" />
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Consulting</span>
                <span className="section-heading-lower">Services</span>
              </h2>
              <p className="mb-0">
                Event and Catering Consulting, Marketing, Social Media and
                Content Management, Catering Sales Training, Business
                Development in Catering Market, and CRM Training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="cta3 effect2" id="community">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <img className="avatar effect2" src={pic6} alt="Events" />
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Community</span>
                <span className="section-heading-lower">
                  A Seat at the Table
                </span>
              </h2>
              <p className="mb-0">
                Kierra Rae Events is committed to community outreach. Kierra Rae
                Events will plan quarterly Chef’s Table experiences. “A Seat at
                the Table” will travel around the country highlighting local
                chefs while also benefiting a non-profit of our choice that
                aligns with our mission and company values.
              </p>
              <br></br>
              <p className="mb-0">
                Kierra Rae Panel Events will engage in panel/think piece
                discussions which touches on topics surrounding community
                issues. These panel events will take place in various cities
                enlisting the knowledge of prominent black women who are leading
                forefronts in their communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="contact" id="contact">
      <div class="container contact-form">
        <div class="contact-image" style={{ marginTop: 20 }}>
          <div style={{ width: 150, height: 150 }}>
            <ContactLottie />
          </div>
        </div>
        <form method="post" action="https://formspree.io/f/mwkwvdzq">
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">
              I Would Love to Hear from You!
            </span>
            <span className="section-heading-lower">Leave an Inquiry</span>
          </h2>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="txtName"
                  class="form-control effect2"
                  placeholder="Your Name *"
                  required
                />
                <div class="invalid-feedback">Must use a valid name.</div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="txtEmail"
                  class="form-control effect2"
                  placeholder="Your Email *"
                  required
                />
                <div class="invalid-feedback">Must use a valid e-mail.</div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  class="form-control effect2"
                  placeholder="Your Phone Number *"
                />
                <div class="invalid-feedback">
                  Must use a vaild phone number.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="txtMsg"
                  class="form-control effect2"
                  placeholder="Your Message *"
                  style={{ width: '100%', height: 150 }}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div class="form-group">
            <input
              type="submit"
              name="btnSubmit"
              class="btn btn-primary btn-light"
              value="Send Message"
              required
            />
          </div>
        </form>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
