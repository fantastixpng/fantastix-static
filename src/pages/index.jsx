import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Col, Container, Row } from "react-bootstrap"
import styled, { css } from "styled-components"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"

const Button2 = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <section id="hero" className="has-divider mt-10">
      <Container>
        <Row className="align-items-center justify-content-between">

          <Col md={6} sm={ {order: 2} } className="mb-5 mb-sm-0 aos-init aos-animate" data-aos="fade-left">
            <img src="" alt=""/>
            <StaticImage
              src="../images/web_development.svg"
              alt="Web development"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="order-sm-1 pr-xl-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            {/* <h5 class="mb-2">Android + Web</h5> */}
            {/* <h3 class="mb-0">We are</h3> */}
            <h1 className="display-3">Welcome to Fantastix</h1>
            {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
            {/* <div class="text-morph">
            <div class="word">Android</div>
            <div class="word">Desktop</div>
            <div class="word">IOS</div>
            <div class="word">Effect</div>
          </div> */}
            <p className="lead mb-8 mt-4">
              Building B.E.A.U.T.I.F.U.L website that helps you to optimize your processes, deeply engage your
              customers, and gain more profit.
              <br/>
            </p>
            <div className="d-sm-flex mb-4 mt-4 mt-4">
              <Button href="/request-quote" variant={"dark"} size={"lg"}>
                Get a free Quote
              </Button>
            </div>
          </Col>

        </Row>
      </Container>

      <div className="divider mt-50">
        <svg width="100%" height="96px" viewBox="0 0 100 100" preserveAspectRatio="none" className="injected-svg bg-dark"
             data-src="/images/dividers/divider-5.svg">
          <path fill="#ffffff"
                d="M0,-2.13162821e-14 C16.6666667,66.6666667 33.3333333,100 50,100 C66.6666667,100 83.3333333,66.6666667 100,-2.13162821e-14 L100,100 L0,100 L0,-2.13162821e-14 Z"></path>
          <path fill="#ffffff"
                d="M0,2.13162821e-14 C11.1107835,33.3333333 19.4438711,50 24.9992629,50 C33.3328419,50 41.666421,5.09814413e-13 50,5.09814413e-13 C58.333579,5.09814413e-13 66.6671581,50 75.0007371,50 C80.5561289,50 88.8892165,33.3333333 100,2.13162821e-14 L100,100 L0,100 L0,2.13162821e-14 Z"
                fill-opacity="0.1"></path>
          <path fill="#ffffff"
                d="M0,2.13162821e-14 C44.4442806,66.6666667 69.4442806,100 75,100 C80.5553918,100 88.8887251,66.6666667 100,2.13162821e-14 L100,100 L0,100 L0,2.13162821e-14 Z"
                fill-opacity="0.1"></path>
          <path fill="#ffffff"
                d="M0,-2.13162821e-14 C44.4442806,66.6666667 69.4442806,100 75,100 C80.5553918,100 88.8887251,66.6666667 100,-2.13162821e-14 L100,100 L0,100 L0,-2.13162821e-14 Z"
                fill-opacity="0.1"
                transform="translate(50.000000, 50.000000) scale(-1, 1) translate(-50.000000, -50.000000) "></path>
        </svg>
      </div>

    </section>

    <section id="services" className="bg-dark text-light text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6} xxl={5}>
            <h2 className="display-5 mb-6 aos-init aos-animate" data-aos="fade-down" data-aos-delay="0">Our Web Solutions</h2>
            <p className="lead mb-15 aos-init aos-animate" data-aos="fade-down" data-aos-delay="250">
              Discover what we do
            </p>
          </Col>
        </Row>

        <Row>
          {/*<Col lg={6} className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate" data-aos="fade-down" data-aos-delay="0">
        <svg width="60" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-action-1 d-block mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M42.692 0.254703C43.059 0.467472 43.343 0.798416 43.4976 1.19347C43.6523 1.58852 43.6683 2.02433 43.5432 2.4297L36.7895 24.3747H49.2507C49.617 24.3746 49.9752 24.4817 50.2812 24.6828C50.5873 24.8839 50.8277 25.1702 50.9729 25.5064C51.118 25.8426 51.1616 26.214 51.0981 26.5746C51.0347 26.9353 50.867 27.2695 50.6157 27.536L20.6157 59.411C20.3255 59.7196 19.9392 59.9209 19.5199 59.9819C19.1006 60.0429 18.673 59.9601 18.3068 59.747C17.9405 59.5339 17.6573 59.203 17.5032 58.8083C17.3491 58.4136 17.3333 57.9783 17.4582 57.5735L24.212 35.6247H11.7507C11.3845 35.6248 11.0263 35.5178 10.7203 35.3166C10.4142 35.1155 10.1738 34.8292 10.0286 34.493C9.88345 34.1568 9.83991 33.7854 9.90337 33.4248C9.96684 33.0641 10.1345 32.7299 10.3857 32.4635L40.3857 0.588453C40.6757 0.2802 41.0613 0.0790857 41.4801 0.0178105C41.8988 -0.0434648 42.3259 0.0387029 42.692 0.250953V0.254703ZM16.0895 31.8747H26.7507C27.0442 31.8746 27.3335 31.9435 27.5955 32.0756C27.8575 32.2077 28.0848 32.3995 28.2592 32.6355C28.4335 32.8716 28.5501 33.1452 28.5994 33.4344C28.6488 33.7237 28.6295 34.0205 28.5432 34.301L23.4132 50.9622L44.9082 28.1247H34.2507C33.9573 28.1248 33.668 28.0559 33.406 27.9238C33.144 27.7917 32.9167 27.5999 32.7423 27.3639C32.5679 27.1279 32.4514 26.8542 32.4021 26.565C32.3527 26.2757 32.372 25.9789 32.4582 25.6985L37.5882 9.0372L16.0895 31.8747Z"></path></svg>
        <h5 className="mb-4 mt-6">Mobile App Development</h5>
        <p className="mb-0">
          Affordable Mobile App Development for
          <br/>your business needs.
            We build top-notch, up-to-date integrated seamless native android apps for various android smartphones and tablets. No matter you open the app on any android device, your customers get the same visual quality and experience
        </p>
        </Col>*/}

          <Col lg={6} className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate" data-aos="fade-down" data-aos-delay="250">
            <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-action-2 d-block mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4545 30L1.48945 35.8463C1.18993 36.0063 0.939497 36.2447 0.764886 36.5359C0.590276 36.8272 0.498047 37.1604 0.498047 37.5C0.498047 37.8396 0.590276 38.1728 0.764886 38.4641C0.939497 38.7553 1.18993 38.9937 1.48945 39.1537L29.6145 54.1537C29.8857 54.2982 30.1884 54.3738 30.4957 54.3738C30.803 54.3738 31.1057 54.2982 31.377 54.1537L59.502 39.1537C59.8015 38.9937 60.0519 38.7553 60.2265 38.4641C60.4011 38.1728 60.4934 37.8396 60.4934 37.5C60.4934 37.1604 60.4011 36.8272 60.2265 36.5359C60.0519 36.2447 59.8015 36.0063 59.502 35.8463L48.5482 30L44.562 32.1263L54.642 37.5L30.4995 50.3737L6.35695 37.5L16.437 32.1263L12.4507 30H12.4545Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.6184 5.84695C29.8896 5.7025 30.1923 5.62695 30.4996 5.62695C30.807 5.62695 31.1096 5.7025 31.3809 5.84695L59.5059 20.847C59.8054 21.007 60.0558 21.2454 60.2304 21.5366C60.405 21.8279 60.4973 22.1611 60.4973 22.5007C60.4973 22.8403 60.405 23.1735 60.2304 23.4648C60.0558 23.756 59.8054 23.9944 59.5059 24.1545L31.3809 39.1545C31.1096 39.2989 30.807 39.3745 30.4996 39.3745C30.1923 39.3745 29.8896 39.2989 29.6184 39.1545L1.49336 24.1545C1.19384 23.9944 0.943403 23.756 0.768792 23.4648C0.594182 23.1735 0.501953 22.8403 0.501953 22.5007C0.501953 22.1611 0.594182 21.8279 0.768792 21.5366C0.943403 21.2454 1.19384 21.007 1.49336 20.847L29.6184 5.84695ZM6.36086 22.5007L30.4996 35.3745L54.6421 22.5007L30.4996 9.62695L6.35711 22.5007H6.36086Z"></path></svg>
            <h5 className="mb-4 mt-6">Web Development</h5>
            <p className="mb-0">
              Affordable Website Development for<br/>your business needs.
            </p>
          </Col>

          <Col lg={6} className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate" data-aos="fade-down" data-aos-delay="500">
            <i className="bi bi"/>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-action-2 d-block mx-auto"><path d="M21.5625 50.625C22.1887 49.3762 22.5 47.5013 22.5 45H37.5C37.5 47.5013 37.8113 49.3762 38.4375 50.625H41.25C41.7473 50.625 42.2242 50.8225 42.5758 51.1742C42.9275 51.5258 43.125 52.0027 43.125 52.5C43.125 52.9973 42.9275 53.4742 42.5758 53.8258C42.2242 54.1775 41.7473 54.375 41.25 54.375H18.75C18.2527 54.375 17.7758 54.1775 17.4242 53.8258C17.0725 53.4742 16.875 52.9973 16.875 52.5C16.875 52.0027 17.0725 51.5258 17.4242 51.1742C17.7758 50.8225 18.2527 50.625 18.75 50.625H21.5625Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M52.4663 11.25H7.5C6.28125 11.25 5.6175 11.5425 5.2425 11.7937C4.83058 12.0805 4.50195 12.4713 4.29 12.9262C3.97035 13.5867 3.78671 14.3047 3.75 15.0375V37.5C3.75 38.7188 4.0425 39.3825 4.29375 39.7575C4.55625 40.1513 4.93125 40.4625 5.42625 40.71C6.05826 41.0161 6.74314 41.1982 7.44375 41.2463L7.5375 41.25H52.5C53.7188 41.25 54.3825 40.9575 54.7575 40.7062C55.1694 40.4195 55.4981 40.0287 55.71 39.5738C56.0161 38.9417 56.1982 38.2569 56.2463 37.5563L56.25 37.4625V15C56.25 13.7812 55.9575 13.1175 55.7062 12.7425C55.4196 12.3305 55.0288 12.0018 54.5738 11.79C53.9133 11.4703 53.1953 11.2867 52.4625 11.25H52.4663ZM52.5 7.5H7.5C0 7.5 0 15 0 15V37.5C0 45 7.5 45 7.5 45H52.5C60 45 60 37.5 60 37.5V15C60 7.5 52.5 7.5 52.5 7.5Z"></path></svg>
            <h5 className="mb-4 mt-6">
              E-commerce Development
            </h5>
            <p className="mb-0">
              We build e-commerce websites to is perfect <br/>for your business needs.
            </p>
          </Col>

        </Row>

        <Row className="justify-content-center">
          <Col className="col-auto mt-20">
            <Button variant={"outline-light"} href="/services" className="icon-link">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Button>
          </Col>
        </Row>

      </Container>
    </section>

    <section id="software-stacks" className="bg-light text-dark">
      <Container>
        <Row className="justify-content-center mb-10">
          <div className="col-xl-8 col-lg-9 text-center">
            <h2 className="display-5 mx-xl-10">Tools and Technologies</h2>
            <p className="lead">
              Tools and technologies I use for my projects.
            </p>
          </div>
        </Row>
        <Row className="row-cols-4 g-5 text-center">
          <Col>
            <StaticImage
              src="../images/icons/android-icon.svg"
              alt="Android"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/java-icon.svg"
              alt="Java"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/kotlin-icon.svg"
              alt="Kotlin"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/javascript-icon.svg"
              alt="JavaScript"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/mongodb-icon.svg"
              alt="MongoDB"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/mysql-icon.svg"
              alt="MySQL"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/nodejs-icon.svg"
              alt="NodeJs"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/php-icon.svg"
              alt="Php"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
        </Row>
      </Container>
    </section>

    <section id="pricing">
      <Container>
        <div className="row g-5 justify-content-center mb-10">
          <div className="col-md-9 col-lg-8 text-center">
            <h3 className="fw-light">Pricing</h3>
            <h2 className="display-5 text-capitalize">Website Design & Development</h2>
            <h2 className="xdisplay-4">Small to Medium sized Enterprises (SME's)</h2>
            <p className="mb-15 fs-4 text-muted">
              The website plans below are for Small to Medium sized Enterprises (SME's). If there are any features outside of our plans, we can include add-ons and customisations to meet the needs of your business.
            </p>
          </div>
        </div>

        <Row className="g-2 justify-content-center">
          <Col sm={10} md={3} lg={3} className="mb-8 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
              <div>
                <h5 className="fs-2 mb-4 text-dark-2">Silver Package</h5>
                <h2 className="display-6 mb-6">K2,500</h2>
                {/*<p className="mb-6">Suitable for Small-Sized Businesses.*/}
                {/*  <span className="text-nowrap">-</span>*/}
                {/*</p>*/}
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Design Up to 5 pages</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Mobile Responsive Design</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Social Sharing Options</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Contact Form</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Google Analytics Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Content Management System</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Social Media Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">2 Rounds of Revisions</h6>
                </div>
              </div>
              <Button href="/request-quote" className="btn-bg-1 mt-6 w-100">Enquire</Button>
            </div>
          </Col>
          <Col sm={10} md={3} lg={3} className="mb-8 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
              <div>
                <h5 className="fs-2 mb-4 text-dark-2">Bronze Package</h5>
                <h2 className="display-6 mb-6">K5,000</h2>
                {/*<p className="mb-6">Suitable for Medium-Sized Businesses.</p>*/}
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Design Up to 10 pages</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Mobile Responsive Design</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Social Sharing Options</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Photo Gallery</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Contact Form</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Content Management System</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Social Media Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Chatbot/Livechat Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Google Analytics Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Google Maps Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Newsletter Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">2 Rounds of Revisions</h6>
                </div>
              </div>
              <Button href="/request-quote" className="btn-bg-1 btn-action-1 mt-6 w-100">Enquire</Button>
            </div>
          </Col>
          <Col sm={10} md={3} lg={3} className="mb-8 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
              <div>
                <h2 className="fs-2 mb-4 text-dark-2">Gold Package</h2>
                <h2 className="display-6 mb-6">K15,000</h2>
                {/*<p className="mb-6">Suitable for Large Businesses.</p>*/}
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Design Up to 20 pages</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Mobile Responsive Design</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Social Sharing Options</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Photo Gallery</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Contact Form</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Content Management System</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Mobile Responsive Design</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Social Media Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Chatbot/Livechat Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Google Analytics Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Google Maps Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Search Engine Optimization</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">3 Rounds of Revisions</h6>
                </div>
              </div>
              <Button href="/request-quote" className="btn-bg-1 btn-action-3 mt-6 w-100">Enquire</Button>
            </div>
          </Col>
          <Col sm={10} md={3} lg={3} className="mb-8 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
              <div>
                <h2 className="fs-2 mb-4 text-dark-2">Platinum Package</h2>
                <h2 className="display-6 mb-6">K30,000</h2>
                {/*<p className="mb-6">Suitable for E-commerce</p>*/}
                {/*<strong className="mt-5 mb-2">Package details</strong>*/}
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Design Up to 30 pages</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Mobile Responsive Design</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Social Sharing Options</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Photo Gallery</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Contact Form</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Content Management System</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Social Media Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Chatbot/Livechat Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Google Analytics Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Google Maps Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Newsletter Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">eCommerce Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Search Engine Optimization</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">Contact page, About page, Blog feed * Blog post pages</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill"/>
                  <h6 className="ps-7">3 Rounds of Revisions</h6>
                </div>
              </div>
              <Button href="/request-quote" className="btn-bg-1 btn-action-3 mt-6 w-100">Enquire</Button>
            </div>
          </Col>
        </Row>

        <Row className="g-5">
          <Col className="d-grid justify-content-center">
            <span>(Additional pages costs K300 per page)</span>
            <span className="">*price excludes VAT, if applicable</span>
          </Col>
        </Row>
      </Container>
    </section>

    <StaticImage
      src="../images/logo.svg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="fantastix logo"
      style={{ marginBottom: `1.45rem` }}
    />

    <Button2
      href="https://github.com/styled-components/styled-components"
      target="_blank"
      rel="noopener"
      primary
    >
      GitHub
    </Button2>

    <Button2 as={Link} href="/docs">
      Documentation
    </Button2>

    <section className="bg-img-2">
      <Container>
        <Row className="mb-3 text-center">
          <Col>
            <h1 className="display-3">Hello</h1>
            <Button variant={"dark"}
                    className="btn-secondary rounded rounded-pill"
                    href="/request-quote">
              Get a free quote
            </Button>
          </Col>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default IndexPage
