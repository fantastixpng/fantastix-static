import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="Contact" />

    <section className="bg-dark bg-img-1">
      <div className="container">

        <div className="row mb-3 text-center text-light">

          <div className="col-12">
            <h1 className="display-3">About our company</h1>
            <p>We are a small startup company located in Beautiful Madang, PNG something develop software applications.</p>
          </div>

        </div>

      </div>
    </section>

    <section className="bg-img-2">
      <div className="container">

        <div className="row mb-3 text-center">

          <div className="col-12">
            <h1 className="display-3">Let's talk about your project?</h1>
            <a className="btn btn-dark btn-secondary rounded rounded-pill" href="/contact">Get A Quote</a>
          </div>

        </div>

      </div>
    </section>

  </Layout>
)

export default About;