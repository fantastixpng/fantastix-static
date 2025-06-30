import React, { Component, useState } from "react"
import { Alert, Button, Container, Row } from "react-bootstrap"

type StateProp = {
  step: number;
  email?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  levelOfEducation?: string;
  // [x: string]: string
};
class RequestQuoteFormStep extends Component<any, StateProp> {
  constructor(props) {
    super(props);


    this.state = {
      step: 1,
    }
  }

  // go back to the previous step
  prevStep = (event) => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // go back to the next step
  nextStep = (event) => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // handle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  handleSubmit = (event) => {
  }

  render() {
    const { step } = this.state;
    const { email, username, password, firstName, lastName, country, levelOfEducation } = this.state;
    const values = { email, username, password, firstName, lastName, country }

    return (
      <>
        <form name="request-quote" id="request-form" role="form" action="/request-quote" method="post" encType="multipart/form-data">

          <div className="row g-3">
            <div className="col-12 col-lg-4">
              <div className="form-floating mb-3">
                <input name="name" type="text" className="form-control" id="name" placeholder="name" />
                <label htmlFor="name">Name*</label>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="form-floating mb-3">
                <input name="email" type="email" className="form-control" id="email" placeholder="name@example.com" />
                <label htmlFor="email">Email address*</label>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="form-floating mb-3">
                <input name="phonenumber" type="tel" className="form-control" id="phonenumber" placeholder="phone number" />
                <label htmlFor="phonenumber">Mobile Phone*</label>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="form-floating mb-3">
                <input name="website" type="tel" className="form-control" id="website" placeholder="Website" />
                <label htmlFor="website">Website address</label>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="form-floating mb-3">
                <input name="company" type="tel" className="form-control" id="company" placeholder="company" />
                <label htmlFor="company">Company Name</label>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="form-floating mb-3">
                <select name="industry" id="industry" className="form-select" aria-label="Select your industry" placeholder="Select your industry">
                  <option value="" selected>Select your industry</option>
                  <option value="As-soon-as-possible">As soon as possible</option>
                  <option value="With-in-a-month">With in a month</option>
                  <option value="With-in-3-months">With in 3 months</option>
                </select>
                <label htmlFor="industry">Select your industry</label>
              </div>
            </div>

          </div>

          <div className="row g-2">

            <div className="col-12 col-lg-6">
              <div className="form-floating mb-3">
                <select name="budget" id="budget" className="form-select" aria-label="Select your budget range">
                  <option value="I haven't secured a budget yet">I haven't secured a budget yet</option>
                  <option value="0 - 3k PGK">PGK 0 – 3k</option>
                  <option value="3k - 5k PGK">PGK 3k – 5k</option>
                  <option value="5k - 10k PGK">PGK 5k – 10k</option>
                  <option value="Over 10k PGK">Over PGK 10k</option>
                </select>
                <label htmlFor="budget">Budget range</label>
              </div>
            </div>

            {/*<div className="col-12 col-lg-6">
      <div className="form-floating mb-3">
        <select name="project-type" id="industry" className="form-select" aria-label="Floating label select example" placeholder="Select your project type" onclick="if (!window.__cfRLUnblockHandlers) return false; this.setAttribute('value', value);">
          <option value="">Select your project type</option>
          <option value="website">Website</option>
          <option value="mobile-app">Mobile App</option>
        </select>
        <label htmlFor="industry">Project type</label>
      </div>
      </div> */}

            {/*<div className="col-12 col-lg-6">
    <div className="form-floating mb-3">
      <select name="service" id="categoty" className="form-select" aria-label="Floating label select example" placeholder="Select the type of App" onclick="if (!window.__cfRLUnblockHandlers) return false; this.setAttribute('value', value);">
        <option value="" selected></option>
        <option value="Android-App">Android App</option>
        <option value="IOS-App">IOS App</option>
        <option value="Windows-App">Windows App</option>
        <option value="Flutter-App">Flutter App</option>
        <option value="Hybrid-App">Hybrid App</option>
        <option value="Progressive-Web-App">Progressive Web App</option>
        <option value="Wearable-App">Wearable App</option>
        <option value="Modernise-Existing-App">Modernise Existing App</option>
        <option value="Cross-Platform-App">Cross Platform App</option>
        <option value="Others">Others</option>
      </select>
      <label htmlFor="categoty">Type of app</label>
    </div>
  </div> */}

            <div className="col-12 col-lg-6">
              <div className="form-floating mb-3">
                <select name="start-time" id="start" className="form-select" aria-label="Floating label select example" placeholder="When to start?">
                  <option value="" selected>Select your start time</option>
                  <option value="As-soon-as-possible">As soon as possible</option>
                  <option value="in-a-month">In a month</option>
                  <option value="in-3-months">In 3 months</option>
                </select>
                <label htmlFor="start-time">When to start?</label>
              </div>
            </div>

            {/*<div className="col-12 col-lg-6">
<div className="form-floating mb-3">
  <select className="form-select" id="type" aria-label="Android Mobile App Dev Category">
    <option value="" selected>Select your App Category</option>
    <option value="Marketplace-App">Marketplace App</option>
    <option value="On-Demand-Service-Apps">On Demand Service Apps</option>
    <option value="Utilities-Apps">Utilities Apps</option>
    <option value="Entertainment-Apps">Entertainment Apps</option>
    <option value="News-Apps">News Apps</option>
    <option value="Productivity-Apps">Productivity Apps</option>
    <option value="Life-Style-Apps">Life Style Apps</option>
    <option value="Social-Network">Social Network</option>
    <option value="Financial-Services">Financial Services</option>
    <option value="Wallets-Vaults">Wallets, Vaults</option>
    <option value="Communication-Apps">Communication Apps</option>
    <option value="Enterprise-Apps">Enterprise Apps</option>
    <option value="Other">Others</option>
  </select>
  <label htmlFor="type">Use case</label>
</div>
</div> */}

            {/*<div className="col-12 col-lg-6">
<div className="form-floating mb-3">
<select className="form-select" id="timeframe" aria-label="Timeframe" name="timeframe" required>
  <option value="ASAP (specify key dates below)">ASAP (specify key dates below)</option>
  <option value="Within 3 months">Within 3 months</option>
  <option value="Within 6 months">Within 6 months</option>
  <option value="Undecided">Undecided</option>
</select>
<label htmlFor="timeframe">Timeframe*</label>
</div>
</div>
</div> */}


            {/*<div className="row g-2 mt-3">
<div className="col-12 col-lg-12">
<fieldset className="mb-3">
  <legend>Project Needs</legend>
  <div className="mb-3 form-check">
    <input type="checkbox" name="project_needs" className="form-check-input" id="project_needs_1">
      <label className="form-check-label" htmlFor="project_needs_1">Responsive Web Design</label>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" name="project_needs" className="form-check-input" id="project_needs_2">
      <label className="form-check-label" htmlFor="project_needs_2">E-Commerce</label>
  </div>
</fieldset>
</div>
</div> */}


            <div className="row g-2 mt-1">
              <div className="col-12 col-lg-12">
                <div className="form-floating">
                  <textarea id="message" className="form-control h-100" name="message" placeholder="Describe your project" rows="4" cols="50" maxlength="200"></textarea>
                  <label htmlFor="message">Project Details. The more information, the more productive the collaboration and result will be.</label>
                </div>
                {/*<span>Tell us more about your project.</span>*/}
              </div>
            </div>

            <div className="row g-2 mt-5">
              <div className="col-12">
                <fieldset className="mb-3">
                  <legend>Attach files</legend>
                  {/*<label id="inputFiles" className="fs-4 mb-3">The more information, the more productive the collaboration and result will be.</label> */}
                  <div className="input-group mb-3">
                    {/* <label className="input-group-text" htmlFor="inputFiles">Upload</label> */}
                    <input id="inputFiles" className="form-control" type="file" name="file" multiple />
                  </div>
                </fieldset>
              </div>
            </div>

            <div hidden className="row g-2">
              <div className="col">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I'd like to sign an NDA with Fantastix Software.
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <button className="btn btn-lg bg-dark text-light w-100 w-md-auto" type="submit">Get a quote</button>
            </div>

            <div className="alert alert-success alert-dismissible mt-5" role="alert">
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
              <h4 className="alert-heading">Message sent!</h4>
              <p className="mb-0">We'll get back to you shortly.</p>
            </div>

            <div className="alert alert-danger alert-dismissible mt-5" role="alert">
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
              <h4 className="alert-heading">Message sent!</h4>
              <p className="mb-0">We'll get back to you shortly.</p>
            </div>

            <div className="text-center mt-5">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default RequestQuoteFormStep;