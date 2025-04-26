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
import OurServices from "../components/Sections/OurServices"
import OurProducts from "../components/Sections/OurProducts"
import RequestQuoteForm from "../components/RequestQuoteForm"

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
          {/* <RequestQuoteFormStep /> */}
          <RequestQuoteForm />
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
              {/* <ModalButton /> */}
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

    <WhoWeAre />

    <OurServices />

    <OurWork />

    <OurProducts />

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
            <h5 className="display-5 mx-xl-10">Technologies and Platforms</h5>
            <p className="lead">
              Technologies and Platforms We Work With
            </p>
          </div>
        </Row>
        <Row className="row-cols-3 row-cols-lg-4 gy-5 text-center">
          <Col>
            <StaticImage
              src="../images/icons/github-icon.svg"
              alt="Kotlin"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/wordpress-icon.svg"
              alt="Kotlin"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/npm-icon.svg"
              alt="Kotlin"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/webpack-icon.svg"
              alt="Kotlin"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/gulp-icon.svg"
              alt="Kotlin"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/react-icon.svg"
              alt="Kotlin"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/javascript-icon.svg"
              alt="JavaScript"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/mongodb-icon.svg"
              alt="MongoDB"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/mysql-icon.svg"
              alt="MySQL"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/nodejs-icon.svg"
              alt="NodeJs"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/php-icon.svg"
              alt="Php"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/gatsbyjs-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/nextjs-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/android-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/python-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/tailwind-css-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/bootstrap-icon-5.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/vuejs-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/laravel-icon.svg"
              alt="Laravel"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/vercel-icon.svg"
              alt="Vercel"
              height={50}
            />
          </Col>
          {/* <Col>
            <StaticImage
              src="../images/icons/netlify-icon.svg"
              alt="Netlify"
              height={50}
            />
          </Col> */}
          <Col>
            <StaticImage
              src="../images/icons/heroku-icon.svg"
              alt="Heroku"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/kotlin-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/redis-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/nodemon-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/visual-studio-code-icon.svg"
              alt="Gatsby"
              height={50}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/webstorm-icon.svg"
              alt="Gatsby"
              height={50}
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
              We love hearing from our clients. Whether it's feedback, queries or
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

    <section id="signature" className="bg-light text-black text-center">
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
