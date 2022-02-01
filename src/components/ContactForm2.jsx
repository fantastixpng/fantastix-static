import React, { Component, useState } from "react"
import { Alert, Button, Container, Row } from "react-bootstrap"

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: "",
        email: "",
        phonenumber: "",
        channel: "",
        message: ""
      },
      isSubmitted: false,
      isLoading: false
    }
  }

  handleSubmit = (event) => {
    const $alert = document.querySelector("[role=alert]");

    event.preventDefault();
    this.setState({
      isSubmitted: true,
      isLoading: true
    })

    // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if(!re.test("email")){
    //   document.querySelector('.status').innerHTML = "Email format invalid";
    //   return false;
    // }

    let formData = new FormData(event.target);

    console.log(formData)

    // $.ajax({
    //   url : "/contact",
    //   type: "POST",
    //   data : formData,
    //   body: formData,
    //   success: function (data, textStatus, jqXHR) {
    //     console.log(data.message);
    //     this.setState({
    //       isSubmitted: true,
    //       isLoading: true
    //     })
    //
    //     $('#status').text(data.message);
    //     if (data.code) // If mail was sent successfully, reset the form.
    //       $form.closest('form').find("input[type=text], textarea").val("");
    //   },
    //   error: function (jqXHR, textStatus, errorThrown) {
    //     console.log(jqXHR);
    // this.setState({
    //   isSubmitted: true,
    //   isLoading: true
    // })
    //     $('#status').text(jqXHR);
    //   }
    // });
  }

  render() {

    function AlertDismissibleExample() {
      const [show, setShow] = useState(false)

      if (show) {
        return (
          <Alert variant={"success"} onClose={() => setShow(false)} dismissible className="mt-5" role={"alert"}>
            <Alert.Heading>
              Message sent!
            </Alert.Heading>
            <p className="mb-0">
              We'll get back to you shortly.
            </p>
          </Alert>
        )
      }
      return (
        <Button variant="info" onClick={() => setShow(true)}>
          Show Custom Styled Alert
        </Button>
      )
    }

    const Loading = () => {
      if (this.state.isLoading) {
        return (<div className="text-center mt-5">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>)
      }
      else {
        return ""
      }
    }

    return (
      <>
        <section id="contact" className="position-relative">
          <Container>
            <Row className="mb-4 mb-lg-5">
              <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto">
                <h3 className="display-5 fw-normal">Contact us</h3>
                <h2 className="display-3">How can we help you?</h2>
                {/*<p>Ready to build the app of your dreams? Interested to find out more about the Fantastix? Fill out the form below to get in contact with our team to discuss your website needs.</p>*/}
                <p>
                  We love hearing from our clients. Whether its feedback, queries or even criticism, we are all ears.
                  Contact us now to discuss how we can scale your project to the next level and we will get in touch
                  with
                  you as soon as possible, we promise🤝.
                </p>
              </div>
            </Row>

            <div role="form">
              <form id="contact-form"
                    className="needs-validation"
                    onSubmit={this.handleSubmit}
                    method="post"
                    encType="multipart/form-data"
                    xnovalidate="novalidate">

                <Row className="g-3 justify-content-center">
                  <div className="col-12 col-md-10 col-lg-8 col-xl-8">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="name" name="name" placeholder="name" />
                      <label htmlFor="name">Name*</label>
                      <div className="invalid-feedback">Please enter your full name</div>
                    </div>
                  </div>

                </Row>
                <Row className="g-3 justify-content-center">
                  <div className="col-12 col-md-10 col-lg-8 col-xl-8">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="email" name="email"
                             placeholder="name@example.com" />
                      <label htmlFor="email">Email address*</label>
                      <div className="invalid-feedback">Please enter your email address</div>
                    </div>
                  </div>
                </Row>

                <Row className="g-3 justify-content-center">
                  <div className="col-12 col-md-10 col-lg-8 col-xl-8">
                    <div className="form-floating mb-3">
                      <input id="phonenumber" className="form-control" name="phonenumber"
                             placeholder="phone number" type="phone" />
                      <label htmlFor="phonenumber">Phone number*</label>
                      <div className="invalid-feedback">Please enter your phone number</div>
                    </div>
                  </div>
                </Row>

                <Row className="g-3 justify-content-center">
                  <div className="col-12 col-md-10 col-lg-8 col-xl-8">
                    <div className="form-floating mb-3">
                      <select id="channel" className="form-control" name="channel"
                              placeholder="How did you hear about us?">
                        <option value="" selected="selected">Select an Option</option>
                        <option value="Referral">Referral</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Facebook">Facebook</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Other">Other</option>
                      </select>
                      <label htmlFor="channel">How did you hear about us?</label>
                    </div>
                  </div>
                </Row>

                <Row className="g-3 justify-content-center">
                  <div className="col-12 col-md-10 col-lg-8 col-xl-8">
                    <div className="form-floating mb-3">
                  <textarea id="message"
                            className="form-control h-100"
                            name="message"
                            placeholder="Describe your project"
                            rows={8}
                            cols={50}
                            maxLength={200} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                </Row>

                <Row className="g-3 justify-content-center">
                  <div className="col-12 col-md-10 col-lg-8 col-xl-8">
                    <Button className="bg-dark btn btn-lg text-light w-100 w-md-auto" type="submit">Send</Button>

                    <Loading/>

                    <AlertDismissibleExample/>

                  </div>
                </Row>

              </form>
            </div>
          </Container>
        </section>

      </>
    )
  }
}

export default ContactForm;