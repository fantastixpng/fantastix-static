import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "styled-components"

import Seo from "../components/Seo"

const NotFoundPage = () => {

  const styles = css`
    * {
    line-height: 1.2;
    margin: 0;
  }

    html {
    color: #888;
    display: table;
    font-family: sans-serif;
    height: 100%;
    text-align: center;
    width: 100%;
  }

    body {
    display: table-cell;
    vertical-align: middle;
    margin: 2em auto;
  }

    h1 {
    color: #555;
    font-size: 2em;
    font-weight: 400;
  }

    p {
    margin: 0 auto;
    width: 280px;
  }

    @media only screen and (max-width: 280px) {

    body,
    p {
    width: 95%;
  }

    h1 {
    font-size: 1.5em;
    margin: 0 0 0.3em;
  }

  }`

  return (
    <styles>
      <Seo title="404: Not found" />

      <section className="text-dark py-5 o-hidden">
        <div className="container position-relative layer-2">
          <div className="row justify-content-center mb-md-6">
            <div className="col-auto">
              <a href="/">
                <StaticImage
                  src="../images/logo.svg"
                  width={300}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="fantastix logo"
                  style={{ marginBottom: `1.45rem` }}
                />
              </a>
            </div>
          </div>
          <div className="row justify-content-center py-5">
            <div className="text-center">
              <img src="../images/page_not_found.svg" className="h-50" />
              <h1>Page Not Found</h1>
              <h1>404 - Oh no's! We couldn't find that page :(</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
              <p className="lead">Sorry, but the page you were trying to view does not exist.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <a href="/" className="btn btn-lg btn-outline-dark mx-2">
                <span>Back to Home</span>
              </a>
              <div className="text-small text-muted">
                <br className="visible-md"/>&copy; 2021 Fantastix. View our <a href="/privacy">Privacy Policy</a>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </styles>
  )
}

export default NotFoundPage
