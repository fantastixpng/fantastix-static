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

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      articles: allStrapiArticle {
        edges {
          node {
            strapi_id
            slug
          }
        }
      }
      categories: allStrapiCategory {
        edges {
          node {
            strapi_id
            slug
          }
        }
      }
      // videoPosts: allStrapiVideoPost {
      //   allStrapiArticle(: { type: { eq: "video" } }) {
      //     id
      //     title
      //     slug
      //     publishedAt
      //     # videoUrl
      //     # thumbnail {
      //     #   url
      //     # }
      //   }
      // }
      // archivedPosts: allStrapiArticle( {
      //   articles(
      //     filters: { 
      //       status: { eq: "archived" } 
      //       # OR using an archive date field:
      //       # archivedAt: { notNull: true }
      //     }
      //     sort: ["archivedAt:desc"]
      //   ) {
      //     data {
      //       id
      //       attributes {
      //         title
      //         slug
      //         archivedAt
      //         archivedReason
      //       }
      //     }
      //   }
      // }
    }
  `);

  if (results.errors) {
    throw results.errors;
  }

  // Create blog articles pages.
  const articles = results?.data?.articles.edges
  const categories = results?.data?.categories.edges

  // createPage({
  //   path: "/articles/:slug",
  //   component: templatePath, 
  //   context: { slug: data.slug },
  // });

  // Create a page for each article
  articles.forEach((article, index) => {
    createPage({
      path: `/blog/articles/${article.node.slug}`,
      component: articleTemplatePath,
      context: {
        slug: article.node.slug,
      },
    })
  });
  // results1?.data?.allStrapiArticle?.nodes.forEach(({ slug }) => {
  //   createPage({
  //     path: `/blog/articles/${slug}`,
  //     // component: path.resolve("./src/pages/blog/articles/[slug].tsx"),
  //     component: articleTemplatePath,
  //     context: {
  //       slug,
  //     },
  //   });
  // });

  categories.forEach((category, index) => {
    createPage({
      path: `/blog/category/${category.node.slug}`,
      component: categoryTemplatePath,
      context: {
        slug: category.node.slug,
      },
    })
  });
};
// async function getPosts({ graphql, reporter }) {
//   const graphqlResult = await graphql(/* GraphQL */ `
//     query WpPosts {
//       # Query all WordPress blog posts sorted by date
//       allWpPost(sort: { fields: [date], order: DESC }) {
//         edges {
//           previous {
//             id
//           }

//           ...

//           post: node {
//             id
//             uri
//             postFormats {
//               formats: nodes {
//                 name
//               }
//             }
//           }

//           next {
//             id
//           }
//         }
//       }
//     }
//   `)

//   // ...

//   return graphqlResult.data.allWpPost.edges
// }

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