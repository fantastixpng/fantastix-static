import React from "react"

const ComingSoon = () => (
  <>
    {/*Background Video*/}
    <video className="bg-video" playsinline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src="assets/mp4/bg.mp4" type="video/mp4"/>
    </video>
    {/*Masthead*/}
    <div className="masthead">
      <div className="masthead-content text-white">
        <div className="container-fluid px-4 px-lg-0">
          <h1 className="fst-italic lh-1 mb-4">Our Website is Coming Soon</h1>
          <p className="mb-5">We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!</p>
          {/** * * * * * * * * * * * * * **/}
          {/** * SB Forms Contact Form * **/}
          {/** * * * * * * * * * * * * * **/}
          {/*This form is pre-integrated with SB Forms.*/}
          {/*To make this form functional, sign up at*/}
          {/*https://startbootstrap.com/solution/contact-forms*/}
          {/*to get an API token!*/}
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            {/*Email address input*/}
            <div className="row input-group-newsletter">
              <div className="col">
                <input className="form-control" id="email" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email"/>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</button>
              </div>
            </div>
            <div className="invalid-feedback mt-2" data-sb-feedback="email:required">An email is required.</div>
            <div className="invalid-feedback mt-2" data-sb-feedback="email:email">Email is not valid.</div>
            {/*Submit success message*/}
            {/**/}
            {/*This is what your users will see when the form*/}
            {/*has successfully submitted*/}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3 mt-2">
                <div className="fw-bolder">Form submission successful!</div>To activate this form, sign up at<br/>
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            {/*Submit error message*/}
            {/**/}
            {/*This is what your users will see when there is*/}
            {/*an error submitting the form*/}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3 mt-2">Error sending message!</div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/*Social Icons*/}
    {/*For more icon options, visit https://fontawesome.com/icons?d=gallery&p=2&s=brands*/}
    <div className="social-icons">
      <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
        <a className="btn btn-dark m-3" href="#!"><i className="fab fa-twitter"/></a>
        <a className="btn btn-dark m-3" href="#!"><i className="fab fa-facebook-f"/></a>
        <a className="btn btn-dark m-3" href="#!"><i className="fab fa-instagram"/></a>
      </div>
    </div>
  </>

)

export default ComingSoon