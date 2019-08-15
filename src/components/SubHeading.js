import React from 'react';
import Transition from 'react-transition-group/Transition';
import Scroll from './Scroll';

import { defaultStyle, transitionStyles } from '../transitions';
import config from '../../config';

const SubHeading = () => (
  <Transition in appear={true} timeout={800}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <h2 className="text-white-50 mx-auto mt-2 mb-5">{config.subHeading}</h2>
        <Scroll type="id" element="about">
          <a href="#about" className="btn btn-primary">
            <i className="fas fa-arrow-down"></i>
          </a>
        </Scroll>
      </div>
    )}
  </Transition>
);

export default SubHeading;
