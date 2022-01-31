import React from 'react';
import Layout from "../components/Layout/Layout"

const RequestQuote = () => (
  <Layout>

    {/* <section id="contact" className="ha-contact py-4 py-lg-5 position-relative">
  <div className="container">
    <div className="row mb-4 mb-lg-5">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7">
        <p className="ha-contact__subtitle lead">Contact us</p>
        <h2 className="ha-contact__title display-3 mb-0">How can we help you?</h2>
      </div>
    </div>

    <div role="form" className="wpcf7" id="wpcf7-f9301-p9151-o2" lang="pl-PL" dir="ltr">
      <form method="post" novalidate="novalidate" data-status="init">

        <div className="row g-3">
          <div className="col-12 col-lg-4">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="name" placeholder="name">
                <label htmlFor="name">Name*</label>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com">
                <label htmlFor="floatingInput">Email address</label>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="form-floating mb-3">
              <input type="phone" className="form-control" id="phonenumber" placeholder="phone number">
                <label htmlFor="phonenumber">Phone number</label>
            </div>
          </div>

        </div>

        <div className="row g-2">

          <div className="col-12 col-lg-6">
            <div className="form-floating mb-3">
              <select className="form-select" id="budget" aria-label="Floating label select example" placeholder="Select your budget range">
                <option value="I haven't secured a budget yet">I haven't secured a budget yet</option>
                <option value="0 - 40K EUR">0 – 40K EUR</option>
                <option value="40K - 80K EUR">40K – 80K EUR</option>
                <option value="80K - 120K EUR">80K – 120K EUR</option>
                <option value="Over 120K EUR">Over 120K EUR</option>
              </select>
              <label htmlFor="budget">Budget range</label>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="form-floating mb-3">
              <select className="form-select" id="industry" aria-label="Floating label select example" placeholder="Select your project type">
                <option value="I haven't secured a budget yet">I haven't secured a budget yet</option>
                <option value="0 - 40K EUR">0 – 40K EUR</option>
                <option value="40K - 80K EUR">40K – 80K EUR</option>
                <option value="80K - 120K EUR">80K – 120K EUR</option>
                <option value="Over 120K EUR">Over 120K EUR</option>
              </select>
              <label htmlFor="industry">Project type</label>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="form-floating">
              <textarea id="message" className="form-control" placeholder="Describe your project" rows="4" cols="50" maxlength="200"></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-lg-6">
            <h1 className="display-6">Attach files, share folder link or describe the tasks</h1>
            <p className="lead">The more information, the more productive the collaboration and result will be.</p>

            <br>

              <div className="form-control-wrap upload-file mb-3">

                <div className="upload-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43"><path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"></path></svg>

                  <input type="file" name="files[]" id="file" className="form-control drag-n-drop-file d-none" data-multiple-caption="{count} files selected" multiple="multiple" accept=".jpg,.jpeg,.png,.doc,.docx"/>

                  <div className="upload-handler">
                    <div className="upload-container">
                      <div className="upload-inner">
                        <label htmlFor="file">
                          <h3>Drag &amp; Drop files (NDA, mockups, inspirations etc.)</h3>
                          <span>or</span>
                          <div className="btn-wrap"> Browse Files.</div>
                        </label>
                      </div>
                    </div>
                    <span className="dnd-upload-counter"><span>0</span> of 10</span>
                  </div>

                  <button type="submit" className="btn btn-primary">Upload</button>

                </div>
                <div className="box__uploading">Uploading...</div>
                <div className="box__success">Done!<a href="https://css-tricks.com/examples/DragAndDropFileUploading//?submit-on-demand" className="box__restart" role="button">Upload more?</a></div>
                <div className="box__error">Error! <span></span>. <a href="https://css-tricks.com/examples/DragAndDropFileUploading//?submit-on-demand" className="box__restart" role="button">Try again!</a></div>
                <input type="hidden" name="ajax" value="1"/>

              </div>

          </div>

        </div>

        <div className="loader-dual-ring-wrapper text-center">
          <button className="bg-dark btn btn-lg text-light w-100 w-md-auto" type="submit">Send</button>
          <div className="loader-dual-ring"></div>
        </div>

      </form>
    </div>
  </div>
  </section>  */}

    <section id="request-quote" className="position-relative bg-light">
      <div className="container">
        <div className="row mb-4 mb-lg-5">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2 className="display-4">Request a quote</h2>
            <p className="lead">Get a cost estimate for your project
              <br/>Choose to be introduced to an approved partner
              <br/>Be advised on the best solution for your requirements
            </p>
            <p className="lead">We will get back to you shortly. Usually that'll be within one business day.</p>
          </div>
        </div>

        <div className="row mb-4 mb-lg-5">
          <form name="request-quote" id="request-form" role="form" action="/request-quote" method="post" encType="multipart/form-data">

            <div className="row g-3">
              <div className="col-12 col-lg-4">
                <div className="form-floating mb-3">
                  <input name="name" type="text" className="form-control" id="name" placeholder="name"/>
                  <label htmlFor="name">Name*</label>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="form-floating mb-3">
                  <input name="email" type="email" className="form-control" id="email" placeholder="name@example.com"/>
                  <label htmlFor="email">Email address*</label>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="form-floating mb-3">
                  <input name="phonenumber" type="tel" className="form-control" id="phonenumber" placeholder="phone number"/>
                  <label htmlFor="phonenumber">Mobile Phone*</label>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="form-floating mb-3">
                  <input name="website" type="tel" className="form-control" id="website" placeholder="Website"/>
                  <label htmlFor="website">Website address</label>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="form-floating mb-3">
                  <input name="company" type="tel" className="form-control" id="company" placeholder="company"/>
                  <label htmlFor="company">Company Name</label>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="form-floating mb-3">
                  <select name="industry" id="industry" className="form-select" aria-label="Select your industry" placeholder="Select your industry">
                    <option value="" selected label>Select your industry</option>
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
                      <input id="inputFiles" className="form-control" type="file" name="file" multiple/>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div hidden className="row g-2">
                <div className="col">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
                <h4 className="alert-heading">Message sent!</h4>
                <p className="mb-0">We'll get back to you shortly.</p>
              </div>

              <div className="alert alert-danger alert-dismissible mt-5" role="alert">
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
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
        </div>
      </div>
    </section>

  </Layout>
)

export default RequestQuote