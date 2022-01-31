import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import { Button } from "react-bootstrap"

const Pricing = () => (
  <Layout>
    <Helmet>
      <title>Services</title>
    </Helmet>

    <section className="bg-dark text-light bg-img-1">
      <div className="container">
        <div className="row mb-3 text-center">
          <div className="col-12">
            <h1 className="display-3">Services</h1>
            {/*<p className="lead fs-6 fw-light">.</p>*/}
          </div>
        </div>
      </div>
    </section>


    <section className="py-10 py-lg-20 text-center text-md-start bg-bg-3">
      <div className="container px-4 py-5">

        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5 text-center">
            <h3>Services</h3>
            <h2 className="mb-6 display-5 aos-init aos-animate" data-aos="fade-down" data-aos-delay="100">
              Our Services
            </h2>
            <p className="mb-15 fs-2 aos-init aos-animate" data-aos="fade-down" data-aos-delay="150">
              Meet your new sidekick. The powerful tool that helps you create something special.
            </p>
          </div>
        </div>

        {/*<div className="mb-15 mb-md-8 row align-items-center flex-md-row-reverse justify-content-center">*/}
        {/*  <div className="mb-8 mb-md-0 col-10 col-sm-7 col-md-5 col-xl-4">*/}
        {/*    <img src="/img/mobile_application.svg" alt="" className="img-fluid w-100 aos-init aos-animate" data-aos="fade-down" data-aos-delay="250">*/}
        {/*  </div>*/}
        {/*  <div className="col-md-1">*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6 col-xl-5 col-xxl-4">*/}
        {/*    <h4 className="mb-6 remove-br aos-init aos-animate" data-aos="fade-down" data-aos-delay="400">*/}
        {/*      Android App Development*/}
        {/*    </h4>*/}
        {/*    <p className="mb-0 fs-4 aos-init aos-animate" data-aos="fade-down" data-aos-delay="500">*/}
        {/*      Today mobile apps render a good platform for businesses. That is why having a mobile app for your business is a must to drive sales.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

          <div className="col feature aos-init aos-animate" data-aos="fade-down" data-aos-delay="300">
            <div className="feature-icon bg-primary bg-gradient">
              <i className="bi bi-collection"/>
              {/*<svg className="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg>*/}
            </div>
            <h2>Web Design</h2>
            <p>We design beautiful websites as per your liking.</p>
            <Link href="/pricing" className="icon-link link-primary">
              See pricing
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          <div className="col feature aos-init aos-animate" data-aos="fade-down" data-aos-delay="200">
            <div className="feature-icon bg-primary bg-gradient">
              <i className="bi bi-people-circle"/>
              {/*<svg className="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg>*/}
            </div>
            <h2>Web Development</h2>
            <p>From design, we develop the fully functional website for your business needs.</p>
            <Link href="/pricing" className="icon-link link-primary">
              See pricing
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          <div className="col feature aos-init aos-animate" data-aos="fade-down" data-aos-delay="100">
            <div className="feature-icon bg-primary bg-gradient">
              <i className="bi bi-toggles2"/>
            </div>
            <h2>E-Commerce Development</h2>
            <p>We help you bring your products to your customers by building an ecommerce solutions perfect for your business.</p>
            <Link href="/pricing" className="icon-link link-primary">
              See pricing
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

        </div>
      </div>
    </section>


    <section className="bg-img-2">
      <div className="container">

        <div className="row mb-3 text-center">

          <div className="col-12 themed-grid-col">
            <h1 className="display-3">Let's talk about your project?</h1>
            <Button variant={"dark"} className="btn-secondary rounded rounded-pill" href="/contact">Get A Quote</Button>
          </div>

        </div>

      </div>
    </section>

  </Layout>
)

export default Pricing