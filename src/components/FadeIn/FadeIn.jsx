import React from 'react';
import PropTypes from 'prop-types';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const getFadeKeyframes = ({ left, right, top, bottom, distance }) => {
  let transformFrom = 'none';
  if (left) transformFrom = `translate3d(-${distance}, 0, 0)`;
  else if (right) transformFrom = `translate3d(${distance}, 0, 0)`;
  else if (top) transformFrom = `translate3d(0, -${distance}, 0)`;
  else if (bottom) transformFrom = `translate3d(0, ${distance}, 0)`;

  return keyframes`
    from {
      opacity: 0;
      transform: ${transformFrom};
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;
};

const FadeIn = ({ children, duration, delay, distance, left, right, top, bottom }) => (
  <Reveal
    keyframes={getFadeKeyframes({ left, right, top, bottom, distance })}
    duration={duration}
    delay={delay}
    triggerOnce
  >
    {children}
  </Reveal>
);

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  distance: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
};

FadeIn.defaultProps = {
  duration: 1000,
  delay: 0,
  distance: '30px',
  left: false,
  right: false,
  top: false,
  bottom: false,
};

export default FadeIn;
