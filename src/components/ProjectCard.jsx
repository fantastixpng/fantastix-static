import React from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
// import { StaticImage } from "gatsby-plugin-image"
// import Image from "./Image"
// import styled from 'styled-components'

const ProjectCard = ({name, description, link, image}) => {

  return (
    <Card>
      <Card.Img src={image} />
      {/*<StaticImage*/}
      {/*  className="card-img-top"*/}
      {/*  src={"../images/logo.png"}*/}
      {/*  alt={name}*/}
      {/*  formats={["auto", "webp", "avif"]}*/}
      {/*/>*/}
      <Card.ImgOverlay>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

ProjectCard.propType = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ProjectCard