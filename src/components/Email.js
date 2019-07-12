import React from 'react';
import Transition from 'react-transition-group/Transition';

import { defaultStyle, transitionStyles } from '../transitions';

const Email = props => (
  <Transition in appear={true} timeout={2200}>
    {state => (
      <ul
        style={{
          listStyleType: 'none',
          display: 'flex',
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <li
          style={{
            padding: '0.5rem',
            borderRadius: '2px'
          }}
          className="button"
        >
          <a
            className="link"
            href={props.email}
            style={{
                padding: "8px 12px",
                borderRadius: "2px",
                textDecoration: 'none',
                fontWeight: "bold",
                display: "inline-block",
                color: props.color,
                backgroundColor: '#111111',

            }}
          >Contact Me</a>
        </li>
      </ul>
    )}
  </Transition>
);

export default Email;
