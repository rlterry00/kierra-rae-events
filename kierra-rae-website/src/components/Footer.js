import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import LightBulbLottie from '../components/LightBulb';

export default function Footer() {
  return (
    <footer className="footer text-center py-5">
      <div className="container">
        <div style={{ display: 'inline-block' }}>
          <a
            href="https://www.facebook.com/Kierraraeevents"
            className="youtube social"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ marginRight: 10 }}
            />
          </a>
          <a
            href="https://www.instagram.com/kierraraeevents/"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <p
          className="m-0 large"
          style={{ color: 'pink', fontFamily: 'Raleway' }}
        >
          Email : kierraraeevents@gmail.com
        </p>
        <p
          className="m-0 large"
          style={{ color: 'pink', fontFamily: 'Raleway' }}
        >
          Telephone: 919-802-1870
        </p>
        <p
          className="m-0 small"
          style={{ color: 'white', fontFamily: 'Raleway' }}
        >
          Copyright &copy; Kierra Rae Events & Consulting, LLC 2020
        </p>
        <div
          style={{
            width: '100%',
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 50,
              height: 50,
              marginBottom: 17,
            }}
          >
            <LightBulbLottie style={{ width: 50, height: 50 }} />
          </div>
          <a
            href="https://www.theblacklightgroup.org"
            className="youtube social"
          >
            <p
              className="m-0 small"
              style={{ color: 'white', fontFamily: 'Raleway' }}
            >
              This site is powered by The Blacklight Group.
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
