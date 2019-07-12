import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import StyledBackgroundSection from '../components/StyledBackground';

import Title from '../components/Title';
import Message from '../components/Message';
import Social from '../components/Social';
import Email from '../components/Email';

import '../styles/main.css';

const IndexPage = ({ data }) => {
  const {
    title,
    author,
    color,
    titleFont,
    messageFont,
    message,
    social,
    email
  } = data.site.siteMetadata;
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={title + '&middot' + message + '&middot' + author} />
        <title>{title}</title>
        <link
          rel="stylesheet"
          href={
            'https://fonts.googleapis.com/css?family=' +
            titleFont +
            '|' +
            messageFont
          }
        />
      </Helmet>
      <StyledBackgroundSection>
        <Title title={title} titleFont={titleFont} color={color} />
        <Message message={message} messageFont={messageFont} color={color} />
        <Social social={social} color={color} />
        <Email email={email} color={color} messageFont={messageFont}></Email>
      </StyledBackgroundSection>
    </React.Fragment>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        color
        titleFont
        messageFont
        social
        message
        email
      }
    }
  }
`;
