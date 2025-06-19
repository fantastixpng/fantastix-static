import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap";
import { useSiteMetadata } from "../hooks/use-site-metadata";

import logoWhite from "../images/logo-white.svg"

const Footer = () => {
  const site = useSiteMetadata();

  return (
    <footer className="footer py-8 bg-dark py-5 pb-5 border-top text-light">

      <Container className={"mt-8"}>
        <Row className="mb-4 pb-10">
          <Col className="col-lg-4 col-md-4 mb-4 mb-10">
            <Link to="/" className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
              aria-label="Bootstrap">
              <figure className="d-block mb-2 mb-lg-0 mr-lg-4">
                <img src={logoWhite} alt="Fantastix logo" width="140" />
              </figure>
            </Link>
            <br />
            <small className="copyright d-block my-3 text-muted">&copy; {new Date().getFullYear()}. Fantastix🤘</small>

            {/* <small className="d-block my-3 text-muted">A company by <a href="https://www.christianaugustyn.me">Christian Augustyn</a>.</small>*/}
            {/*<small className="d-flex my-3 text-muted mb-6 mb-md-0">
        Made with
      <span className="love red">❤</span>
      <svg aria-labelledby="svg-inline--fa-title-gWKZGuhKgPHb" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-heart fa-w-16"><title id="svg-inline--fa-title-gWKZGuhKgPHb" className="">love</title><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" className=""></path></svg>
        in
      <a href="https://www.google.com/maps/place/Madang" target="_blank" className="link hover-white">Beautiful Madang</a>.
      </small> */}
            <small className="address d-block text-muted">DCA DWU-Compound Madang 511, Madang</small>
            <small className="d-block text-muted">
              <a href="https://what3words.com/ironic.inventors.movies" target="_blank"
                rel="noreferrer noopener" className="link link-secondary">
                ///ironic.inventors.movies
              </a>
            </small>

            {/*<small className="d-block my-3 text-muted">Made with <span className="heart red">❤</span> in Madang.</small>*/}
          </Col>
          <Col className="col-6 col-lg-2 col-md-4 col-sm-4 ms-lg-auto mb-5 mb-lg-0">
            <h6 className="text-gray-700 mb-3">Get in touch</h6>
            <ul className="list-unstyled text-small mb-5">
              <li><Link className="link-secondary text-decoration-none" to="/request-quote">Get a Quick Quote</Link></li>
              <li><Link className="link-secondary text-decoration-none" to="/contact">Submit an Inquiry</Link></li>
              {/*<li><Link className="link-secondary text-decoration-none" to="/contact">Book a Call</a></Link> */}
              <li><Link className="link-secondary text-decoration-none" to="/contact">Contact Us</Link></li>
            </ul>
            <ul className="nav flex-column list-unstyled text-small">
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none"
                href="mailto:{ site.email }">{site.email}</a></li>
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none"
                href="tel:{ site.mobile2 }">{site.mobile2}</a></li>
            </ul>
          </Col>
          {/*
        <div className="col-6 col-lg-2 col-md-4 col-sm-4 mb-4 mb-lg-0">
        <h6 className="text-gray-700 mb-3">Follow us</h6>
        <ul className="list-unstyled list-inline list-social">
          <li className="list-inline-item list-social-item me-3"><a href="https://www.facebook.com/fantastixpng"><img src="/img/social-icons/facebook-icon-white.svg" role="img"/></a></li>
          <li className="list-inline-item list-social-item me-3"><a href="https://www.instagram.com/fantastixpng"><img src="/img/social-icons/instagram-icon-white.svg" role="img"/></a></li>
          <li className="list-inline-item list-social-item me-3"><a href="https://www.linkedin.com/fantastixpng"><img src="/img/social-icons/linkedin-icon-white.svg" role="img"/></a></li>
          <li className="list-inline-item list-social-item me-3"><a href="https://github.com/fantastixpng"><img src="/img/social-icons/github-icon-white.svg" role="img" width="21"/></a></li>
        </ul>
      </div>
      */}
          <Col className="col-6 col-lg-2 col-md-4 col-sm-4 mb-3 mb-lg-0">
            <h6 className="text-gray-700 mb-3">Explore</h6>
            <ul className="nav flex-column list-unstyled text-small">
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/who-we-are">Who We
                Are</a></li>
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/our-work">Our
                Work</a></li>
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/media">Media</a></li> */}
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/careers">Careers</a></li> */}
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none"
                href="/pricing">Pricing</a></li>
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none"
                href="/services">Services</a></li>
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/privacy">Privacy Policy</a></li> */}
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/terms">Terms of Service</a></li> */}
            </ul>
          </Col>
          <Col className="col-6 col-lg-2 col-md-4 col-sm-4 mb-4">
            <h6 className="text-gray-700 mb-3">Our Services</h6>
            <ul className="nav flex-column list-unstyled text-small">
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">Web
                Design</a></li>
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">Web
                Development</a></li>
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">E-Commerce
                Development</a></li>
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">Wordpress
                Development</a></li>
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">Craft CMS Development</a></li> */}
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">WooCommerce
                Development</a></li>
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">Vue/React Development</a></li> */}
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">Shopify Development</a></li> */}
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">Squarespace Development</a></li> */}
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">Desktop Application Development</a></li> */}
              {/*<li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/services">Android App Development</a></li> */}
            </ul>
          </Col>
          <Col className="col-6 col-lg-2 col-md-4 col-sm-4 mb-3">
            <h6 className="text-gray-700 mb-3">Legal</h6>
            <ul className="nav flex-column list-unstyled text-small">
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/privacy">Privacy
                Policy</a></li>
              <li className="nav-item mb-1"><a className="link-secondary text-decoration-none" href="/terms">Terms of
                Service</a></li>
            </ul>
          </Col>

        </Row>

        <Row className="g-4 gap-4 g-lg-0 gap-lg-0 justify-content-between align-items-center mt-3">
          <Col sm={12} md={12} lg={8} className="col-12 text-sm-center text-md-center text-lg-start">
            <small className="text-muted">Made with <span className="red">❤</span> in <a
              href="https://www.google.com/maps/place/Madang" target="_blank" rel="noreferrer"
              className="link hover-white link-secondary">Beautiful Madang</a> by <a
                href="https://www.christianaugustyn.me" target="_blank" rel="noreferrer" className="link hover-white link-secondary">Christian
                Augustyn.</a></small>
          </Col>
          <Col sm={12} md={12} lg={4} className="col-12 text-sm-center text-md-center text-lg-end">
            <a href="https://twitter.com/fantastixpng" className="text-action-1 ms-6" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="fill-light-1 aos-init aos-animate" data-aos="fade-down" data-aos-delay="650">
                <path
                  d="M22.4591 6C21.6891 6.35 20.8591 6.58 19.9991 6.69C20.8791 6.16 21.5591 5.32 21.8791 4.31C21.0491 4.81 20.1291 5.16 19.1591 5.36C18.3691 4.5 17.2591 4 15.9991 4C13.6491 4 11.7291 5.92 11.7291 8.29C11.7291 8.63 11.7691 8.96 11.8391 9.27C8.27906 9.09 5.10906 7.38 2.99906 4.79C2.62906 5.42 2.41906 6.16 2.41906 6.94C2.41906 8.43 3.16906 9.75 4.32906 10.5C3.61906 10.5 2.95906 10.3 2.37906 10V10.03C2.37906 12.11 3.85906 13.85 5.81906 14.24C5.18979 14.4122 4.52916 14.4362 3.88906 14.31C4.16067 15.1625 4.6926 15.9084 5.41008 16.4429C6.12756 16.9775 6.99451 17.2737 7.88906 17.29C6.37269 18.4904 4.49306 19.1393 2.55906 19.13C2.21906 19.13 1.87906 19.11 1.53906 19.07C3.43906 20.29 5.69906 21 8.11906 21C15.9991 21 20.3291 14.46 20.3291 8.79C20.3291 8.6 20.3291 8.42 20.3191 8.23C21.1591 7.63 21.8791 6.87 22.4591 6Z"></path>
              </svg>
            </a>
            <a href={site.facebook} className="text-action-1 ms-6" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="fill-light-1 aos-init aos-animate" data-aos="fade-down" data-aos-delay="750">
                <path
                  d="M12 2.03906C6.5 2.03906 2 6.52906 2 12.0591C2 17.0591 5.66 21.2091 10.44 21.9591V14.9591H7.9V12.0591H10.44V9.84906C10.44 7.33906 11.93 5.95906 14.22 5.95906C15.31 5.95906 16.45 6.14906 16.45 6.14906V8.61906H15.19C13.95 8.61906 13.56 9.38906 13.56 10.1791V12.0591H16.34L15.89 14.9591H13.56V21.9591C15.9164 21.5869 18.0622 20.3846 19.6099 18.5691C21.1576 16.7537 22.0054 14.4447 22 12.0591C22 6.52906 17.5 2.03906 12 2.03906Z"></path>
              </svg>
            </a>
            <a href={site.instagram} className="text-action-1 ms-6 " target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="fill-light-1 aos-init aos-animate" data-aos="fade-down" data-aos-delay="900">
                <path
                  d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"></path>
              </svg>
            </a>
            <a href={site.linkedin} className="text-action-1 ms-6" target="_blank" rel="noreferrer">
              <img src="/images/social-icons/linkedin-icon-white.svg" role="img" />
            </a>
            <a href={site.messenger} className="text-action-1 ms-6 " target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-messenger" viewBox="0 0 16 16">
                <path
                  d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B67570523228&text=Hello+We+wish+to+hire+you&app_absent=0"
              className="text-action-1 ms-6" target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp" />
            </a>
            {/*<li><a className="link-secondary text-decoration-none"*/}
            {/*       href="https://www.facebook.com/fantastixpng">Facebook</a></li>*/}
            {/*<li><a className="link-secondary text-decoration-none"*/}
            {/*       href="https://www.instagram.com/fantastixpng">Instagram</a></li>*/}
            {/*<li><a className="link-secondary text-decoration-none"*/}
            {/*       href="https://www.linkedin.com/fantastixpng">LinkedIn</a></li>*/}
            {/*<li><a className="link-secondary text-decoration-none"*/}
            {/*       href="https://github.com/fantastixpng">Github</a></li>*/}
            {/*<li><a className="link-secondary text-decoration-none"*/}
            {/*       href="https://wa.me/message/M327NNFJEGXYE1">WhatsApp</a>*/}
            {/*</li>*/}

          </Col>
        </Row>

      </Container>

      {/*<Container className="mt-8">*/}
      {/*  <Row className="mb-4 justify-content-center">*/}
      {/*    <Col as={"feGaussianBlur"} className="col-auto">*/}
      {/*      <Link to="/">*/}
      {/*        <img src={logoWhite} className="icon" role="img" alt="fantastix" width="140"/>*/}
      {/*      </Link>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*  <div className="row mb-4">*/}
      {/*    <div className="col">*/}
      {/*      <ul className="nav justify-content-center">*/}
      {/*        <li className="nav-item"><Link to="/who-we-are" className="nav-link link-secondary">Who We Are</Link></li>*/}
      {/*        <li className="nav-item"><Link to="/our-work" className="nav-link link-secondary">Our Work</Link></li>*/}
      {/*        <li className="nav-item"><Link to="/services" className="nav-link link-secondary">Services</Link></li>*/}
      {/*        <li className="nav-item"><Link to="/pricing" className="nav-link link-secondary">Pricing</Link></li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="row justify-content-center mt-5 mb-5">*/}
      {/*    <div className="col-auto">*/}
      {/*      <ul className="nav">*/}
      {/*        <li className="nav-item">*/}
      {/*          <a href="https://twitter.com/fantastixpng" className="nav-link">*/}
      {/*            <svg className="icon bg-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li className="nav-item">*/}
      {/*          <div id="custom_html-2" className="widget_text footer-column-widget footer-column-widget-one widget_custom_html">*/}
      {/*            <div className="textwidget custom-html-widget">*/}
      {/*              <p>Follow Us</p>*/}
      {/*              <div className="icons uk-flex">*/}
      {/*                <div className="uk-padding-remove"><a href="https://www.facebook.com/facebook/" target="_blank" rel="noopener"><img width="20" height="20" alt="facebook footer icon" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-facebook.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-facebook.svg"/></a></div>*/}
      {/*                <div className="uk-padding-remove"><a href="https://www.instagram.com/facebook/" target="_blank" rel="noopener"><img width="20" height="20" alt="Instagram" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-instagram.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-instagram.svg"/></a></div>*/}
      {/*                <div className="uk-padding-remove"><a href="https://twitter.com/facebook" target="_blank" rel="noopener"><img width="20" height="20" alt="twitter footer icon" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-twitter.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-twitter.svg"/></a></div>*/}
      {/*                <div className="uk-padding-remove"><a href="https://www.youtube.com/facebook/" target="_blank" rel="noopener"><img width="20" height="20" alt="YouTube" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-youtube.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-youtube.svg"/></a></div>*/}
      {/*                <div className="uk-padding-remove"><a href="https://www.linkedin.com/company/facebook" target="_blank" rel="noopener"><img width="20" height="20" alt="linkedin footer icon" uk-img="data-src:/wp-content/themes/fbcorp/assets/images/footer-linkedin.svg" src="https://about.fb.com/wp-content/themes/fbcorp/assets/images/footer-linkedin.svg"/></a></div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </li>*/}
      {/*        <li className="nav-item">*/}
      {/*          <a href="https://www.linkedin.com/company/fantastixpng/" className="nav-link">*/}
      {/*            <svg className="icon bg-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li className="nav-item">*/}
      {/*          <a href="https://www.facebook.com/fantastixpng" className="nav-link">*/}
      {/*            <svg className="icon bg-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path></svg>*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li className="nav-item">*/}
      {/*          <a href="https://github.com/fantastixpng" className="nav-link">*/}
      {/*            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><path d="m256 0c-141.39 0-256 114.61-256 256 0 113.1 73.345 209.05 175.07 242.91 12.81 2.35 17.48-5.56 17.48-12.35 0-6.06-.22-22.17-.35-43.53-71.21 15.46-86.23-34.32-86.23-34.32-11.645-29.58-28.429-37.45-28.429-37.45-23.244-15.88 1.76-15.56 1.76-15.56 25.699 1.8 39.209 26.38 39.209 26.38 22.84 39.12 59.92 27.82 74.51 21.27 2.32-16.54 8.93-27.82 16.25-34.22-56.84-6.45-116.611-28.43-116.611-126.52 0-27.94 9.981-50.8 26.351-68.7-2.64-6.47-11.42-32.5 2.5-67.74 0 0 21.5-6.889 70.41 26.24 20.41-5.69 42.32-8.52 64.09-8.61 21.73.1 43.64 2.92 64.09 8.61 48.87-33.129 70.32-26.24 70.32-26.24 13.97 35.24 5.19 61.27 2.55 67.74 16.41 17.9 26.32 40.76 26.32 68.7 0 98.35-59.86 119.99-116.89 126.32 9.19 7.91 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.22 0 6.85 4.6 14.82 17.6 12.32 101.65-33.92 174.93-129.8 174.93-242.88 0-141.39-114.63-256-256.02-256" fill="#fff"/></svg>*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <Row className="justify-content-center text-center">*/}
      {/*    <Col xl={10}>*/}
      {/*      <p><b>Made with <span className="red">❤</span> from Beautiful Madang</b></p>*/}
      {/*      <small>&copy; {new Date().getFullYear()} Fantastix. View our <Link to="/privacy" className="link-secondary">Privacy Policy</Link> and <Link to="/terms" className="link-secondary">Terms of Service</Link>.<br/></small>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*</Container>*/}

    </footer>
  )
}

export default Footer