import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import 'inter-ui'
import PropTypes from 'prop-types'

import { ThemeProvider, ToastProvider } from "../../contexts/app-context"
import { lightTheme, darkTheme } from "../../hooks/theme"
import { useDarkMode } from "../../hooks/use-dark-mode"
import { useSiteMetadata } from "../../hooks/use-site-metadata";

import Header from "../Header"
import Footer from "../Footer2"

import "./Layout.scss"
import Seo from "../Seo";
import { ToastContainer } from "react-bootstrap"

const Layout = ({ children }) => {
  const { site } = useSiteMetadata();

  return (
    <>
      {/* <ThemeProvider> */}
      {/* <ToastProvider> */}

        <Seo title="Home" />

        <Header />

        {/*<Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>*/}

        {/*<Toggle toggleTheme={toggleTheme} />*/}

        {children}

        <Footer />
      {/* </ToastProvider> */}
      {/* </ThemeProvider> */}
    </>
  )
}

export default Layout;