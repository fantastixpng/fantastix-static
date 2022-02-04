import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from '../../styles/global'
// import 'typeface-cantata-one'
// import 'typeface-open-sans'

import Header from "../Header"
import "./Layout.css"
import Footer from "../Footer"

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

  return (
    <>
      <GlobalStyle/>

      <Header/>

      {/*<Breadcrumb>*/}
      {/*  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>*/}
      {/*  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">*/}
      {/*    Library*/}
      {/*  </Breadcrumb.Item>*/}
      {/*  <Breadcrumb.Item active>Data</Breadcrumb.Item>*/}
      {/*</Breadcrumb>*/}

      {children}

      <Footer/>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
