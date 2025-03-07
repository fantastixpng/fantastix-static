import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function OurBestPractices() {
  return (
    <section id="our-best-practices">
      <Container>

        <Row className="section-title g-5 justify-content-center mb-10">
          <Col md={9} lg={8} className="text-center">
            <p className="fs-2">Our Best Practices</p>
            <h5 className="display-5">Some Of Our Best Practices</h5>
            {/* <p className="lead">Here are few of our work.</p> */}
          </Col>
        </Row>

        <Row className="row-cols-sm-1 row-cols-md-3 row-cols-lg-3">
          <Col md={6} lg={6} className="text-center">
            <Card>
              <Card.Body>
                <Card.Title className="text-dark">SOLID Principle</Card.Title>
                <Card.Text className="text-dark">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className="text-center">
            <Card className="bg-">
              <Card.Body>
                <Card.Title className="text-dark">Clean Architecture</Card.Title>
                <Card.Text className="text-dark">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section >
  )
}