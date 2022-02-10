import React, { useState } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import 'typeface-cantata-one'
// import 'typeface-open-sans'
// import 'inter-ui'
import PropTypes from 'prop-types'

// import { ThemeProvider } from 'styled-components'
import { ThemeProvider } from "../../libs/contexts"
// import { lightTheme, darkTheme } from '../../libs/theme'
// import { useDarkMode } from '../../libs/useDarkMode'

import Header from "../Header"
import Footer from "../Footer2"

import { GlobalStyles } from '../../styles/global'
import "./Layout.css"

const Layout = ({ children }) => {
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // const [theme, toggleTheme] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // const Toggle = ({ toggleTheme }) => {
    
  //   return (
  //     <button onClick={toggleTheme} >
  //       Toggle theme
  //     </button>
  //   );
  // };

  return (
    <ThemeProvider /*theme={themeMode}*/>
      <>
        <GlobalStyles/>

        <Header/>

        {/*<Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>*/}

        {/*<Toggle toggleTheme={toggleTheme} />*/}

        {children}

        <Footer/>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
