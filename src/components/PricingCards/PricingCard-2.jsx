import React from "react"
import { Button, Col, Row } from "react-bootstrap"

const PricingCard2 = () => (
  <Row className="g-5 xrow-cols-1 xrow-cols-md-3 mb-3 ">

    <Col className="box border-top-color-blue text-center">
      <h3>Silver Package</h3>
      {/*<p>Suitable for Small-Size Businesses</p> -->*/}
      <h2 className="text-center">K6,000</h2>
      <ul className="list-unstyled mt-3 mb-4">
        <li>Up to 5 pages</li>
        <li>Image Gallery</li>
        <li>Contact Form</li>
        <li>Responsive</li>
        <li>Social Media Integration</li>
      </ul>
      <Button variant={"primary"} className="w-100" href="/request-quote">Enquire</Button>
    </Col>

    <Col className="box border-top-color-cyan text-center">
      <h3>Bronze Package</h3>
      {/*<p>Suitable for Medium-Sized Businesses</p> -->*/}
      <h2 className="text-center">K9,000</h2>
      <ul className="list-unstyled mt-3 mb-4">
        <li>Up to 10 pages</li>
        <li>Image Gallery</li>
        <li>Contact Form</li>
        <li>Responsive</li>
        <li>Social Media Integration</li>
        <li>Site Statistics</li>
        <li>Video Gallery</li>
      </ul>
      <Button variant={"primary"} className="w-100" href="/request-quote">Enquire</Button>
    </Col>

    <Col className="box border-top-color-red text-center">
      <h3>Gold Package</h3>
      {/*<p>Suitable for Large Businesses</p> -->*/}
      <h2 className="text-center">K20,000</h2>
      <ul className="list-unstyled mt-3 mb-4">
        <li>Up to 20 pages</li>
        <li>Image Gallery</li>
        <li>Contact Form</li>
        <li>Responsive</li>
        <li>Social Media Integration</li>
        <li>Site Statistics</li>
        <li>Video Gallery</li>
        <li>Search Engine Optimisation</li>
      </ul>
      <Button variant={"primary"} className="w-100" href="/request-quote">Enquire</Button>
    </Col>

    {/*<Col className="box border-top-color-orange">*/}
    {/*  <h2>Karma</h2>*/}
    {/*  <p>Regularly evaluates our talent to ensure quality</p>*/}
    {/*</Col>*/}
  </Row>
)

export default PricingCard2