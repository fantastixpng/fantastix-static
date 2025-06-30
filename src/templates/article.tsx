import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/BlogLayout"
import { Container } from "react-bootstrap"

// interface BlogPostProps {
//     params: {
//         slug: string;
//     };
//     data: any;
// }

const Article/*: React.FC<BlogPostProps>*/ = ({ pageContext }) => {
    const { article } = pageContext;
    // const article = data.strapiArticle;
    const image = getImage(article?.cover?.localFile);

    //     const data = useStaticQuery(graphql`
    //       query ($id: String!) {
    //         strapiArticle(id: {eq: $id}) {
    //           title
    //           content
    //           cover {
    //             localFile {
    //               childImageSharp {
    //                 gatsbyImageData(width: 800)
    //               }
    //             }
    //           }
    //         }
    //       }
    //     `)
    //   const data = useStaticQuery(graphql`
    //     query ($slug: String!) {
    //       strapiArticle(slug: {eq: $slug}) {
    //         strapi_id
    //         title
    //         content
    //         slug
    //         cover {
    //           url
    //           alternativeText
    //           localFile {
    //             absolutePath
    //             publicURL
    //             url
    //             childImageSharp {
    //               gatsbyImageData(width: 800)
    //             }
    //           }
    //         }
    //         category {
    //           name
    //         }
    //       }
    //     }
    //   `);

    return (
        <Layout>
            <title>{article?.title} | Fantastix</title>
            <Container>
                <div
                    id="banner"
                    className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                    data-src={article?.cover?.url}
                    data-srcset={article?.cover?.url}
                    data-uk-img
                >
                    <h1>{article?.title}</h1>
                    <p className="blog-post-meta">{new Date(article?.publishedAt).toDateString()} by <a href="#">{article?.author?.name}</a></p>
                </div>
                {image && <GatsbyImage image={image} alt={article?.title || article?.cover?.alternativeText} />}

                <h1>{article?.subtitle}</h1>

                <p>{article?.content}</p>

                <div className="uk-section">
                    <div className="uk-container uk-container-small">
                        {/* <ReactMarkdown source={article?.content} /> */}
                        <p>
                            <Moment format="MMM Do YYYY">{article?.publishedAt}</Moment>
                        </p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Article;

// export const query = graphql`
//     query ArticleQuery($slug: String!) {
//         strapiArticle(slug: { eq: $slug }) {
//             strapi_id
//             title
//             content
//             cover {
//                 url
//                 alternativeText
//                 localFile {
//                     id
//                     absolutePath
//                     publicURL
//                     url
//                     childImageSharp {
//                         gatsbyImageData(width: 800)
//                     }
//                 }
//             }
//             publishedAt
//             updatedAt
//             createdAt
//         }
//     }
// `;

// export const query = graphql`
//   query ArticleQuery($slug: String!) {
//     strapiArticle(slug: {eq: $slug}) {
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
//         slug
//         parent {
//           id
//         }
//       }
//       author {
//         id
//         strapi_id
//         name
//         email
//         avatar {
//           id
//           url
//           alternativeText
//           localFile {
//             absolutePath
//             publicURL
//             url
//             childImageSharp {
//               gatsbyImageData(width: 40)
//             }
//           }
//         }
//       }
//       publishedAt
//       createdAt
//       updatedAt
//     }
//   }
// `;