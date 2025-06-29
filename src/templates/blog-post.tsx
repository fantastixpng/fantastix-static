import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import { Button, Container } from "react-bootstrap"
// import { useParams } from "react-router-dom";

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../styles/@wordpress/block-library/build-style/style.css"
import "../styles/@wordpress/block-library/build-style/theme.css"

// import Bio from "../components/bio"
import Layout from "../components/Layout/BlogLayout"
import Seo from "../components/Seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(post.title)}</h1>

          <p>{post.date}</p>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!post.content && (
          <section itemProp="articleBody">{parse(post.content)}</section>
        )}

        <hr />

        <footer>
          {/* <Bio /> */}
        </footer>
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}
// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostById(
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     post: wpPost(id: { eq: $id }) {
//       id
//       excerpt
//       content
//       title
//       date(formatString: "MMMM DD, YYYY")
//       featuredImage {
//         node {
//           altText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 quality: 100
//                 placeholder: TRACED_SVG
//                 layout: FULL_WIDTH
//               )
//             }
//           }
//         }
//       }
//     }
//     previous: wpPost(id: { eq: $previousPostId }) {
//       uri
//       title
//     }
//     next: wpPost(id: { eq: $nextPostId }) {
//       uri
//       title
//     }
//   }
// `



// export const query = graphql`
//   query ($slug: String!) {
//     strapiArticle(slug: { eq: $slug }) {
//       strapi_id
//       title
//       content
//       slug
//       publishedAt
//       cover {
//         url
//       }
//     }
//   }
// `;

const BlogPost = ({ data }) => {
  const slug = "hello-world";
  // const { slug } = useParams();
  // const post = data.markdownRemark;
  // const { title, date, author, tags, featured_image } = post.frontmatter;

  // Mock data (replace with your actual data fetching)
  const post = {
    title: "Sample Blog Post",
    slug: slug,
    date: "January 1, 2023",
    author: "John Doe",
    content: `
      <p>This is the main content of your blog post. It can include <strong>HTML</strong> formatting.</p>
      <p>Another paragraph of text here.</p>
      <h3>Subheading</h3>
      <p>More content...</p>
    `,
    tags: ["webdev", "tutorial", "bootstrap"]
  };

  return (
    <Container className="mt-5">
      <article>
        {/* Header */}
        <header className="mb-4">
          <h1 className="fw-bolder mb-1">{post.title}</h1>
          <div className="text-muted fst-italic mb-2">
            Posted on {post.date} by {post.author}
          </div>
          {post.tags.map(tag => (
            <span key={tag} className="badge bg-secondary me-1">{tag}</span>
          ))}
        </header>

        {/* Featured Image (Optional) */}
        <figure className="mb-4">
          <img
            className="img-fluid rounded"
            src="https://via.placeholder.com/900x400"
            alt="Featured post"
          />
        </figure>

        {/* Content */}
        <section
          className="mb-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Comments Section (Optional) */}
        <section className="card bg-light mb-4">
          <div className="card-body">
            <h4 className="card-title">Comments</h4>
            <p className="card-text">Comment form would go here...</p>
          </div>
        </section>
      </article>

      {/* Navigation */}
      <div className="d-flex justify-content-between mb-5">
        <Button variant="outline-primary">
          <Link to="/blog">← Back to Blog</Link>
        </Button>
        <Button variant="outline-secondary">
          Next Post →
        </Button>
      </div>
    </Container>
  );
};

export default BlogPost;