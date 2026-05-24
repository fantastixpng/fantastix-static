import React, { useState } from 'react';
import { Modal, Button, Badge, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectModal = ({ project, show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            aria-labelledby="project-details-modal"
        >
            <Modal.Header closeButton className="bg-light">
                <Modal.Title id="project-details-modal">
                    <h4 className="mb-0">{project.name}</h4>
                    <div className="mt-2">
                        {project.tags && project.tags.map((tag, index) => (
                            <Badge key={index} bg="secondary" className="me-1">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Tabs defaultActiveKey="overview" className="mb-3">
                    <Tab eventKey="overview" title="Overview">
                        <div className="p-3">
                            <div className="mb-4">
                                <h5 className="text-primary">📋 Customer Requirements</h5>
                                <p className="mb-0">{project.customerRequirements}</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-primary">⚠️ Problem Statement</h5>
                                <p className="mb-0">{project.problem}</p>
                                {project.problemDetails && (
                                    <ul className="mt-2">
                                        {project.problemDetails.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div>
                                <h5 className="text-primary">✅ Solution</h5>
                                <p className="mb-0">{project.solution}</p>
                                {project.solutionFeatures && (
                                    <ul className="mt-2">
                                        {project.solutionFeatures.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="details" title="Additional Details">
                        <div className="p-3">
                            {project.technologies && (
                                <div className="mb-4">
                                    <h5 className="text-primary">🛠️ Technologies Used</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <Badge key={index} bg="info" className="px-3 py-2">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.timeline && (
                                <div className="mb-4">
                                    <h5 className="text-primary">📅 Timeline</h5>
                                    <p className="mb-0"><strong>Start:</strong> {project.timeline.start}</p>
                                    <p className="mb-0"><strong>End:</strong> {project.timeline.end}</p>
                                    <p className="mb-0"><strong>Status:</strong>
                                        <Badge bg={project.timeline.status === 'Completed' ? 'success' : 'warning'} className="ms-2">
                                            {project.timeline.status}
                                        </Badge>
                                    </p>
                                </div>
                            )}

                            {project.team && (
                                <div>
                                    <h5 className="text-primary">👥 Team Members</h5>
                                    <div className="row">
                                        {project.team.map((member, index) => (
                                            <div key={index} className="col-md-6 mb-2">
                                                <div className="card border-0 bg-light">
                                                    <div className="card-body p-3">
                                                        <h6 className="mb-1">{member.name}</h6>
                                                        <small className="text-muted">{member.role}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </Tab>

                    {project.results && (
                        <Tab eventKey="results" title="Results">
                            <div className="p-3">
                                <h5 className="text-primary">📊 Key Results</h5>
                                <div className="row">
                                    {project.results.map((result, index) => (
                                        <div key={index} className="col-md-6 mb-3">
                                            <div className="card border-primary border-2 h-100">
                                                <div className="card-body text-center">
                                                    <h2 className="text-primary">{result.value}</h2>
                                                    <p className="mb-0">{result.label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {project.testimonial && (
                                    <div className="mt-4 p-3 bg-light rounded">
                                        <blockquote className="blockquote mb-0">
                                            <p className="mb-2">"{project.testimonial.quote}"</p>
                                            <footer className="blockquote-footer mt-2">
                                                {project.testimonial.author}, <cite title="Source Title">{project.testimonial.position}</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                )}
                            </div>
                        </Tab>
                    )}
                </Tabs>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-between">
                <div>
                    {project.links && project.links.map((link, index) => (
                        <Button
                            key={index}
                            variant="outline-primary"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-2"
                        >
                            {link.label}
                        </Button>
                    ))}
                </div>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectModal;