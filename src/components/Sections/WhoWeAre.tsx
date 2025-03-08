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
              Fantastix is a software development startup based in Madang and Port Moresby.
              It started with a mission to build real-time internet applications that incorporates minimalistic design.
              We believe in the power of softwares, whether big or small, in transforming lives and the way we do business.
              That is why, at Fantastix, we strive to build software applications that transforms both lives and the way we do business.
            </p>
          </Col>
        </Row>
        {/* <Row>
          <Col sm={12} md={6} lg={6}>
            <StaticImage
              src="../images/christian-square.jpg"
              alt="founder"
              className="img-fluid"
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <h1 className="display-6 fw-light">Meet the founder</h1>
            <h1 className="display-1">My Story</h1>
            <p>
            My name is <b>Christian Augustyn</b> and I am the founder of Fantastix. Fantastix was a personal project 
            I was working on back in 2016 when I was learning Java programming language.<br/>
            Six years later and I decided to put my skills into building something that would help business succeed in the digital world.

            I started learning to build websites back in 2013 when doing my grade 6.
            </p>
          </Col>
        </Row> */}
      </Container>
    </section>
  )
}