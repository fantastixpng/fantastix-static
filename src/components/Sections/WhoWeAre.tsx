import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-dark text-light">
      <Container>
        <Row className="gy-5 justify-content-center mb-16">
          <Col md={9} lg={8} className="text-center">
            <h5 className="display-6 fw-light">Who We Are</h5>
            <h5 className="display-2">Our story</h5>
            <p className="lead">
              Fantastix started as a project codename during early development in 2016.
              What began as an internal project was driven by a mission to build real-time internet applications.
              <br />
              We believe in the power of software - whether big or small - to transform lives and the way businesses operate.
              That belief drives us at Fantastix to build software applications that create meaningful impact for both people and businesses.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}