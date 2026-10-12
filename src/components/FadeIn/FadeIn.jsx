import React from 'react';
import PropTypes from 'prop-types';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const fadeInOnly = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn = ({ children, duration, delay }) => (
  <Reveal keyframes={fadeInOnly} duration={duration} delay={delay} triggerOnce>
    {children}
  </Reveal>
);

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

FadeIn.defaultProps = {
  duration: 1000,
  delay: 0,
};

export default FadeIn;
