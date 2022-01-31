// import React from 'react'
// import {StaticQuery, Link, graphql } from "gatsby"

// const Post = ({post}) => (
//   <>
//       <div>
//         <Link to="/blog/">{'<'} Back</Link>
//         <br />
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>

//         <pre>{JSON.stringify(post, null, 4)}</pre>
//       </div>
//   </>
//   // <StaticQuery
//   //   query={graphql`
//   //     {
//   //       site {
//   //         id
//   //         host
//   //         port
//   //         children {
//   //           children {
//   //             children {
//   //               id
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `}
//   //   render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
//   // ></StaticQuery>
// )

// // export const query = graphql`
// //   {
// //     site(siteMetadata: {description: $description, author: $author}) {
// //       id
// //       host
// //       port
// //     }
// //   }
// // `

// // exports.createPages = async ({ graphql, actions }) => {
// //   const { createPage } = actions

// //   const result = await graphql(`
// //     {
// //       directory {
// //         id
// //       }
// //     }
// //   `)
// //   const templatePath = path.resolve(`PATH/TO/TEMPLATE.js`)
  
// //   result.data.directory.forEach((node) => {
// //     createPage({
// //       path: NODE_SLUG,
// //       component: templatePath,
// //       context: {
// //         slug: NODE_SLUG,
// //       },
// //     })
// //   })
// // }

// export default Post