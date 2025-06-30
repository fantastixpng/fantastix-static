import React, { useState, useEffect } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import Hamburger from 'hamburger-react'
import { getImage, getImageData } from "gatsby-plugin-image"

import AnimatedIcon from "../components/AnimatedIcon"
import LogoBlack from "../images/logo-black.svg"

const navTop = {
  backgroundColor: "#333",
  transition: "all 0.3s",
};
const navScroll = {
  backgroundColor: "#F00",
  transition: "all 0.3s",
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [navState, setNavState] = useState(navTop);

  useEffect(() => {
    window.onscroll = () => {
      const { innerHeight: height, scrollY: scrollPosition } = window;
      scrollPosition > height - 100
        ? setNavState(navScroll)
        : setNavState(navTop);
    };
  }, []);

  return (
    <header className="position-absolute w-100 top-0 z-100" style={navState}>

      <Navbar
        variant={"light"}
        expand={"lg"}
        className="navbar-custom site-navbar site-header py-3 py-lg-7"
        aria-label="Navbar"
        role="banner">

        <Container className="navbar-container">
          <Navbar.Brand href="/" className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none">
            <figure className="mb-0 mb-lg-0 me-lg-4">
              <img
                src={LogoBlack}
                width={160}
                alt="logo"
                className="d-inline-block align-top logo"
              >
              </img>
              {/*<span className="fs-4 hidden">fantastix</span>*/}
            </figure>
          </Navbar.Brand>

          {/*<AnimatedIcon/>*/}
          <Navbar.Toggle>
            {/* <Hamburger rounded toggled={isOpen} toggle={setOpen} size="23" /> */}
          </Navbar.Toggle>

          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-end">
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/#who-we-are">Who We Are</Nav.Link>
              <Nav.Link href="/#our-work">Our Work</Nav.Link>
              <Nav.Link href="/#services">Services</Nav.Link>
              <Nav.Link href="/#pricing">Pricing</Nav.Link>
              <Nav.Link href="/#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/*<div className="d-grid d-lg-none">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#colorlib-main-nav"
            aria-controls="colorlib-main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <i className="bi bi-list" />
              </span>
          </button>
        </div>*/}

          {/*<div className="row align-items-center">
          <div className="col-11 col-xl-2">
            <h1 className="mb-0 site-logo">
              <a href="" className="text-white mb-0">
                Brand
              </a>
            </h1>
          </div>
          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right"
                 role="navigation">
              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active">
                  <a href="">
                    <span>Home</span>
                  </a>
                </li>
                <li className="has-children">
                  <a href="about">
                    <span>Dropdown</span>
                  </a>
                  <ul className="dropdown arrow-top">
                    <li>
                      <a href="#">Menu One</a>
                    </li>
                    <li>
                      <a href="#">Menu Two</a>
                    </li>
                    <li>
                      <a href="#">Menu Three</a>
                    </li>
                    <li className="has-children">
                      <a href="#">Dropdown</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Menu One</a>
                        </li>
                        <li>
                          <a href="#">Menu Two</a>
                        </li>
                        <li>
                          <a href="#">Menu Three</a>
                        </li>
                        <li>
                          <a href="#">Menu Four</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="listings">
                    <span>Listings</span>
                  </a>
                </li>
                <li>
                  <a href="about">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="blog">
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a href="contact">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
            style={{
              position: "relative",
              top: "3px"
            }}>
            <a
              href="#"
              className="site-menu-toggle js-menu-toggle text-white">
              <span className="icon-menu h3" />
            </a>
          </div>
        </div>*/}

          {/*<header hidden className="hidden d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom site-header">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src={logoBlack} width="160"/>
            <span className="fs-4 hidden">fantastix</span>
          </Link>
          <ul className="nav nav-pills">
            <li className="nav-item"><Link to="/" className="active nav-link rounded-pill" aria-current="page">Home</Link></li>
            <li className="nav-item"><Link to="/who-we-are" className="active nav-link rounded-pill">Who We Are</Link></li>
            <li className="nav-item"><Link to="/our-work" className="active nav-link rounded-pill">Our Work</Link></li>
            <li className="nav-item"><Link to="/contact" className="active nav-link rounded-pill">Contact</Link></li>
          </ul>
        
          <a href="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <figure className="mb-2 mb-lg-0 mr-lg-4">
              <img className="logo" src={logoBlack} width={160} />
            </figure>
          </a>
          <ul className="nav nav-pills d-none d-lg-flex">
            <li className="nav-item">
              <a href=""
                 className="active nav-link rounded-pill"
                 aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="who-we-are" className=" nav-link rounded-pill">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="our-work" className=" nav-link rounded-pill">
                My Work
              </a>
            </li>
            {}
            <li className="nav-item">
              <a href="#pricing" className=" nav-link rounded-pill">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="contact" className=" nav-link rounded-pill">
                Contact
              </a>
            </li>
          </ul>
        </header>*/}

          {/*<button*/}
          {/*  className="navbar-toggler"*/}
          {/*  type="button"*/}
          {/*  data-bs-toggle="collapse"*/}
          {/*  data-bs-target="#navbars"*/}
          {/*  aria-controls="navbars"*/}
          {/*  aria-expanded="false"*/}
          {/*  aria-label="Toggle navigation">*/}
          {/*  <span className="navbar-toggler-icon"/>*/}
          {/*  /!*<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg>*!/*/}
          {/*</button>*/}

          {/*<div id="navbars" className="collapse navbar-collapse justify-content-end">*/}
          {/*  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">*/}
          {/*    <li className="nav-item">*/}
          {/*      <Link className="nav-link" aria-current="page" to="/home">Home</Link>*/}
          {/*    </li>*/}
          {/*    <li className="nav-item">*/}
          {/*      <Link*/}
          {/*        to="/who-we-are"*/}
          {/*        className={isActive => "nav-link" + (!isActive ? " unselected" : "") }>Who We Are</Link>*/}
          {/*    </li>*/}
          {/*    <li className="nav-item">*/}
          {/*      <Link*/}
          {/*        to="/our-work"*/}
          {/*        className="nav-link">Our Work</Link>*/}
          {/*    </li>*/}
          {/*    <li className="nav-item">*/}
          {/*      <Link to="/pricing" className="nav-link">Pricing</Link>*/}
          {/*    </li>*/}
          {/*    <li className="nav-item">*/}
          {/*      <Link to="/contact" className="nav-link">Contact</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}

          {/*  <Link to="/quote" className="btn btn-outline btn-outline-dark">Request a Quote</Link>*/}
          {/*</div>*/}

        </Container>

      </Navbar>
    </header>
  )
}

export default Header
