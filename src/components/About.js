import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "self-portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.profile.childImageSharp.fluid}
      className="img-fluid profile-image mb-4"
    />
  );
};

const About = () => (
  <section id="about" className="about-section text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-white mb-4">About Me</h2>
          <p className="text-white-50">
            Full Stack Web Developer and JavaScript Engineer with a passion for
            innovative design and functionality. Techie in every sense of the
            word, with a track record in adapting to new technologies with ease.
            When I’m not coding, I enjoy producing and co-hosting {'\n'}
            <a href="https://twitter.com/footballkennel">
              ‘The Kennel’ A Cleveland Football Podcast
            </a>
            .
          </p>
        </div>

        <div className="col-md-2 mx-auto">
          <Image />
        </div>
      </div>
    </div>
  </section>
);

export default About;
