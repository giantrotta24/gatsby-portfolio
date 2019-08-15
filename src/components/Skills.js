import React from 'react';
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="container">
      <div className="col-lg-8 mx-auto">
        <div className="row">
          <h4 className="featured-text text-white mb-4">Tools</h4>
        </div>
        <div className="row">
          <div className="text-white mx-auto text-center">
            <Tooltip title="JavaScript" theme="light" position="bottom" trigger="mouseenter">
              <i className="fab fa-js fa-4x mt-2 text-white"></i>
            </Tooltip>
          </div>

          <div className="text-white mx-auto text-center">
            <Tooltip title="Bootstrap" theme="light" position="bottom" trigger="mouseenter">
              <i className="fab fa-bootstrap fa-4x mt-2 text-white"></i>
            </Tooltip>
          </div>

          <div className="text-white mx-auto text-center">
            <Tooltip title="ReactJS" theme="light" position="bottom" trigger="mouseenter">
            <i className="fab fa-react fa-4x mt-2 text-white"></i>
            </Tooltip>
          </div>

          <div className="text-white mx-auto text-center">
            <Tooltip title="Database Programming" theme="light" position="bottom" trigger="mouseenter">
            <i className="fas fa-database fa-4x mt-2 text-white"></i>
            </Tooltip>
          </div>

          <div className="text-white mx-auto text-center">
            <Tooltip title="API Development" theme="light" position="bottom" trigger="mouseenter">
            <i className="fas fa-cogs fa-4x mt-2 text-white"></i>
            </Tooltip>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Skills;
