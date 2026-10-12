import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(width: 1366, layout: CONSTRAINED, placeholder: BLURRED)
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

      return <GatsbyImage alt={alt} image={imageData} />;
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

ProjectImg.defaultProps = {
  filename: '',
  alt: '',
};

export default ProjectImg;
