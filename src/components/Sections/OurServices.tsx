import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects.json";

export default function OurServices() {
    return (
        <section id="services" className="bg-black text-light text-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={9} lg={7} xl={6} xxl={5}>
                        <p className="fs-2">Services</p>
                        <h5
                            className="display-5 mb-6 aos-init aos-animate"
                            data-aos="fade-down"
                            data-aos-delay="0"
                        >
                            Our Solutions
                        </h5>
                        <p
                            className="lead mb-15 aos-init aos-animate"
                            data-aos="fade-down"
                            data-aos-delay="250"
                        >
                            Discover what we do
                        </p>
                    </Col>
                </Row>

                <Row
                    xs={1}
                    md={2}
                    className="row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3"
                >
                    {/* {projects
                        .filter(project => !project.open_source)
                        .filter(project => project.show)
                        .map((project, key) => (
                            <Col className="hover-effect" key={key}>
                                <ProjectCard data={project} />
                            </Col>
                        ))} */}

                    <Col
                        lg={6}
                        className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-delay="0"
                    >
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-action-2 d-block mx-auto"
                        >
                            <path d="M11 17.5C10.5858 17.5 10.25 17.8358 10.25 18.25C10.25 18.6642 10.5858 19 11 19H13C13.4142 19 13.75 18.6642 13.75 18.25C13.75 17.8358 13.4142 17.5 13 17.5H11Z" />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 2C6.75736 2 5.75 3.00736 5.75 4.25V19.75C5.75 20.9926 6.75736 22 8 22H16C17.2426 22 18.25 20.9926 18.25 19.75V4.25C18.25 3.00736 17.2426 2 16 2H8ZM7.25 4.25C7.25 3.83579 7.58579 3.5 8 3.5H16C16.4142 3.5 16.75 3.83579 16.75 4.25V19.75C16.75 20.1642 16.4142 20.5 16 20.5H8C7.58579 20.5 7.25 20.1642 7.25 19.75V4.25Z"
                            />
                        </svg>

                        <h5 className="mb-4 mt-6">Mobile App Development</h5>
                        <p className="mb-0">
                            We create high-quality, modern native Android apps tailored to your business needs. Our apps work smoothly across all Android smartphones and tablets, ensuring your customers enjoy the same visual quality and seamless experience on any device.
                        </p>
                    </Col>

                    <Col
                        lg={6}
                        className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-delay="250"
                    >
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-action-2 d-block mx-auto"
                        >
                            <path d="M21.5625 50.625C22.1887 49.3762 22.5 47.5013 22.5 45H37.5C37.5 47.5013 37.8113 49.3762 38.4375 50.625H41.25C41.7473 50.625 42.2242 50.8225 42.5758 51.1742C42.9275 51.5258 43.125 52.0027 43.125 52.5C43.125 52.9973 42.9275 53.4742 42.5758 53.8258C42.2242 54.1775 41.7473 54.375 41.25 54.375H18.75C18.2527 54.375 17.7758 54.1775 17.4242 53.8258C17.0725 53.4742 16.875 52.9973 16.875 52.5C16.875 52.0027 17.0725 51.5258 17.4242 51.1742C17.7758 50.8225 18.2527 50.625 18.75 50.625H21.5625Z"></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M52.4663 11.25H7.5C6.28125 11.25 5.6175 11.5425 5.2425 11.7937C4.83058 12.0805 4.50195 12.4713 4.29 12.9262C3.97035 13.5867 3.78671 14.3047 3.75 15.0375V37.5C3.75 38.7188 4.0425 39.3825 4.29375 39.7575C4.55625 40.1513 4.93125 40.4625 5.42625 40.71C6.05826 41.0161 6.74314 41.1982 7.44375 41.2463L7.5375 41.25H52.5C53.7188 41.25 54.3825 40.9575 54.7575 40.7062C55.1694 40.4195 55.4981 40.0287 55.71 39.5738C56.0161 38.9417 56.1982 38.2569 56.2463 37.5563L56.25 37.4625V15C56.25 13.7812 55.9575 13.1175 55.7062 12.7425C55.4196 12.3305 55.0288 12.0018 54.5738 11.79C53.9133 11.4703 53.1953 11.2867 52.4625 11.25H52.4663ZM52.5 7.5H7.5C0 7.5 0 15 0 15V37.5C0 45 7.5 45 7.5 45H52.5C60 45 60 37.5 60 37.5V15C60 7.5 52.5 7.5 52.5 7.5Z"
                            ></path>
                        </svg>
                        <h5 className="mb-4 mt-6">Web App Development</h5>
                        <p className="mb-0">
                            We design and build modern web applications that are fast, responsive, and easy to use. Whether it's a business dashboard, online service, or customer portal, our web apps work smoothly across all devices and browsers. We focus on creating user-friendly designs and reliable features to help your business grow online.
                        </p>
                    </Col>

                    <Col
                        lg={6}
                        className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-delay="0"
                    >
                        <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="white" fillOpacity="0.01" height="60" width="60" />
                            <path d="M37 22.0001L34 25.0001L23 14.0001L26 11.0001C27.5 9.50002 33 7.00005 37 11.0001C41 15.0001 38.5 20.5 37 22.0001Z" fill="#FFFFFF" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                            <path d="M42 6L37 11" stroke="#eee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                            <path d="M11 25.9999L14 22.9999L25 33.9999L22 36.9999C20.5 38.5 15 41 11 36.9999C7 32.9999 9.5 27.5 11 25.9999Z" fill="#FFFFFF" stroke="#eee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                            <path d="M23 32L27 28" stroke="#eee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                            <path d="M6 42L11 37" stroke="#eee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                            <path d="M16 25L20 21" stroke="#eee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                        </svg>
                        <h5 className="mb-4 mt-6">Backend/API Development</h5>
                        <p className="mb-0">
                            We build powerful and secure backend systems to support your mobile apps, websites, and software. Our custom APIs are designed for speed, scalability, and easy integration with any platform. Whether you're managing users, storing data, or connecting services, we make sure your backend runs smoothly and reliably behind the scenes.
                        </p>
                    </Col>

                    <Col
                        lg={6}
                        className="mb-8 mt-lg-0 mb-lg-0 aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-delay="500"
                    >
                        {/* <i className="bi bi"/> */}
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 61 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-action-2 d-block mx-auto"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M42.692 0.254703C43.059 0.467472 43.343 0.798416 43.4976 1.19347C43.6523 1.58852 43.6683 2.02433 43.5432 2.4297L36.7895 24.3747H49.2507C49.617 24.3746 49.9752 24.4817 50.2812 24.6828C50.5873 24.8839 50.8277 25.1702 50.9729 25.5064C51.118 25.8426 51.1616 26.214 51.0981 26.5746C51.0347 26.9353 50.867 27.2695 50.6157 27.536L20.6157 59.411C20.3255 59.7196 19.9392 59.9209 19.5199 59.9819C19.1006 60.0429 18.673 59.9601 18.3068 59.747C17.9405 59.5339 17.6573 59.203 17.5032 58.8083C17.3491 58.4136 17.3333 57.9783 17.4582 57.5735L24.212 35.6247H11.7507C11.3845 35.6248 11.0263 35.5178 10.7203 35.3166C10.4142 35.1155 10.1738 34.8292 10.0286 34.493C9.88345 34.1568 9.83991 33.7854 9.90337 33.4248C9.96684 33.0641 10.1345 32.7299 10.3857 32.4635L40.3857 0.588453C40.6757 0.2802 41.0613 0.0790857 41.4801 0.0178105C41.8988 -0.0434648 42.3259 0.0387029 42.692 0.250953V0.254703ZM16.0895 31.8747H26.7507C27.0442 31.8746 27.3335 31.9435 27.5955 32.0756C27.8575 32.2077 28.0848 32.3995 28.2592 32.6355C28.4335 32.8716 28.5501 33.1452 28.5994 33.4344C28.6488 33.7237 28.6295 34.0205 28.5432 34.301L23.4132 50.9622L44.9082 28.1247H34.2507C33.9573 28.1248 33.668 28.0559 33.406 27.9238C33.144 27.7917 32.9167 27.5999 32.7423 27.3639C32.5679 27.1279 32.4514 26.8542 32.4021 26.565C32.3527 26.2757 32.372 25.9789 32.4582 25.6985L37.5882 9.0372L16.0895 31.8747Z"
                            ></path>
                        </svg>
                        <h5 className="mb-4 mt-6">Hybrid App Development</h5>
                        <p className="mb-0">
                            We create fast and reliable hybrid apps that work on both Android and iOS using a single codebase. This means quicker development, lower costs, and a consistent user experience across devices. Whether it's a business tool or a customer-facing app, we build apps that look and feel great on any platform.
                        </p>
                    </Col>
                </Row>

                {/*<Row className="justify-content-center">
    <Col className="col-auto mt-20">
      <Button variant={"outline-light"} href="/services" className="icon-link">
        Services
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </Button>
    </Col>
  </Row>*/}
            </Container>
        </section >
    )
}