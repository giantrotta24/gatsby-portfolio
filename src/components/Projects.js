import React from 'react';
// import mixitup from 'mixitup';

import MacMockUp from '../assets/images/outdoor-gear-bank.png';

const Projects = () => (
  <section id="projects" className="projects-section bg-light text-center">
    <div className="container">
      <div className="row align-items-center no-gutters mb-4 mb-lg-5">
        <div className="col-xl-8 col-lg-7">
          <img
            className="img-fluid mb-3 mb-lg-0"
            src={MacMockUp}
            alt="mac mock-up"
          />
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <h4>Outdoor Gear Bank</h4>
            <a href="https://outdoor-gear-bank.herokuapp.com" className="mx-2">
              <i className="fas fa-globe"></i>
            </a>
            <a
              href="https://github.com/giantrotta24/Outdoor-Gear-Bank"
              className="mx-2"
            >
              <i className="fab fa-github"></i>
            </a>
            <p className="text-black-50 mb-0">
              This application provides a way for businesses to keep track of
              the state of their rental gear. The motivation behind this project
              was to move the rental process of a local outdoor company away
              from being entirely pen and paper. This project was made using
              <a href="https://reactjs.org/"> React</a>,<a href="https://www.mongodb.com/"> MongoDB</a>,
              and <a href="https://nodejs.org/en/">Node</a>/<a href="https://expressjs.com/">Express</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
