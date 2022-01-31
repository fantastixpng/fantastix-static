import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap"
import {Link} from "gatsby"
import PropTypes from 'prop-types'

const Section = ({ id, variant }) => (
  <section id={id} className={variant + "has-divider mt-10"}>
  </section>
)

Section.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.string
}

export default Section