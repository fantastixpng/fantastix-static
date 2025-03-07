import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image';
import GatsbyImage from 'gatsby-plugin-image'

const Image = ({ src, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  console.log(data)

  // const match = useMemo(() => data.images.edges.find(({ node }) => src === node.relativePath), [data, src]);

  // if (!match) return null;

  // const { node: { childImageSharp, publicURL, extension } = {} } = match;

  // if (extension === 'svg' || !childImageSharp) {
  //   return <img src={publicURL} {...rest} />;
  // }

  // return <Img fluid={childImageSharp.fluid} {...rest} />;
  return (<></>)
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;

// Render inline SVG with fallback non-svg images
// export default function Image2({ svg, gatsbyImageData, file, alt }) {
//   if (file.contentType === 'image/svg+xml') {
//     if (svg && svg.content) {
//       // Inlined SVGs
//       return <div dangerouslySetInnerHTML={{ __html: svg.content }} />
//     }

//     // SVGs that can/should not be inlined
//     return <img src={file.url} alt={alt} />
//   }

//   // Non SVG images
//   return <GatsbyImage image={gatsbyImageData} alt={alt} />
// }

// export default Image2;