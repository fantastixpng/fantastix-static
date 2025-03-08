import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects.json";

export default function OurWork() {
  return (
    <section id="our-work" className="p-0">
      <div className="bg-light py-40">
        <Container>
          <Row className="section-title g-5 justify-content-center mb-10">
            <Col md={9} lg={8} className="text-center">
              <p className="fs-2">Our Work</p>
              <h5 className="display-5">Check Some Of Our Recent Work</h5>
              <p className="lead">Here are few of our work.</p>
            </Col>
          </Row>

          <Row
            xs={1}
            md={2}
            className="row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3"
          >
            {projects
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
          <Row className="section-title g-5 justify-content-center mb-10 mt-10">
            <Col md={9} lg={8} className="text-center">
              <p className="fs-2">Our ❤️ Open Source</p>
              <h5 className="display-5">Our Open Source Work</h5>
              <p className="lead">Check Some Of Our Open Source Work.</p>
            </Col>
          </Row>

          <Row
            xs={1}
            md={2}
            className="row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3"
          >
            {projects
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