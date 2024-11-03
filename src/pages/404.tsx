import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Seo from "../components/Seo"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

  // const styles = css`
  //   * {
  //   line-height: 1.2;
  //   margin: 0;
  // }
  //
  //   html {
  //   color: #888;
  //   display: table;
  //   font-family: sans-serif;
  //   height: 100%;
  //   text-align: center;
  //   width: 100%;
  // }
  //
  //   body {
  //   display: table-cell;
  //   vertical-align: middle;
  //   margin: 2em auto;
  // }
  //
  //   h1 {
  //   color: #555;
  //   font-size: 2em;
  //   font-weight: 400;
  // }
  //
  //   p {
  //   margin: 0 auto;
  //   width: 280px;
  // }
  //
  //   @media only screen and (max-width: 280px) {
  //
  //   body,
  //   p {
  //   width: 95%;
  // }
  //
  //   h1 {
  //   font-size: 1.5em;
  //   margin: 0 0 0.3em;
  // }
  //
  // }`

export const Head: HeadFC = () => <title>Not found</title>

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      {/* <Seo title="404: Not found" /> */}

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
              <img src="../images/page_not_found.svg" className="h-50" alt="page not found" />
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
      <main style={pageStyles}>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </>
  )
}

export default NotFoundPage
