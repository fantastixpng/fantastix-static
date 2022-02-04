import React, { Component } from "react"
import { Button, Row, Col, Form } from "react-bootstrap"
import axios from "axios"
// import { useForm, ValidationError } from '@formspree/react';

// const [state, handleSubmit] = useForm("xbjwgyay");
// if (state.succeeded) {
//   return <p>Thanks for joining!</p>;
// }
// <ValidationError
//   prefix="Message"
//   field="message"
//   errors={state.errors}
// />

// const [serverState, setServerState] = useState({
//       submitting: false,
//       status: null
//     });
//     const handleServerResponse = (ok, msg, form) => {
//       setServerState({
//         submitting: false,
//         status: { ok, msg }
//       });
//       if (ok) {
//         form.reset();
//       }
//     };

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
      isLoading: false,
      validated: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const $alert = document.querySelector("[role=alert]");
    // const form = event.currentTarget;
    const form = event.target;

    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // this.setState({
    //   isSubmitted: true,
    //   isLoading: true,
    //   validated: true
    // })

    // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if(!re.test("email")){
    //   document.querySelector('.status').innerHTML = "Email format invalid";
    //   return false;
    // }

    // let formData = new FormData(event.target);

    // console.log(formData)

    axios
      .post("https://getform.io/f/d8df0e8c-f662-4cac-86cf-3f15982a9a93", {
        message: "Hello, World",
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))

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
    let { validated } = this.state;

    // function AlertDismissibleExample() {
    //   const [show, setShow] = useState(false)
    //
    //   if (show) {
    //     return (
    //       <Alert variant={"success"} onClose={() => setShow(false)} dismissible className="mt-5" role={"alert"}>
    //         <Alert.Heading>
    //           Message sent!
    //         </Alert.Heading>
    //         <p className="mb-0">
    //           We'll get back to you shortly.
    //         </p>
    //       </Alert>
    //     )
    //   }
    //   return (
    //     <Button variant="info" onClick={() => setShow(true)}>
    //       Show Custom Styled Alert
    //     </Button>
    //   )
    // }

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
        <div role="form">
          <Form id="contact-form"
                className="needs-validation"
                method="post"
                encType="multipart/form-data"
                noValidate
                validated={validated}
                onSubmit={this.handleSubmit}>

            <Row className="g-3 justify-content-center">
              <Col md={10} lg={8} xl={8} className="col-12">
                <Form.FloatingLabel controlId="email" label="Name*" className="mb-3">
                  <Form.Control type="text" placeholder="Name" required />
                  <div className="invalid-feedback">Please enter your full name</div>
                </Form.FloatingLabel>
              </Col>
            </Row>

            <Row className="g-3 justify-content-center">
              <Col md={10} lg={8} xl={8} className="col-12">
                <Form.FloatingLabel controlId="email" label="Email address*" className="mb-3">
                  <Form.Control type="email" placeholder="Email" required />
                  <div className="invalid-feedback">Please enter your email address</div>
                </Form.FloatingLabel>
              </Col>
            </Row>

            <Row className="g-3 justify-content-center">
              <Col md={10} lg={8} xl={8} className="col-12">
                <Form.FloatingLabel controlId="phonenumber" label="Phone number*" className="mb-3">
                  <Form.Control type="phone" placeholder="Phone number" required />

                  <div className="invalid-feedback">Please enter your phone number</div>
                </Form.FloatingLabel>
              </Col>
            </Row>

            <Row className="g-3 justify-content-center">
              <Col md={10} lg={8} xl={8} className="col-12">
                <Form.FloatingLabel controlId="channel" label="How did you hear about us?" className="mb-3">
                  <Form.Select aria-label="Floating label select example">
                    <option>Select an Option</option>
                    <option value="Referral">Referral</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Facebook">Facebook</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.FloatingLabel>
              </Col>
            </Row>

            <Row className="g-3 justify-content-center">
              <Col md={10} lg={8} xl={8} className="col-12">
                <Form.FloatingLabel controlId="message" label="Describe your project" className="mb-3">
                  <Form.Control as={"textarea"}
                                placeholder="Describe your project"
                                style={{ height: '200px' }}
                                required />
                  {/*<label htmlFor="message">Message</label>*/}
                </Form.FloatingLabel>
              </Col>
            </Row>

            <Row className="g-3 justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 col-xl-8">
                <Button className="bg-dark btn btn-lg text-light w-100 w-md-auto" type="submit">Send</Button>

                <Loading/>

                {/*<AlertDismissibleExample/>*/}

              </div>
            </Row>

          </Form>
        </div>
      </>
    )
  }
}

export default ContactForm;