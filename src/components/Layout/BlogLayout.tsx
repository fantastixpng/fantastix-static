import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import PropTypes from "prop-types"
import Nav from "../Nav"
import Seo from "../Seo"
import "./BlogLayout.module.css"

export const Head = () => <Seo title="Blog | Fantastix" />

const Layout = ({ isHomePage = false, children }) => {
  const title = ""

  return (
    <div data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
        <Nav />
      </header>

      <main className="container">{children}</main>

      <footer className="footer py-8 bg-dark py-5 pb-5 border-top text-light text-body-secondary xbg-body-tertiary text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <p className="text-light">
                &copy; {new Date().getFullYear()}, Built with ❤️ by{" "} Fantastix
              </p>
            </div>

            <div className="col-md-2">

              <p className="mb-0 text-light">
                <a href="#">Back to top</a>
              </p>
            </div>
            <div className="col-md-5 text-md-end">
              <Link to="/privacy-policy" className="text-light me-3">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-light">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;