import React from 'react'
import { Helmet } from 'react-helmet'
import Seo from "../components/SEO"
import { Col, Container, Row } from "react-bootstrap"

const Projects = () => (
  <>
    <Seo title={"Our work"}/>

    <section className="bg-dark bg-img-1">
      <div className="container">

        <div className="row mb-3 text-center text-light">

          <div className="col-12">
            <h1 className="display-3">About our company</h1>
            <p>We are a small startup company located in Beautiful Madang, PNG something develop software applications.</p>
          </div>

        </div>

      </div>
    </section>

    <section className="bg-dark bg-img-1">
      <Container>

        <Row className="mb-3 text-center text-light">

          <Col sm={12} md={3} md className="col-4">
            <h1 className="display-3">About our company</h1>
            <p>We are a small startup company located in Beautiful Madang, PNG something develop software applications.</p>
          </Col>

        </Row>

      </Container>
    </section>

    <section className="bg-img-2">
      <div className="container">

        <div className="row mb-3 text-center">

          <div className="col-12">
            <h1 className="display-3">Let's talk about your project?</h1>
            <a className="btn btn-dark btn-secondary rounded rounded-pill" href="/contact">Get A Quote</a>
          </div>

        </div>

      </div>
    </section>

  </>
)

export default Projects