import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import PropTypes from 'prop-types'

const CallToActionQuote = ({ message, actionText, actionUrl }) => (
  <section className="bg-img-2">
    <Container>
      <Row className="mb-3 text-center">
        <Col>
          <h1 className="display-3">{ message }</h1>
          <Button variant={"dark"}
                  className="btn-secondary rounded rounded-pill"
                  href={ actionUrl }>
            { actionText }
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
)

CallToActionQuote.defaultProps = {
  message: "Let's talk about your project?",
  actionText: "Get a Quote",
  actionUrl: "/request-quote"
}

CallToActionQuote.propTypes = {
  message: PropTypes.string,
  actionText: PropTypes.string,
  actionUrl: PropTypes.string
}

export default CallToActionQuote