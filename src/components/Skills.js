import React from 'react';
import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

// import Scroll from './Scroll';

const width = '300px',
  height = '150px';
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};
`;
const Arrow = styled.div`
  color: white;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;
const CarouselUI = ({ position, handleClick, children }) => (
  <Container>
    {children}
    <Arrow onClick={handleClick} data-position={position - 1}>
      {'<'}
    </Arrow>
    <Arrow right onClick={handleClick} data-position={position + 1}>
      {'>'}
    </Arrow>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="container">
      <div className="row">
        <Fade right>
          <div className="col-lg-8 mx-auto">
          <h4 className="featured-text text-white mb-4">Skills</h4>
            <Carousel defaultWait={10000} /*wait for 10000 milliseconds*/>
              <Slide right>
                <div className="text-white mx-auto text-center">
                  <i className="fab fa-js fa-4x mt-2 text-white"></i>
                  <h4 className="text-white-50 pt-4">JavaScript</h4>
                </div>
              </Slide>
              <Slide right>
                <div className="text-white mx-auto text-center">
                  <i className="fab fa-react fa-4x mt-2 text-white"></i>
                  <h4 className="text-white-50 pt-4">ReactJS</h4>
                </div>
              </Slide>
              <Slide right>
                <div className="text-white mx-auto text-center">
                  <i className="fas fa-database fa-4x mt-2 text-white"></i>
                  <h4 className="text-white-50 pt-4">Database Management</h4>
                </div>
              </Slide>
              <Slide right>
                <div className="text-white mx-auto text-center">
                  <i className="fas fa-cogs fa-4x mt-2 text-white"></i>
                  <h4 className="text-white-50 pt-4">API Development</h4>
                </div>
              </Slide>
            </Carousel>
          </div>
        </Fade>
      </div>
    </div>
  </section>
);

export default Skills;
