import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import { Button, Col, Container, FormGroup, FormSelect, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import CallToActionQuote from "../components/cta/call-to-action-quote"
import ContactForm from "../components/ContactForm"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />

    <section>
      <Container>
        <Row className="mb-3">
          <Col sm={12} md={6} lg={6}>
            <h1 className="display-4">Say hello :)</h1>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <StaticImage
              src="../images/hello.svg"
              data-src="../images/hello.svg"
              alt="fantastix logo"
              className="lazyload" />

          </Col>
        </Row>
      </Container>
    </section>


    <ContactForm/>


    <CallToActionQuote
      message={"Let's talk about your project?"}
      actionText={"Get a Quote"}
      actionUrl={"/request-quote"}/>

  </Layout>
)

export default Contact
