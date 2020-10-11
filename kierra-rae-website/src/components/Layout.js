import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/business-casual.scss';
import Footer from './Footer';
import SiteHeader from './SiteHeader';
import Header from './Header';

class Layout extends Component {
  render() {
    const {
      children,
      noHeader,
      noFooter,
      noSiteHeader,
      activeLink,
    } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    'Kierra Rae Events & Consulting, LLC is a remote, premier event company that offers event planning and consulting services.',
                },
                {
                  name: 'keywords',
                  content:
                    'food, events, celebration, party, social, experience, community, consulting',
                },
                {
                  name: 'image',
                  content:
                    'https://www.kierraraeevents.com/static/image7-2d63f338e507832fafb5dcb76b798dc8.jpg',
                },
              ]}
            >
              <html lang="en" />
              {/* <!-- Open Graph / Facebook --> */}
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://www.kierraraeevents.com"
              />
              <meta
                property="og:title"
                content="Kierra Rae Events & Consulting, LLC"
              />
              <meta
                property="og:description"
                content="Kierra Rae Events & Consulting, LLC is a remote, premier event company that offers event planning and consulting services."
              />
              <meta
                property="og:image"
                content="https://www.kierraraeevents.com/static/image7-2d63f338e507832fafb5dcb76b798dc8.jpg"
              />
              {/* <!-- Twitter --> */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta
                property="twitter:url"
                content="https://www.kierraraeevents.com"
              />
              <meta
                property="twitter:title"
                content="Kierra Rae Events & Consulting, LLC"
              />
              <meta
                property="twitter:description"
                content="Kierra Rae Events & Consulting, LLC is a remote, premier event company that offers event planning and consulting services."
              />
              <meta
                property="twitter:image"
                content="https://www.kierraraeevents.com/static/image7-2d63f338e507832fafb5dcb76b798dc8.jpg"
              />
            </Helmet>
            <div className={'page-top'}>
              {!noSiteHeader ? <SiteHeader /> : null}
              {!noHeader ? <Header activeLink={activeLink} /> : null}
              {children}
              {!noFooter ? <Footer /> : null}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
};

export default Layout;
