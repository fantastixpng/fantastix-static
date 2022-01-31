import React from "react"
import { Button, Col, Row } from "react-bootstrap"

/**
 * This pricing card is for web designing
 * @returns {JSX.Element}
 * @constructor
 */

const PricingCard3 = () => (
  <>
    <div className="row g-2 justify-content-center">
      <div className="col-sm-10 col-md-4 col-lg-4 mb-8 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
        <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
          <div>
            <h5 className="fs-2 mb-4 text-dark-2">Silver Package</h5>
            <h2 className="display-6 mb-6">K2,500</h2>
            {/*<p className="mb-6">Suitable for Small-Sized Businesses.*/}
            {/*  <span className="text-nowrap">-</span>*/}
            {/*</p>*/}
            <div className="position-relative mb-5">
              <i className="bi bi-check-circle-fill"/>
              <h6 className="ps-7">Design Up to 5 pages</h6>
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
              <h6 className="ps-7">Contact Form</h6>
            </div>
            <div className="position-relative mb-5">
              <i className="bi bi-check-circle-fill"/>
              <h6 className="ps-7">Google Analytics Setup</h6>
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
              <h6 className="ps-7">2 Rounds of Revisions</h6>
            </div>
          </div>
          <Button href="/request-quote" className="btn-bg-1 mt-6 w-100">Enquire</Button>
        </div>
      </div>
      <div className="col-sm-10 col-md-4 col-lg-4 mb-8 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
          <div>
            <h5 className="fs-2 mb-4 text-dark-2">Bronze Package</h5>
            <h2 className="display-6 mb-6">K5,000</h2>
            {/*<p className="mb-6">Suitable for Medium-Sized Businesses.</p>*/}
            <div className="position-relative mb-5">
              <i className="bi bi-check-circle-fill"/>
              <h6 className="ps-7">Design Up to 10 pages</h6>
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
              <h6 className="ps-7">2 Rounds of Revisions</h6>
            </div>
          </div>
          <Button href="/request-quote" className="btn-bg-1 btn-action-1 mt-6 w-100">Enquire</Button>
        </div>
      </div>
      <div className="col-sm-10 col-md-4 col-lg-4 mb-8 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
        <div className="d-flex flex-column justify-content-between h-100 p-6 xborder rounded-2 border-dark-3 bg-bg-3">
          <div>
            <h2 className="fs-2 mb-4 text-dark-2">Gold Package</h2>
            <h2 className="display-6 mb-6">K15,000</h2>
            {/*<p className="mb-6">Suitable for Large Businesses.</p>*/}
            <div className="position-relative mb-5">
              <i className="bi bi-check-circle-fill"/>
              <h6 className="ps-7">Design Up to 20 pages</h6>
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
              <h6 className="ps-7">3 Rounds of Revisions</h6>
            </div>
          </div>
          <Button href="/request-quote" className="btn-bg-1 btn-action-3 mt-6 w-100">Enquire</Button>
        </div>
      </div>
    </div>
  </>
)

export default PricingCard3