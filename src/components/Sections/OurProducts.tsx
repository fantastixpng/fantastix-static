import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import products from "../../data/products.json";

export default function OurProducts() {
  return (
    <section id="our-work" className="p-0">
      <div className="bg-light py-40">
        <Container>
          <Row className="justify-content-center mb-10">
            <Col md={9} lg={8} className="text-center">
              <p className="fs-2">Our Products</p>
              <h5 className="display-5">Check Some Of Our Recent Work</h5>
              <p className="lead">Here are few of our work.</p>
            </Col>
          </Row>

          <Row
            xs={1}
            md={2}
            className="row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3"
          >
            {products
              .filter(project => !project.open_source)
              .filter(project => project.show)
              .map((project, key) => (
                <Col className="hover-effect" key={key}>
                  <ProjectCard data={project} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>

      <div className="bg-dark text-light py-40">
        <Container>
          <Row className="justify-content-center mb-10 mt-10">
            <Col md={9} lg={8} className="text-center">
              <p className="fs-2">We ❤️ Open Source Software</p>
              <h5 className="display-5">Our Open Source Products</h5>
              <p className="lead">Check Out Some Of Our Open Source Work.</p>
            </Col>
          </Row>

          <Row
            xs={1}
            md={2}
            className="row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3"
          >
            {products
              .filter(project => project.open_source)
              .filter(project => project.show)
              .map((project, key) => (
                <Col className="hover-effect" key={key}>
                  <ProjectCard data={project} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </section>
  )
}