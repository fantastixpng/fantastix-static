import React, { useState } from "react"
import { Helmet } from 'react-helmet'
import { withSiteData, useSiteData } from 'gatsby'

import { Alert, Col, Container, Row, Button } from "react-bootstrap"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import ToolsTechSection from "../components/ToolsTech"
import PricingSection from "../components/Pricing"
import Section from "../components/Section"

import logoImg from '../images/logo.png'

function AlertDismissibleExample() {
  const [show, setShow] = useState(false)

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          I am an alert of type <span className="dangerText">danger</span>! But
          my color is Teal!
        </Alert.Heading>
        <p>
          By the way the button you just clicked is an{' '}
          <span className="infoText">Info</span> button but is using the color
          Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium debitis deleniti distinctio impedit officia reprehenderit
          suscipit voluptatibus. Earum, nam necessitatibus!
        </p>
      </Alert>
    )
  }
  return (
    <Button variant="info" onClick={() => setShow(true)}>
      Show Custom Styled Alert
    </Button>
  )
}

const Home = () => (
  <Layout>
    <Seo title="Home | Fantastix"/>

    <section className="">
      <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
      <img src={logoImg} alt="" style={{ display: 'block', margin: '0 auto' }} />
    </section>

    <ToolsTechSection/>

    <PricingSection/>

    <section id="welcome" className="p-3">
      <Container className="pb-1 p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <h2 className="header">Using Sass with custom theming</h2>
        <AlertDismissibleExample />
        <hr />
        <p>
          You can check further in information on the official Bootstrap docs{' '}
          <a
            href="https://getbootstrap.com/docs/4.3/getting-started/theming/#importing"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col/>
        </Row>
      </Container>
    </section>

  </Layout>
)

export default Home