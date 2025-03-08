import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function PricingCard() {
  return (
    <section id="pricing" className="bg-dark-2">
      <Container>
        <Row className="gy-5 justify-content-center mb-10">
          <Col md={9} lg={8} className="text-center text-light">
            <h3 className="fw-light">Pricing</h3>
            <h3 className="fw-light">Pricing Plans</h3>
            {/*<h2 className="display-5 text-capitalize">Website Design & Development</h2>*/}
            {/*<h2 className="xdisplay-4">Small to Medium sized Enterprises (SME's)</h2>*/}
            <p className="mb-15 fs-4 text-muted">
              The website plans below are for Small to Medium sized Enterprises
              (SME's). If there are any features outside of our plans, we can
              include add-ons and customisations to meet the needs of your
              business.
            </p>
          </Col>
        </Row>

        <Row className="g-2 justify-content-center text-dark">
          <Col
            sm={10}
            md={3}
            lg={3}
            className="mb-8 mb-lg-0 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
              <div>
                <h5 className="fs-2 mb-4 text-dark-2">Silver Package</h5>
                <h5 className="display-6 mb-6">K2,500</h5>
                {/*<p className="mb-6">Suitable for Small-Sized Businesses.*/}
                {/*  <span className="text-nowrap">-</span>*/}
                {/*</p>*/}
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Design Up to 5 pages</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Mobile Responsive Design</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Social Sharing Options</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Contact Form</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Google Analytics Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Content Management System</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Social Media Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">2 Rounds of Revisions</h6>
                </div>
              </div>
              <Button href="#contact" className="btn-bg-1 mt-6 w-100">
                Enquire
              </Button>
            </div>
          </Col>
          <Col
            sm={10}
            md={3}
            lg={3}
            className="mb-8 mb-lg-0 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
              <div>
                <h5 className="fs-2 mb-4 text-dark-2">Bronze Package</h5>
                <h2 className="display-6 mb-6">K5,000</h2>
                {/*<p className="mb-6">Suitable for Medium-Sized Businesses.</p>*/}
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Design Up to 10 pages</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Mobile Responsive Design</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Social Sharing Options</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Photo Gallery</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Contact Form</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Content Management System</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Social Media Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Chatbot/Livechat Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Google Analytics Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Google Maps Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Newsletter Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">2 Rounds of Revisions</h6>
                </div>
              </div>
              <Button
                href="#contact"
                className="btn-bg-1 btn-action-1 mt-6 w-100"
              >
                Enquire
              </Button>
            </div>
          </Col>
          <Col
            sm={10}
            md={3}
            lg={3}
            className="mb-8 mb-lg-0 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
              <div>
                <h2 className="fs-2 mb-4 text-dark-2">Gold Package</h2>
                <h2 className="display-6 mb-6">K15,000</h2>
                {/*<p className="mb-6">Suitable for Large Businesses.</p>*/}
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Design Up to 20 pages</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Mobile Responsive Design</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Social Sharing Options</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Photo Gallery</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Contact Form</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Content Management System</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Social Media Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Chatbot/Livechat Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Google Analytics Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Google Maps Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Newsletter Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Search Engine Optimization</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">3 Rounds of Revisions</h6>
                </div>
              </div>
              <Button
                href="#contact"
                className="btn-bg-1 btn-action-3 mt-6 w-100"
              >
                Enquire
              </Button>
            </div>
          </Col>
          <Col
            sm={10}
            md={3}
            lg={3}
            className="mb-8 mb-lg-0 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
              <div>
                <h2 className="fs-2 mb-4 text-dark-2">Platinum Package</h2>
                <h2 className="display-6 mb-6">K30,000</h2>
                {/*<p className="mb-6">Suitable for E-commerce</p>*/}
                {/*<strong className="mt-5 mb-2">Package details</strong>*/}
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Design Up to 30 pages</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Mobile Responsive Design</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Social Sharing Options</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Photo Gallery</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Contact Form</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Content Management System</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Social Media Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Chatbot/Livechat Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Google Analytics Setup</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Google Maps Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Newsletter Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">eCommerce Integration</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">Search Engine Optimization</h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">
                    Contact page, About page, Blog feed * Blog post pages
                  </h6>
                </div>
                <div className="position-relative mb-5">
                  <i className="bi bi-check-circle-fill" />
                  <h6 className="ps-7">3 Rounds of Revisions</h6>
                </div>
              </div>
              <Button
                href="#contact"
                className="btn-bg-1 btn-action-3 mt-6 w-100"
              >
                Enquire
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="gy-5 text-light">
          <Col className="d-grid justify-content-center">
            <span className="text-small">
              (Additional pages costs K300 per page)
            </span>
            <span className="text-small">
              *price excludes VAT, if applicable
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  )
}