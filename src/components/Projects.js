import React from 'react';
import Fade from 'react-reveal/Fade';
// import mixitup from 'mixitup';

import Portfolio from './Portfolio';

const Projects = () => (
  <section id="projects" className="projects-section bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mx-auto">
          <Fade top>
            <h2 className="featured-text text-black">Projects</h2>
          </Fade>
          <Fade bottom>
            <Portfolio />
          </Fade>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
