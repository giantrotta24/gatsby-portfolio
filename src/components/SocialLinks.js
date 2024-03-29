import React from 'react';
import Fade from 'react-reveal/Fade';
import config from '../../config';

import ResumePDF from '../assets/documents/Technical-Resume-September-2021.pdf';

const SocialLinks = () => {
  return (
    <section className="contact-section bg-black">
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Location</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">{config.location}</div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade up>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href={`mailto:${config.email}`}>{config.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-file text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Resume</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href={ResumePDF}>View PDF</a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="social d-flex justify-content-center">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} className={`mx-2`}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default SocialLinks;
