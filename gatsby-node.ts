/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import path from 'path';

export const onCreateWebpackConfig = ({ stage, actions }: { state: any, actions: any }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};


async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }

          ...

          post: node {
            id
            uri
            postFormats {
              formats: nodes {
                name
              }
            }
          }

          next {
            id
          }
        }
      }
    }
  `)

  ...

  return graphqlResult.data.allWpPost.edges
}

const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) => {
      const postFormats = post.postFormats.formats;
      const isVideo = postFormats.length && postFormats[0].name === 'Video';

        return gatsbyUtilities.actions.createPage({
          // Use the WordPress uri as the Gatsby page path
          // This is a good idea so that internal links and menus work 👍
          path: post.uri,
  
          // Use special video template if post format === Video, else use blog post template
          component: isVideo ? path.resolve(`./src/templates/video-post.js`) : path.resolve(`./src/templates/blog-post.js`),
  
          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      )}
    )
  )