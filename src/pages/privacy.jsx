import React from 'react';
import { Helmet } from 'react-helmet';

import logoImg from '../images/logo.png'
import Seo from "../components/Seo"

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy"/>

      <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
      <img src={logoImg} alt="" />
    </>
  )
}
