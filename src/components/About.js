import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

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
        <Fade bottom>
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About Me</h2>
            <p className="text-white-50">
              Full Stack Web Developer and JavaScript Engineer with a passion
              for innovative design and functionality. Techie at heart with a
              proven ability to learn new technologies quickly and efficiently.
              When I’m not coding, I enjoy producing and co-hosting {'\n'}
              <a href="https://twitter.com/footballkennel">
                ‘The Kennel’ A Cleveland Football Podcast
              </a>
              .
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="col-md-2 mx-auto">
            <Image />
          </div>
        </Fade>
      </div>
    </div>
  </section>
);

export default About;
