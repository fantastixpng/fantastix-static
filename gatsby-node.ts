/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import path from 'path';
import { createRemoteFileNode } from "gatsby-source-filesystem";
import { CreateNodeArgs, CreatePageArgs, CreatePagesArgs, CreateWebpackConfigArgs } from 'gatsby';

export const onCreateWebpackConfig = ({ stage, actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

// export const onCreatePage = ({ page, actions }: CreatePageArgs) => {
//   if (page.path.match(/^\/user/)) {
//     page.matchPath = "/user/:id";
//     actions.createPage(page);
//   }
// };

// export const onCreateNode = async ({
//   node,
//   actions: { createNode },
//   store,
//   cache,
//   createNodeId,
// }: CreateNodeArgs) => {
//   if (node.internal.type === "StrapiArticle" && node.cover?.url) {
//     const fileNode = await createRemoteFileNode({
//       url: `http://localhost:1337${node.cover.url}`, // Strapi URL + media path
//       parentNodeId: node.id,
//       createNode,
//       createNodeId,
//       cache,
//       store,
//     });

//     if (fileNode) {
//       node.cover.localFile___NODE = fileNode.id; // Link to Gatsby's file node
//     }
//   }
// };

const articleTemplatePath = path.resolve("./src/templates/article.tsx");
const categoryTemplatePath = path.resolve("./src/templates/category.tsx");
const blogPostTemplatePath = path.resolve("./src/templates/blog-post.tsx");
const blogPostArchiveTemplatePath = path.resolve("./src/templates/blog-post-archive.tsx");
const videoPostTemplatePath = path.resolve("./src/templates/video-post.tsx");

export const createPages = async ({ graphql, actions: {createPage} }: CreatePagesArgs) => {
  // const results = await graphql(`
  //   {
  //     articles: allStrapiArticle {
  //       edges {
  //         node {
  //           strapi_id
  //           slug
  //           title
  //           content
  //           cover {
  //             url
  //             alternativeText
  //             localFile {
  //               id
  //               absolutePath
  //               publicURL
  //               url
  //               childImageSharp {
  //                 gatsbyImageData(width: 800)
  //               }
  //             }
  //           }
  //           publishedAt
  //           updatedAt
  //           createdAt
  //         }
  //       }
  //     }
  //     categories: allStrapiCategory {
  //       edges {
  //         node {
  //           strapi_id
  //           slug
  //         }
  //       }
  //     }
  //     // videoPosts: allStrapiVideoPost {
  //     //   allStrapiArticle(: { type: { eq: "video" } }) {
  //     //     id
  //     //     title
  //     //     slug
  //     //     publishedAt
  //     //     # videoUrl
  //     //     # thumbnail {
  //     //     #   url
  //     //     # }
  //     //   }
  //     // }
  //     // archivedPosts: allStrapiArticle( {
  //     //   articles(
  //     //     filters: { 
  //     //       status: { eq: "archived" } 
  //     //       # OR using an archive date field:
  //     //       # archivedAt: { notNull: true }
  //     //     }
  //     //     sort: ["archivedAt:desc"]
  //     //   ) {
  //     //     data {
  //     //       id
  //     //       attributes {
  //     //         title
  //     //         slug
  //     //         archivedAt
  //     //         archivedReason
  //     //       }
  //     //     }
  //     //   }
  //     // }
  //   }
  // `);
  
  // if (results.errors) {
  //   throw results.errors;
  // }

  const articlesQueryResult = await graphql(`
    query AllArticlesQuery {
      allStrapiArticle {
        nodes {
          id
          strapi_id
          title
          slug
          content
          cover {
              url
              alternativeText
              localFile {
                  id
                  absolutePath
                  publicURL
                  url
                  childImageSharp {
                      gatsbyImageData(width: 800)
                  }
              }
          }
          publishedAt
          updatedAt
          createdAt
        }
      }
    }
  `);
  const articles = articlesQueryResult?.data?.allStrapiArticle?.nodes;
  // createPage({
  //   path: `/blog/articles`,
  //   component: articleTemplatePath,
  //   context: {
  //     title: "Articles",
  //     articles: articles,
  //   },
  // });
  // Create a page for each article
  articles.forEach((article, index) => {
    createPage({
      path: `/blog/articles/${article.slug}`,
      component: articleTemplatePath,
      context: {
        title: article.name,
        article: article
      },
    })
  });
  
  const categoryQueryResult = await graphql(`
    query AllCategoriesQuery {
      allStrapiCategory {
        nodes {
          strapi_id
          slug
          name
          publishedAt
          createdAt
          updatedAt
        }
      }
    }
  `);
  const categories = categoryQueryResult?.data?.allStrapiCategory?.nodes;
  categories.forEach((category, index) => {
    createPage({
      path: `/blog/category/${category.slug}`,
      component: categoryTemplatePath,
      context: {
        title: category.name,
        category: category
      },
    })
  });

  // const archivedPostsQueryResult = await graphql(`
  //   query AllArchivedPostsQuery {
  //     allStrapiArticle(filter: { 
  //       isArchived: { eq: true }
  //       // archivedAt: { notNull: true }
  //       // sort: ["archivedAt:desc"]
  //     }) {
  //       nodes {
  //         id
  //         strapi_id
  //         title
  //         slug
  //         archivedAt
  //         // archivedReason
  //       }
  //     }
  //   }
  // `)
  // const archivedPosts = archivedPostsQueryResult?.data?.allStrapiArticle?.nodes;
  // archivedPosts.forEach((article, index) => {
  //   createPage({
  //     path: `/blog/articles/${article.slug}`,
  //     component: articleTemplatePath,
  //     context: {
  //       title: article.title,
  //       article: article
  //     },
  //   })
  // });
        
  // Create blog articles pages.
  // const articles = results?.data?.articles?.edges;
  // const categories = results?.data?.categories?.edges;
  // const videoPosts = results?.data?.videoPosts.edges;
  // const archivedPosts = results?.data?.archivedPosts.edges;
  // const blogPosts = results?.data?.blogPosts.edges;

  // Create a page for each article
  // articles.forEach((article, index) => {
  //   createPage({
  //     path: `/blog/articles/${article.node.slug}`,
  //     component: articleTemplatePath,
  //     context: {
  //       article: article.node
  //     },
  //   })
  // });

  // categories.forEach((category, index) => {
  //   createPage({
  //     path: `/blog/category/${category.node.slug}`,
  //     component: categoryTemplatePath,
  //     context: {
  //       slug: category.node.slug,
  //     },
  //   })
  // });
};

// const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
//   Promise.all(
//     posts.map(({ previous, post, next }) => {
//       const postFormats = post.postFormats.formats;
//       const isVideo = postFormats.length && postFormats[0].name === 'Video';

//         return gatsbyUtilities.actions.createPage({
//           // Use the WordPress uri as the Gatsby page path
//           // This is a good idea so that internal links and menus work 👍
//           path: post.uri,
  
//           // Use special video template if post format === Video, else use blog post template
//           component: isVideo ? path.resolve(`./src/templates/video-post.js`) : path.resolve(`./src/templates/blog-post.js`),
  
//           // We also use the next and previous id's to query them and add links!
//           previousPostId: previous ? previous.id : null,
//           nextPostId: next ? next.id : null,
//         },
//       )}
//     )
//   )