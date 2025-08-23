import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import PropTypes from "prop-types"
import BlogNav from "../Nav"
import Seo from "../Seo"
import "./BlogLayout.module.css"
import { NavItem, NavLink, Nav } from "react-bootstrap"
import { capitalizeWord } from "../../libs/utils"

export const Head = () => <Seo title="Blog | Fantastix" />

const Layout = ({ isHomePage = false, children }) => {
  const title = ""

  // const data = useStaticQuery(graphql`
  //       query {
  //           allStrapiCategory {
  //               edges {
  //                   node {
  //                       strapi_id
  //                       name
  //                       slug
  //                   }
  //               }
  //           }
  //       }
  //   `);

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
        <BlogNav />
      </header>

      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#">Subscribe</a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-body-emphasis text-decoration-none" href="#">Large</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
            </div>
          </div>
        </header>
        <div className="nav-scroller py-1 mb-3 border-bottom">
          <Nav className="nav nav-underline justify-content-between">
            {/* {data.allStrapiCategory.edges.map((category, i) => (
              <NavItem as={NavLink}
                key={i}
                href={`/blog/category/${category.node.slug}`}
                active={false}
                className="link-body-emphasis"
              >
                {capitalizeWord(category.node.name)}
              </NavItem>
            ))} */}
            {/* <a className="nav-item nav-link link-body-emphasis active" href="#">World</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">U.S.</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Technology</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Design</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Culture</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Business</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Politics</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Opinion</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Science</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Health</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Style</a>
                        <a className="nav-item nav-link link-body-emphasis" href="#">Travel</a> */}
          </Nav>
        </div>
      </div>

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

export default Layout;