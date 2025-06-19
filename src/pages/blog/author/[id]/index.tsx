import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const AuthorPage = ({ id, data }) => {
  const author = data.strapiAuthor;
  const image = getImage(author.image.localFile);

  return (
    <div>
      <h1>{author.title}</h1>
      {image && <GatsbyImage image={image} alt={author.title} />}
      <p>{author.content}</p>
    </div>
  )
}

// export const query = graphql`
//   query ArticleQuery($id: String!) {
//     strapiAuthor(id: {eq: $id}) {
//       id
//       strapi_id
//       name
//       email
//       avatar {
//         id
//         url
//         alternativeText
//         localFile {
//           absolutePath
//           publicURL
//           url
//           childImageSharp {
//             gatsbyImageData(width: 40)
//           }
//         }
//       }
//     }
//   }
// `;

export default AuthorPage