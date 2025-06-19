import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import { useSiteMetadata } from "../hooks/use-site-metadata";

import logoWhite from "../images/logo-white.svg"

const Footer = () => {
  const { site } = useSiteMetadata()

  return (
    <footer className="footer py-8 bg-black py-5 pb-5 border-top text-light">

      <Container className="mt-8">
        <Row className="mb-4 justify-content-center">
          <Col className="col-auto">
            <Link to="/">
              <img src={logoWhite} className="icon" role="img" alt="fantastix" width="140" />
            </Link>
          </Col>
        </Row>
        <div className="row mb-4">
          <div className="col">
            <ul className="nav justify-content-center">
              <li className="nav-item"><Link to="/blog" className="nav-link link-secondary">Blog</Link></li>
              <li className="nav-item"><Link to="/#who-we-are" className="nav-link link-secondary">Who We Are</Link></li>
              <li className="nav-item"><Link to="/#our-work" className="nav-link link-secondary">Our Work</Link></li>
              <li className="nav-item"><Link to="/#services" className="nav-link link-secondary">Services</Link></li>
              <li className="nav-item"><Link to="/#pricing" className="nav-link link-secondary">Pricing</Link></li>
              <li className="nav-item"><Link to="/#contact" className="nav-link link-secondary">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-auto">
            <ul className="nav">
              {/*<li className="nav-item">
                <a href="https://twitter.com/fantastixpng" className="nav-link">
                  <svg className="icon bg-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>
                </a>
              </li>*/}
              {/*<li className="nav-item">
                <div id="custom_html-2" className="widget_text footer-column-widget footer-column-widget-one widget_custom_html">
                  <div className="textwidget custom-html-widget">
                    <p>Follow Us</p>
                    <div className="icons uk-flex">
                      <div className="uk-padding-remove"><a href="https://www.facebook.com/facebook/" target="_blank" rel="noopener"><img width="20" height="20" alt="facebook footer icon" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-facebook.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-facebook.svg"/></a></div>
                      <div className="uk-padding-remove"><a href="https://www.instagram.com/facebook/" target="_blank" rel="noopener"><img width="20" height="20" alt="Instagram" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-instagram.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-instagram.svg"/></a></div>
                      <div className="uk-padding-remove"><a href="https://twitter.com/facebook" target="_blank" rel="noopener"><img width="20" height="20" alt="twitter footer icon" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-twitter.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-twitter.svg"/></a></div>
                      <div className="uk-padding-remove"><a href="https://www.youtube.com/facebook/" target="_blank" rel="noopener"><img width="20" height="20" alt="YouTube" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-youtube.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-youtube.svg"/></a></div>
                      <div className="uk-padding-remove"><a href="https://www.linkedin.com/company/facebook" target="_blank" rel="noopener"><img width="20" height="20" alt="linkedin footer icon" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-linkedin.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-linkedin.svg"/></a></div>
                    </div>
                  </div>
                </div>
              </li>*/}
              <li className="nav-item">
                <a href="https://www.linkedin.com/company/fantastixpng/" className="nav-link">
                  <svg className="icon bg-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.facebook.com/fantastixpng" className="nav-link">
                  <svg className="icon bg-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path></svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/fantastixpng" className="nav-link">
                  <svg className="icon" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.39 0-256 114.61-256 256 0 113.1 73.345 209.05 175.07 242.91 12.81 2.35 17.48-5.56 17.48-12.35 0-6.06-.22-22.17-.35-43.53-71.21 15.46-86.23-34.32-86.23-34.32-11.645-29.58-28.429-37.45-28.429-37.45-23.244-15.88 1.76-15.56 1.76-15.56 25.699 1.8 39.209 26.38 39.209 26.38 22.84 39.12 59.92 27.82 74.51 21.27 2.32-16.54 8.93-27.82 16.25-34.22-56.84-6.45-116.611-28.43-116.611-126.52 0-27.94 9.981-50.8 26.351-68.7-2.64-6.47-11.42-32.5 2.5-67.74 0 0 21.5-6.889 70.41 26.24 20.41-5.69 42.32-8.52 64.09-8.61 21.73.1 43.64 2.92 64.09 8.61 48.87-33.129 70.32-26.24 70.32-26.24 13.97 35.24 5.19 61.27 2.55 67.74 16.41 17.9 26.32 40.76 26.32 68.7 0 98.35-59.86 119.99-116.89 126.32 9.19 7.91 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.22 0 6.85 4.6 14.82 17.6 12.32 101.65-33.92 174.93-129.8 174.93-242.88 0-141.39-114.63-256-256.02-256" fill="#fff" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Row className="justify-content-center text-center">
          <Col xl={10}>
            <p>Made with <span className="red">❤</span> from <a href="https://www.google.com/maps/place/Madang" target="_blank" className="link hover-white">Beautiful Madang</a>.</p>
            <small>&copy; {new Date().getFullYear()} Fantastix. {/*View our <Link to="/privacy" className="link-secondary">Privacy Policy</Link> and <Link to="/terms" className="link-secondary">Terms of Service</Link>.<br/>*/}</small>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer;