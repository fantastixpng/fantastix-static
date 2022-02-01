import React from "react"
import PropTypes from "prop-types"
import { Button, Card } from "react-bootstrap"

const ProjectCard = ({name, description, link, image}) => (
  <Card>
    <Card.Img variant="top" src={ image } />
    <Card.Body>
      <Card.Title>{ name }</Card.Title>
      <Card.Text>{ description }</Card.Text>
      <Button variant="primary" href={ link }>Go somewhere</Button>
    </Card.Body>
  </Card>
)

ProjectCard.propType = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ProjectCard