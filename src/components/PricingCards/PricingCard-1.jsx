import React from "react"
import { Button, Col, Row } from "react-bootstrap"

const PricingCard1 = () => (
  <Row className="g-2 justify-content-center">
    <Col sm={10} md={3} lg={3} className="mb-8 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
      <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
        <div>
          <h2 className="fs-2 mb-4 text-dark-2">Platinum Package</h2>
          <h2 className="display-6 mb-6">K30,000</h2>
          {/*<p class="mb-6">Suitable for E-commerce</p>*/}
          {/*<strong class="mt-5 mb-2">Package details</strong>*/}
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Design Up to 30 pages</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Mobile Responsive Design</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Social Sharing Options</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Photo Gallery</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Contact Form</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Content Management System</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Social Media Integration</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Chatbot/Livechat Setup</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Google Analytics Setup</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Google Maps Integration</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Newsletter Integration</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">eCommerce Integration</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Search Engine Optimization</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">Contact page, About page, Blog feed * Blog post pages</h6>
          </div>
          <div className="position-relative mb-5">
            <i className="bi bi-check-circle-fill"/>
            <h6 className="ps-7">3 Rounds of Revisions</h6>
          </div>
        </div>
        <Button href="/request-quote" className="btn-bg-1 btn-action-3 mt-6 w-100">Enquire</Button>
      </div>
    </Col>
  </Row>
)

export default PricingCard1