import React, { Children, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Col, Container, Row, Modal, Card, CardBody, CardHeader, CardText } from "react-bootstrap"
import { useSpring, animated } from "react-spring"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm"
import ProjectCard from "../components/ProjectCard"
import RequestQuoteFormStep from "../components/RequestQuoteFormStep"

import signatures from "../data/signatures"
import { HeadFC } from "gatsby"
import WhoWeAre from "../components/Sections/WhoWeAre"
import OurWork from "../components/Sections/OurWork"
import PricingCard from "../components/Sections/PricingCard"
import PricingCard2 from "../components/Sections/PricingCard2"
import OurBestPractices from "../components/Sections/OurBestPractices"

// #1f2532

// const Button2 = styled.a`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;
//
//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${props => props.primary && css`
//     background: white;
//     color: black;
//   `}
// `

// const Button = styled.button`
//   background: var(--color-primary);
// `;

function Number() {
  const [flip, set] = useState(false)
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1,
    delay: 200,
    // config: config.molasses,
    onRest: () => set(!flip),
  })

  return <animated.div>{number.to(n => n.toFixed(2))}</animated.div>
}

function ModalButton() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant={"dark"} size={"lg"} onClick={handleShow}>
        Get a free Quote
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
        fullscreen="false"
      >
        <Modal.Header closeButton>
          <Modal.Title>Request a Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RequestQuoteFormStep />
        </Modal.Body>
        {/*<Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Prev
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>*/}
      </Modal>
    </>
  )
}

export const Head: HeadFC = () => <title>Fantastix</title>

const IndexPage = () => (
  <Layout>
    {/*<Number/>*/}

    <section id="hero" className="has-divider mt-20">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col
            md={6}
            sm={{ order: 2 }}
            className="mb-5 mb-sm-0 aos-init aos-animate"
            data-aos="fade-left"
          >
            <StaticImage
              src="../images/web_development.svg"
              alt="Web development"
              className="img-fluid"
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col
            md={6}
            className="order-sm-1 pr-xl-5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/*<h1 className="display-3">New Year✨🎆, New Way To Present Your Business.</h1>*/}
            {/* <h1 className="display-3">Beautiful way to present your business</h1> */}
            <h1 className="display-3">We build softwares</h1>
            {/* <p className="lead mb-8 mt-4">
              Building B.E.A.U.T.I.F.U.L website that helps you to optimize your processes, deeply engage your
              customers, and gain more profit.
              <br/>
            </p> */}
            <div className="d-sm-flex mb-4 mt-4 mt-4">
              <Button href="#contact" variant={"dark"} size={"lg"}>
                Get a free Quote
              </Button>
              {/*<ModalButton />*/}
            </div>
          </Col>
        </Row>
      </Container>

      <div className="divider mt-10 mt-50">
        <svg
          width="100%"
          height="96px"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="injected-svg bg-dark"
          data-src="/images/dividers/divider-5.svg"
        >
          <path
            fill="#ffffff"
            d="M0,-2.13162821e-14 C16.6666667,66.6666667 33.3333333,100 50,100 C66.6666667,100 83.3333333,66.6666667 100,-2.13162821e-14 L100,100 L0,100 L0,-2.13162821e-14 Z"
          ></path>
          <path
            fill="#ffffff"
            d="M0,2.13162821e-14 C11.1107835,33.3333333 19.4438711,50 24.9992629,50 C33.3328419,50 41.666421,5.09814413e-13 50,5.09814413e-13 C58.333579,5.09814413e-13 66.6671581,50 75.0007371,50 C80.5561289,50 88.8892165,33.3333333 100,2.13162821e-14 L100,100 L0,100 L0,2.13162821e-14 Z"
            fillOpacity="0.1"
          ></path>
          <path
            fill="#ffffff"
            d="M0,2.13162821e-14 C44.4442806,66.6666667 69.4442806,100 75,100 C80.5553918,100 88.8887251,66.6666667 100,2.13162821e-14 L100,100 L0,100 L0,2.13162821e-14 Z"
            fillOpacity="0.1"
          ></path>
          <path
            fill="#ffffff"
            d="M0,-2.13162821e-14 C44.4442806,66.6666667 69.4442806,100 75,100 C80.5553918,100 88.8887251,66.6666667 100,-2.13162821e-14 L100,100 L0,100 L0,-2.13162821e-14 Z"
            fillOpacity="0.1"
            transform="translate(50.000000, 50.000000) scale(-1, 1) translate(-50.000000, -50.000000) "
          ></path>
        </svg>
      </div>
    </section>

    <WhoWeAre/>

    <OurWork />

    <section id="services" className="bg-dark text-light text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6} xxl={5}>
            <span className="fw-light">Services</span>
            <h5
              className="display-5 mb-6 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-delay="0"
            >
              Our Web Solutions
            </h5>
            <p
              className="lead mb-15 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              Discover what we do
            </p>
          </Col>
        </Row>

        <Row>
          <Col
            lg={6}
            className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-action-2 d-block mx-auto"
            >
              <path d="M11 17.5C10.5858 17.5 10.25 17.8358 10.25 18.25C10.25 18.6642 10.5858 19 11 19H13C13.4142 19 13.75 18.6642 13.75 18.25C13.75 17.8358 13.4142 17.5 13 17.5H11Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 2C6.75736 2 5.75 3.00736 5.75 4.25V19.75C5.75 20.9926 6.75736 22 8 22H16C17.2426 22 18.25 20.9926 18.25 19.75V4.25C18.25 3.00736 17.2426 2 16 2H8ZM7.25 4.25C7.25 3.83579 7.58579 3.5 8 3.5H16C16.4142 3.5 16.75 3.83579 16.75 4.25V19.75C16.75 20.1642 16.4142 20.5 16 20.5H8C7.58579 20.5 7.25 20.1642 7.25 19.75V4.25Z"
              />
            </svg>

            <h5 className="mb-4 mt-6">Mobile App Development</h5>
            <p className="mb-0">
              Affordable Mobile App Development for
              <br />
              your business needs. We build top-notch, up-to-date integrated
              seamless native android apps for various android smartphones and
              tablets. No matter you open the app on any android device, your
              customers get the same visual quality and experience
            </p>
          </Col>

          <Col
            lg={6}
            className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <svg
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-action-2 d-block mx-auto"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4545 30L1.48945 35.8463C1.18993 36.0063 0.939497 36.2447 0.764886 36.5359C0.590276 36.8272 0.498047 37.1604 0.498047 37.5C0.498047 37.8396 0.590276 38.1728 0.764886 38.4641C0.939497 38.7553 1.18993 38.9937 1.48945 39.1537L29.6145 54.1537C29.8857 54.2982 30.1884 54.3738 30.4957 54.3738C30.803 54.3738 31.1057 54.2982 31.377 54.1537L59.502 39.1537C59.8015 38.9937 60.0519 38.7553 60.2265 38.4641C60.4011 38.1728 60.4934 37.8396 60.4934 37.5C60.4934 37.1604 60.4011 36.8272 60.2265 36.5359C60.0519 36.2447 59.8015 36.0063 59.502 35.8463L48.5482 30L44.562 32.1263L54.642 37.5L30.4995 50.3737L6.35695 37.5L16.437 32.1263L12.4507 30H12.4545Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.6184 5.84695C29.8896 5.7025 30.1923 5.62695 30.4996 5.62695C30.807 5.62695 31.1096 5.7025 31.3809 5.84695L59.5059 20.847C59.8054 21.007 60.0558 21.2454 60.2304 21.5366C60.405 21.8279 60.4973 22.1611 60.4973 22.5007C60.4973 22.8403 60.405 23.1735 60.2304 23.4648C60.0558 23.756 59.8054 23.9944 59.5059 24.1545L31.3809 39.1545C31.1096 39.2989 30.807 39.3745 30.4996 39.3745C30.1923 39.3745 29.8896 39.2989 29.6184 39.1545L1.49336 24.1545C1.19384 23.9944 0.943403 23.756 0.768792 23.4648C0.594182 23.1735 0.501953 22.8403 0.501953 22.5007C0.501953 22.1611 0.594182 21.8279 0.768792 21.5366C0.943403 21.2454 1.19384 21.007 1.49336 20.847L29.6184 5.84695ZM6.36086 22.5007L30.4996 35.3745L54.6421 22.5007L30.4996 9.62695L6.35711 22.5007H6.36086Z"
              ></path>
            </svg>
            <h5 className="mb-4 mt-6">Web App Development</h5>
            <p className="mb-0">
              We bring our vast expertise to build perfectly working and
              cost-effective web applications using modern robust technologies.
            </p>
          </Col>

          <Col
            lg={6}
            className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-action-2 d-block mx-auto"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.692 0.254703C43.059 0.467472 43.343 0.798416 43.4976 1.19347C43.6523 1.58852 43.6683 2.02433 43.5432 2.4297L36.7895 24.3747H49.2507C49.617 24.3746 49.9752 24.4817 50.2812 24.6828C50.5873 24.8839 50.8277 25.1702 50.9729 25.5064C51.118 25.8426 51.1616 26.214 51.0981 26.5746C51.0347 26.9353 50.867 27.2695 50.6157 27.536L20.6157 59.411C20.3255 59.7196 19.9392 59.9209 19.5199 59.9819C19.1006 60.0429 18.673 59.9601 18.3068 59.747C17.9405 59.5339 17.6573 59.203 17.5032 58.8083C17.3491 58.4136 17.3333 57.9783 17.4582 57.5735L24.212 35.6247H11.7507C11.3845 35.6248 11.0263 35.5178 10.7203 35.3166C10.4142 35.1155 10.1738 34.8292 10.0286 34.493C9.88345 34.1568 9.83991 33.7854 9.90337 33.4248C9.96684 33.0641 10.1345 32.7299 10.3857 32.4635L40.3857 0.588453C40.6757 0.2802 41.0613 0.0790857 41.4801 0.0178105C41.8988 -0.0434648 42.3259 0.0387029 42.692 0.250953V0.254703ZM16.0895 31.8747H26.7507C27.0442 31.8746 27.3335 31.9435 27.5955 32.0756C27.8575 32.2077 28.0848 32.3995 28.2592 32.6355C28.4335 32.8716 28.5501 33.1452 28.5994 33.4344C28.6488 33.7237 28.6295 34.0205 28.5432 34.301L23.4132 50.9622L44.9082 28.1247H34.2507C33.9573 28.1248 33.668 28.0559 33.406 27.9238C33.144 27.7917 32.9167 27.5999 32.7423 27.3639C32.5679 27.1279 32.4514 26.8542 32.4021 26.565C32.3527 26.2757 32.372 25.9789 32.4582 25.6985L37.5882 9.0372L16.0895 31.8747Z"
              ></path>
            </svg>
            <h5 className="mb-4 mt-6">Backend/API Development</h5>
            <p className="mb-0">
              Affordable Mobile App Development for
              <br />
              your business needs. We build top-notch, up-to-date integrated
              seamless native android apps for various android smartphones and
              tablets. No matter you open the app on any android device, your
              customers get the same visual quality and experience
            </p>
          </Col>

          <Col
            lg={6}
            className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            {/* <i className="bi bi"/> */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-action-2 d-block mx-auto"
            >
              <path d="M21.5625 50.625C22.1887 49.3762 22.5 47.5013 22.5 45H37.5C37.5 47.5013 37.8113 49.3762 38.4375 50.625H41.25C41.7473 50.625 42.2242 50.8225 42.5758 51.1742C42.9275 51.5258 43.125 52.0027 43.125 52.5C43.125 52.9973 42.9275 53.4742 42.5758 53.8258C42.2242 54.1775 41.7473 54.375 41.25 54.375H18.75C18.2527 54.375 17.7758 54.1775 17.4242 53.8258C17.0725 53.4742 16.875 52.9973 16.875 52.5C16.875 52.0027 17.0725 51.5258 17.4242 51.1742C17.7758 50.8225 18.2527 50.625 18.75 50.625H21.5625Z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.4663 11.25H7.5C6.28125 11.25 5.6175 11.5425 5.2425 11.7937C4.83058 12.0805 4.50195 12.4713 4.29 12.9262C3.97035 13.5867 3.78671 14.3047 3.75 15.0375V37.5C3.75 38.7188 4.0425 39.3825 4.29375 39.7575C4.55625 40.1513 4.93125 40.4625 5.42625 40.71C6.05826 41.0161 6.74314 41.1982 7.44375 41.2463L7.5375 41.25H52.5C53.7188 41.25 54.3825 40.9575 54.7575 40.7062C55.1694 40.4195 55.4981 40.0287 55.71 39.5738C56.0161 38.9417 56.1982 38.2569 56.2463 37.5563L56.25 37.4625V15C56.25 13.7812 55.9575 13.1175 55.7062 12.7425C55.4196 12.3305 55.0288 12.0018 54.5738 11.79C53.9133 11.4703 53.1953 11.2867 52.4625 11.25H52.4663ZM52.5 7.5H7.5C0 7.5 0 15 0 15V37.5C0 45 7.5 45 7.5 45H52.5C60 45 60 37.5 60 37.5V15C60 7.5 52.5 7.5 52.5 7.5Z"
              ></path>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-app-indicator" viewBox="0 0 60 60">
              <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
              <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            </svg> */}
            <h5 className="mb-4 mt-6">Hybrid App Development</h5>
            <p className="mb-0">
              We build hybrid apps that features consistent experience across
              devices.
            </p>
          </Col>
        </Row>

        {/*<Row className="justify-content-center">
          <Col className="col-auto mt-20">
            <Button variant={"outline-light"} href="/services" className="icon-link">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Button>
          </Col>
        </Row>*/}
      </Container>
    </section>

    <section id="process" className="">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6} xxl={5}>
            <h5
              className="display-5 mb-10 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-delay="0"
            >
              How We Get Started
            </h5>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6} className="mt-10">
            <img src="bg-showcase-1.jpg" alt="" className="img-fluid" />
          </Col>
          <Col sm={12} md={6} lg={6} className="mt-10">
            <div className="">
              <ul className="big-bullet-points-list">
                <li className="bullet-points">
                  We schedule a meeting with you to discover your project
                </li>
                <li className="bullet-points">
                  Then we break down your project into iterations to estimate
                  them with our developers
                </li>
                <li className="bullet-points">
                  We create a proposal and explain all details related to the
                  working process
                </li>
                <li className="bullet-points">
                  Once we get a go-ahead, our project manager kicks off internal
                  meeting to get started
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* <section className="bg-img-1 text-light">
      <Container>
        <Row className="justify-content-center mb-10">
          <div className="col-xl-8 col-lg-9 text-center">
            <h5 className="display-5 mx-xl-10">Industry</h5>
            <p className="lead">
              Industries we operate in
            </p>
          </div>
        </Row>
        <Row className="row-cols-4 gap-1 text-center">
          <Card>
          <CardHeader>dd</CardHeader>
          <CardBody>
            <CardText>dd</CardText>
          </CardBody>
          </Card>
          <Card>
            <CardBody>dd</CardBody>
          </Card>
          <Card>
            <CardBody>dd</CardBody>
          </Card>
          <Card>
            <CardBody>dd</CardBody>
          </Card>
        </Row>
      </Container>
    </section> */}

    <section id="software-stacks" className="bg-light text-dark">
      <Container>
        <Row className="justify-content-center mb-10">
          <div className="col-xl-8 col-lg-9 text-center">
            <h5 className="display-5 mx-xl-10">Tools and Technologies</h5>
            <p className="lead">
              Tools and technologies we use for our projects.
            </p>
          </div>
        </Row>
        <Row className="row-cols-4 g-5 text-center">
          <Col>
            <StaticImage
              src="../images/icons/github-icon.svg"
              alt="Kotlin"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/wordpress-icon.svg"
              alt="Kotlin"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/npm.png"
              alt="Kotlin"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/webpack-icon.png"
              alt="Kotlin"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/gulp.png"
              alt="Kotlin"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/react-icon.svg"
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
          <Col>
            <StaticImage
              src="../images/icons/gatsbyjs-icon.svg"
              alt="Gatsby"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/android-icon.svg"
              alt="Gatsby"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/python-icon.svg"
              alt="Gatsby"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/tailwind-css-icon.svg"
              alt="Gatsby"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/vuejs-icon.svg"
              alt="Gatsby"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
        </Row>
      </Container>
    </section>

    {/* <OurBestPractices/> */}

    {/* <PricingCard /> */}
    {/* <PricingCard2 /> */}

    {/*<StaticImage*/}
    {/*  src="../images/logo.svg"*/}
    {/*  width={300}*/}
    {/*  quality={95}*/}
    {/*  formats={["auto", "webp", "avif"]}*/}
    {/*  alt="fantastix logo"*/}
    {/*  style={{ marginBottom: `1.45rem` }}*/}
    {/*/>*/}

    {/*<Button2*/}
    {/*  href="https://github.com/styled-components/styled-components"*/}
    {/*  target="_blank"*/}
    {/*  rel="noopener"*/}
    {/*  primary*/}
    {/*>*/}
    {/*  GitHub*/}
    {/*</Button2>*/}

    {/*<Button2 as={Link} href="/docs">*/}
    {/*  Documentation*/}
    {/*</Button2>*/}

    <section id="contact" className="position-relative">
      <Container>
        <Row className="mb-4 mb-lg-5">
          <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto">
            <h3 className="display-5 fw-normal">Contact us</h3>
            <h2 className="display-3">How can we help you?</h2>
            {/*<p>Ready to build the app of your dreams? Interested to find out more about the Fantastix? Fill out the form below to get in contact with our team to discuss your website needs.</p>*/}
            <p>
              We love hearing from our clients. Whether its feedback, queries or
              even criticism, we are all ears.
              <br />
              Contact us now to discuss how we can scale your project to the
              next level and we will get in touch with you as soon as possible,
              we promise🤝.
            </p>
          </div>
        </Row>

        <ContactForm />
      </Container>
    </section>

    {/*<section>

    Let Fantastix Present your business in a whole new way.

    </section>*/}

    {/*<section className="bg-img-2">
      <Container>
        <Row className="mb-3 text-center">
          <Col>
            <h5 className="display-3">Let's talk about your project?</h5>
            <Button variant={"dark"}
                    className="btn-secondary"
                    href="#contact">
              Get a free quote
            </Button>
          </Col>
        </Row>
      </Container>
    </section>*/}

    {/*<section class="project-start-area ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="project-start-image">
              <img src="/bg-showcase-1.jpg" alt="project"/>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="project-start-content">
              <h2>We Like to Start Your Project With Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              <a class="default-btn" href="/contact"><i class="flaticon-web"></i>Get Started<span></span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="circle-shape1"><img src="/bg-showcase-2.jpg" alt="project"/></div>
    </section>*/}

    {/* <form name="contact" netlify>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form> */}

    <section id="signature" className="bg-light text-dark text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6} xxl={5}>
            <span className="fw-light">Our Signature</span>
            <h5
              className="display-5 mb-6 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-delay="0"
            >
              Our Cool Signature
            </h5>
            <p
              className="lead mb-15 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              {signatures.join(' | ')}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
