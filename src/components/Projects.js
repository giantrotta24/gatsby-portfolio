import React from 'react';
// import mixitup from 'mixitup';

import GearBankMockUp from '../assets/images/outdoor-gear-bank.png';
import WildPlantMockUp from '../assets/images/iphone-wildplantID.png';

const Projects = () => (
  <section id="projects" className="projects-section bg-light text-center">
    <div className="container">
      {/* Outdoor Gear Bank*/}
      <div className="row align-items-center no-gutters mb-4 mb-lg-5">
        <div className="col-xl-8 col-lg-7">
          <img
            className="img-fluid mb-3 mb-lg-0"
            src={GearBankMockUp}
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
              <a href="https://reactjs.org/"> React</a>,
              <a href="https://www.mongodb.com/"> MongoDB</a>, and{' '}
              <a href="https://nodejs.org/en/">Node</a>/
              <a href="https://expressjs.com/">Express</a>.
            </p>
          </div>
        </div>
      </div>
      {/* WildPlant ID */}
      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src={WildPlantMockUp}
            alt="iphone mock-up"
          />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Wild Plant Id</h4>
                <a
                  href="https://www.cuyahogaswcd.org/euclid-creek/programs/wild-plant-id-application"
                  className="mx-2"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  href="https://gitlab.com/WildPlantID/WildPlantID-iOS"
                  className="mx-2"
                >
                  <i className="fab fa-gitlab"></i>
                </a>
                <p className="mb-0 text-white-50">
                  While volunteering for{' '}
                  <a href="https://clevelandgivecamp.org/about/">
                    Cleveland Give Camp
                  </a>{' '}
                  I had the opportunity to contribute to a team tasked with
                  upgrading the Wild Plant Id iPhone application made for the{' '}
                  <a href="https://www.euclidcreekwatershed.org/euclid-creek">
                    Friends of Euclid Creek Watershed
                  </a>
                  . Some of my responsibilities included debugging, upgrading
                  certain UI aspects, and working with{' '}
                  <a href="https://www.sqlite.org/index.html"> SQLite</a>.
                </p>
                <hr className="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
