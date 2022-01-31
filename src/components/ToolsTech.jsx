import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"

const ToolsTechSection = () => {
  return (
    <section id="software-stacks" className="bg-light text-dark">
      <Container>
        <Row className="justify-content-center mb-10">
          <div className="col-xl-8 col-lg-9 text-center">
            <h2 className="display-5 mx-xl-10">Tools and Technologies</h2>
            <p className="lead">
              Tools and technologies I use for my projects.
            </p>
          </div>
        </Row>
        <Row className="row-cols-4 g-5 text-center">
          <Col>
            <StaticImage
              src="../images/icons/android-icon.svg"
              alt="Android"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/java-icon.svg"
              alt="Java"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/kotlin-icon.svg"
              alt="Kotlin"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/javascript-icon.svg"
              alt="JavaScript"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/mongodb-icon.svg"
              alt="MongoDB"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/mysql-icon.svg"
              alt="MySQL"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/nodejs-icon.svg"
              alt="NodeJs"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
          <Col>
            <StaticImage
              src="../images/icons/php-icon.svg"
              alt="Php"
              height={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ToolsTechSection;
