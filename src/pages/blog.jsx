import React, {Fragment} from 'react'
import { StaticQuery, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

const Blog = () => (
  <StaticQuery
    render={({ posts }) => (
      <Fragment>
        <Helmet>
          <title>My Title</title>
        </Helmet>

        <h1>It's blog time.</h1>
        <br />
        All Posts:
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    )}
  />
)

export default Blog