import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArticlesComponent from "../components/ArticlesTwoCol"
import Layout from "../components/Layout/BlogLayout"
import { capitalizeWord } from "../libs/utils"

const Category = ({ pageContext }) => {
  const { category } = pageContext;
  // const articles = data.articles.edges
  // const category = data.category.name

  // const data = useStaticQuery(graphql`
  //   query ($id: String!) {
  //     strapiCategory(id: {eq: $id}) {
  //       title
  //       content
  //       cover {
  //         localFile {
  //           childImageSharp {
  //             gatsbyImageData(width: 800)
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const data = useStaticQuery(graphql`
  //   query ($slug: String!) {
  //     strapiCategory(slug: {eq: $slug}) {
  //       strapi_id
  //       title
  //       content
  //       slug
  //       cover {
  //         url
  //         alternativeText
  //         localFile {
  //           absolutePath
  //           publicURL
  //           url
  //           childImageSharp {
  //             gatsbyImageData(width: 800)
  //           }
  //         }
  //       }
  //       category {
  //         name
  //       }
  //     }
  //   }
  // `);

  return (
    <Layout>
      <div>
        <h1>{capitalizeWord(category.name)}</h1>
        <p>{category.slug}</p>
      </div>

      <div className="uk-section">
        <div className="uk-container uk-container-large">
          {/* <h1>{category}</h1> */}
          {/* <ArticlesComponent articles={articles} /> */}
        </div>
      </div>
    </Layout>
  )
}


// export const query = graphql`
//   query Category($id: Int!) {
//     articles: allStrapiArticle(filter: { category: { strapi_id: { eq: $id } } }) {
//       edges {
//         node {
//           strapi_id
//           title
//           category {
//             name
//           }
//           cover {
//             url
//           }
//         }
//       }
//     }
//     category: strapiCategory(strapi_id: { eq: $id }) {
//       name
//     }
//   }
// `;

// export const query = graphql`
//   query CategoryQuery($slug: String!) {
//     strapiCategory(slug: {eq: $slug}) {
//       strapi_id
//       slug
//       name
//       publishedAt
//       createdAt
//       updatedAt
//     }
//   }
// `;

export default Category  