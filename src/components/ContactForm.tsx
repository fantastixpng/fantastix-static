import React, { Component, FormEvent } from "react"
import { Button, Row, Col, Form, Toast, ToastContainer, Alert } from "react-bootstrap"
import axios from "axios"
import { Resend } from "resend";
import { useForm, ValidationError } from '@formspree/react';
import Email from "./Email";

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

type ContactFormProps = {
}

type ContactFormState = {
  data: {
    name: string;
    email: string;
    phonenumber: string;
    channel: string;
    message: string;
  };
  status: {
    ok: boolean;
    msg: string;
  },
  isSubmitted: boolean;
  isLoading: boolean;
  validated: boolean;
  showToast: boolean;
  show: boolean;
  content: string;
}

class ContactForm extends Component<ContactFormProps, ContactFormState> {
  // state: ContactFormState = {
  //   data: {
  //     name: "",
  //     email: "",
  //     phonenumber: "",
  //     channel: "",
  //     message: ""
  //   },
  //   isSubmitted: false,
  //   isLoading: false,
  //   validated: false,
  //   showToast: false
  // }
  constructor(props: ContactFormProps | Readonly<ContactFormProps>) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        phonenumber: "",
        channel: "",
        message: "",
      },
      status: {
        ok: false,
        msg: ""
      },
      isSubmitted: false,
      isLoading: false,
      validated: false,
      showToast: false,
      show: false,
      content: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleServerResponse = this.handleServerResponse.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    // const $alert = document.querySelector("[role=alert]");
    // const form = event.currentTarget;
    const form = event.target;
    const $this = this;
    const formData = new FormData(form);

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => {
    //     document.querySelector('.success').innerText =
    //       "Thank you for reaching out to us, we'd get back to you shortly.";
    //     setName('');
    //     setEmail('');
    //     setPhone('');
    //     setMessage('');
    //   })
    //   .catch((error) => document.querySelector('.error').innerText = 'Something went wrong, pls try again.');

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    this.setState({
      isSubmitted: true,
      isLoading: true,
      validated: true,
      showToast: false
    })

    // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if(!re.test("email")){
    //   document.querySelector('.status').innerHTML = "Email format invalid";
    //   return false;
    // }

    // Object.entries(query).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });

    // formData.forEach(console.log)

    // const resend = new Resend("re_BQTAeJqy_7GURJ9uQngdYP9xSVtz3mCFt")
    // await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: ["delivered@resend.dev"],
    //   subject: "hello world",
    //   html: "<p>it works!</p>",
    //   react: <Email url="https://example.com" />,
    // });

    // const response = await fetch("https://notify.cx/api/public/v1/send-email", {
    //   method: "POST",
    //   mode: 'no-cors',
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json",
    //     // "x-api-key": process.env.NOTIFY_API_KEY,
    //     "x-api-key": "1838c9dd-6009-46ff-a763-090aaf8bb0d5"
    //   },
    //   body: JSON.stringify({
    //     to: 'chrisaugu61@gmail.com',
    //     subject: 'Hello world',
    //     message: 'Sending myself a test email from Notify! 🚀'
    //   }),
    // });
    // let result = await response.text();
    // console.log(result)

    // const Recipient = require("mailersend").Recipient;
    // const EmailParams = require("mailersend").EmailParams;
    // const MailerSend = require("mailersend");

    // const mailersend = new MailerSend({
    //   apiKey: "mlsn.e74dedf97c403369855787f7c088fba47b108ca37c46dfcf23b9e0cdc7a230b4",
    // });

    // const recipients = [new Recipient("recipient@email.com", "Recipient")];

    // const emailParams = new EmailParams()
    //   .setFrom("info@domain.com")
    //   .setFromName("Your Name")
    //   .setRecipients(recipients)
    //   .setSubject("Subject")
    //   .setHtml("Greetings from the team, you got this message through MailerSend.")
    //   .setText("Greetings from the team, you got this message through MailerSend.");

    // mailersend.send(emailParams);
    // console.log(formData.entries())

    // axios
    //   .post("https://getform.io/f/d8df0e8c-f662-4cac-86cf-3f15982a9a93", {
    //     message: `
    //       First Name: {firstname}
    //       Last Name: {lastname}
    //       Email: {email}
    //     `,
    //     email: "chrisaugu61@gmail.com"
    //   }, {
    //     headers: {
    //       "Accept": "application/json",
    //     },
    //   })
    //   .then(response => {
    //     $this.setState({ show: true, content: "Message sent!" })
    //     this.handleServerResponse(true, "Thanks!", form);
    //   })
    //   .catch(error => {
    //     this.handleServerResponse(false, error.response.data.error, form);
    //     console.log(error)
    //     $this.setState({ show: true })
    //   });

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
  handleServerResponse = (ok: boolean, msg: string, form: any) => {
    this.setState({
      isSubmitted: false,
      status: { ok, msg }
    });

    if (ok) {
      form.reset();
    }
  }

  render() {
    let $this = this;
    let { validated, isLoading, showToast, show } = this.state;

    function AlertDismissibleExample() {
      if (show) {
        return (
          <Alert variant={"success"} onClose={() => $this.setState({ show: false })} dismissible className="mt-5" role={"alert"}>
            <Alert.Heading>
              Message sent!
            </Alert.Heading>
            <p className="mb-0">
              We'll get back to you shortly.
            </p>
          </Alert>
        )
      }
    }

    let Loader = ({ isLoading }) => {
      if (isLoading) {
        return (
          <div className="text-center mt-5">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
      }
    }

    const toggleShowToast = () => {
      this.setState({
        showToast: !showToast
      });
    }

    return (
      <>
        {/* <button onClick={toggleShowToast}>dd</button> */}
        <div role="form">

          {/* <ContactUsForm handleSubmit={this.handleSubmit} validated={validated} /> */}

          {/*<Loader loading={this.state.isLoading}/>*/}

          <AlertDismissibleExample />

          {/* <Email url="hello"/> */}
          <ContactFormspree />


          <ToastContainer>
            <Toast show={showToast} onClose={toggleShowToast}>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </>
    )
  }
}

// export default ContactForm;

export default function ContactFormspree() {
  const [state, handleSubmit] = useForm("xpwdwdzj");

  if (state.succeeded) {
    return <p className="container">Thanks for contacting us. We get back to you soon!</p>;
  }

  return (
    <ContactUsForm
      validated={null}
      handleSubmit={handleSubmit}
      isSubmitted={state.submitting}
      isSubmitting={state.submitting}
      errors={state.errors}
    />
  );
}


function ContactUsForm({ validated, handleSubmit, isSubmitting, isSubmitted, errors }) {
  return (
    <Form
      id="contact-form"
      className="needs-validation"
      method="post"
      encType="multipart/form-data"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify-honeypot="bot-field"
    >
      {/* <input type="hidden" name="_gotcha" style={{ display: "none !important" }} /> */}
      {/* <input type="hidden" name="bot-field" /> */}
      {/* <input type="hidden" name="form-name" value="contact" /> */}

      <Row className="g-3 justify-content-center">
        <Col md={5} lg={4} xl={4} className="col-6">
          <Form.FloatingLabel
            controlId="firstname"
            label="First Name*"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="First Name" required name="firstname" />
            <div className="invalid-feedback">
              Please enter your first name
            </div>
          </Form.FloatingLabel>
        </Col>
        <Col md={5} lg={4} xl={4} className="col-6">
          <Form.FloatingLabel
            controlId="lastname"
            label="Last Name*"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Last Name" required name="lastname" />
            <div className="invalid-feedback">
              Please enter your last name
            </div>
          </Form.FloatingLabel>
        </Col>
      </Row>

      <Row className="g-3 justify-content-center">
        <Col md={10} lg={8} xl={8} className="col-12">
          <Form.FloatingLabel
            controlId="email"
            label="Email address*"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Email" required name="email" />
            <div className="invalid-feedback">
              Please enter your email address
            </div>
          </Form.FloatingLabel>
        </Col>
      </Row>

      <Row className="g-3 justify-content-center">
        <Col md={10} lg={8} xl={8} className="col-12">
          <Form.FloatingLabel
            controlId="phonenumber"
            label="Phone number*"
            className="mb-3"
          >
            <Form.Control
              type="phone"
              placeholder="Phone number"
              required
              name="phone"
            />

            <div className="invalid-feedback">
              Please enter your phone number
            </div>
          </Form.FloatingLabel>
        </Col>
      </Row>

      <Row className="g-3 justify-content-center">
        <Col md={10} lg={8} xl={8} className="col-12">
          <Form.FloatingLabel
            controlId="channel"
            label="How did you hear about us?"
            className="mb-3"
          >
            <Form.Select aria-label="Floating label select example" name="channel">
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
          <Form.FloatingLabel
            controlId="message"
            label="Share your project details"
            className="mb-3"
          >
            <Form.Control
              as={"textarea"}
              placeholder="Share your project details"
              style={{ height: "200px" }}
              required
              name="message"
            />
            {/*<label htmlFor="message">Message</label>*/}
          </Form.FloatingLabel>
        </Col>
      </Row>

      <Row className="g-3 justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-8">
          <Button
            className="bg-dark btn btn-lg text-light w-100 w-md-auto"
            type="submit"
          >
            Send
          </Button>
        </div>
      </Row>
    </Form>
  )
}