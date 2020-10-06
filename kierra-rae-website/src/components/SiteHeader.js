import React from 'react';
import config from '../../config';
import logo from '../assets/images/image4.png';
export default function SiteHeader() {
  return (
    <div className="site-background container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <img
            className="logo"
            src={logo}
            alt="Kierra Rae Events Logo"
          />
          {/* <h1 className="site-heading text-center text-white d-none d-lg-block">
            <span className="site-heading-upper text-primary mb-3">
              {config.subHeading}
            </span>
            <span className="site-heading-lower">{config.heading}</span>
          </h1> */}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
