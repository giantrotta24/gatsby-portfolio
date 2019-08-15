import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/grayscale.scss';

const Layout = props => {
  const { children } = props;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              author
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta
              name="description"
              content={
                data.site.siteMetadata.title +
                '&middot' +
                data.site.siteMetadata.author
              }
            />
            <title>{data.site.siteMetadata.title}</title>
          </Helmet>
          <div id='top'>{children}</div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
