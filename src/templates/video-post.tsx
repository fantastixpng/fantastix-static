import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const VideoPostTemplate = ({ data: { post } }) => {
  // RegEx to find YouTube IDs
  const youtubeIdPattern = /watch\?v=([a-z_0-9-]+)|youtu\.be\/([a-z_0-9-]+)|youtube\.com\/embed\/([a-z_0-9-]+)/i;

  const matches = youtubeIdPattern.exec(post.content);
  let videoId;

  if (matches) {
    // Use first available match
    videoId = matches[1] || matches[2] || matches[3];
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
        </header>

        {videoId ? (
          <div className="video-embed">
            <iframe width="512" height="288" src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1`} title={post.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        ) : (
          <div className="no-video-found">
            <p>Sorry, could not find a video in this post!</p>
          </div>
        )}

        <hr />

        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}