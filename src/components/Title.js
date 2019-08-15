import React from 'react';
import Transition from 'react-transition-group/Transition';

import { defaultStyle, transitionStyles } from '../transitions';
import config from '../../config';

import SubHeading from '../components/SubHeading';

const Title = () => (
  <Transition in appear={true} timeout={400}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">
            {config.heading}
            {config.author}.
          </h1>
          <SubHeading />
        </div>
      </div>
    )}
  </Transition>
);

export default Title;
