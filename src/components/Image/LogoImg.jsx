import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const LogoImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(width: 150, layout: FIXED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image?.node?.childImageSharp) return null;

      const imageData = getImage(image.node.childImageSharp.gatsbyImageData);
      if (!imageData) return null;

      return <GatsbyImage className="logo" alt={alt} image={imageData} />;
    }}
  />
);

LogoImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

LogoImg.defaultProps = {
  filename: '',
  alt: '',
};

export default LogoImg;
