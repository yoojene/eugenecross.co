import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoSrcURL, videoTitle }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  videoSrcURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string,
};
export default Video;
