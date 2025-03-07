import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function PricingCard2() {
  return (
    <section id="pricing" className="bg-dark-2">
      <Container>
        <Row className="g-5 justify-content-center mb-10">
          <Col md={9} lg={8} className="text-center text-light">
            <h3 className="fw-light">Pricing</h3>
            <h3 className="fw-light">Pricing Plans</h3>
            {/*<h2 className="display-5 text-capitalize">Website Design & Development</h2>*/}
            {/*<h2 className="xdisplay-4">Small to Medium sized Enterprises (SME's)</h2>*/}
            <p className="mb-15 fs-4 text-muted">
              The website plans below are for Small to Medium sized Enterprises
              (SME's). If there are any features outside of our plans, we can
              include add-ons and customisations to meet the needs of your
              business.
            </p>
          </Col>
        </Row>

      </Container>
    </section>
  )
}