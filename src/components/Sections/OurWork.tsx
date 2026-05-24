import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectCard from "../ProjectCard2";
import projects from "../../data/projects.json";
import ProjectModal from "../ProjectModal";

export default function OurWork() {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="our-work" className="">
      <Container>
        <Row className="justify-content-center mb-10">
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
              <Col key={project.id} md={6} lg={4} className="mb-4 hover-effect">
                <ProjectCard data={project} onClick={() => handleProjectClick(project)} />
              </Col>
            ))}
        </Row>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            show={showModal}
            onHide={handleCloseModal}
          />
        )}
      </Container>
    </section>
  )
}