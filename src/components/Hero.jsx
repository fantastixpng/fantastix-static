import * as React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap"
import {Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "./Layout/Layout"

const Hero = () => (
	<section id="hero" className="has-divider mt-10">
		<Container>
			<Row className="align-items-center justify-content-between">

				<Col md={6} sm={ {order: 2} } className="mb-5 mb-sm-0 aos-init aos-animate" data-aos="fade-left">
					<img src="" alt=""/>
					<StaticImage
						src="../images/web_development.svg"
						alt="Web development"
						className="img-fluid"
					/>
				</Col>
				<Col md={6} className="order-sm-1 pr-xl-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
					{/* <h5 class="mb-2">Android + Web</h5> */}
					{/* <h3 class="mb-0">We are</h3> */}
					<h1 className="display-3">Welcome to Fantastix</h1>
					{/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
					{/* <div class="text-morph">
            <div class="word">Android</div>
            <div class="word">Desktop</div>
            <div class="word">IOS</div>
            <div class="word">Effect</div>
          </div> */}
					<p className="lead mb-8 mt-4">
						Building B.E.A.U.T.I.F.U.L website that helps you to optimize your processes, deeply engage your
						customers, and gain more profit.
						<br/>
					</p>
					<div className="d-sm-flex mb-4 mt-4 mt-4">
						<Button href="/request-quote" variant={"dark"} size={"lg"}>
							Get a free Quote
						</Button>
					</div>
				</Col>

			</Row>
		</Container>

		<div className="divider mt-50">
			<svg width="100%" height="96px" viewBox="0 0 100 100" preserveAspectRatio="none" className="injected-svg bg-dark"
					 data-src="/images/dividers/divider-5.svg">
				<path fill="#ffffff"
							d="M0,-2.13162821e-14 C16.6666667,66.6666667 33.3333333,100 50,100 C66.6666667,100 83.3333333,66.6666667 100,-2.13162821e-14 L100,100 L0,100 L0,-2.13162821e-14 Z"></path>
				<path fill="#ffffff"
							d="M0,2.13162821e-14 C11.1107835,33.3333333 19.4438711,50 24.9992629,50 C33.3328419,50 41.666421,5.09814413e-13 50,5.09814413e-13 C58.333579,5.09814413e-13 66.6671581,50 75.0007371,50 C80.5561289,50 88.8892165,33.3333333 100,2.13162821e-14 L100,100 L0,100 L0,2.13162821e-14 Z"
							fill-opacity="0.1"></path>
				<path fill="#ffffff"
							d="M0,2.13162821e-14 C44.4442806,66.6666667 69.4442806,100 75,100 C80.5553918,100 88.8887251,66.6666667 100,2.13162821e-14 L100,100 L0,100 L0,2.13162821e-14 Z"
							fill-opacity="0.1"></path>
				<path fill="#ffffff"
							d="M0,-2.13162821e-14 C44.4442806,66.6666667 69.4442806,100 75,100 C80.5553918,100 88.8887251,66.6666667 100,-2.13162821e-14 L100,100 L0,100 L0,-2.13162821e-14 Z"
							fill-opacity="0.1"
							transform="translate(50.000000, 50.000000) scale(-1, 1) translate(-50.000000, -50.000000) "></path>
			</svg>
		</div>

	</section>
)

export default Hero