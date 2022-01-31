import React from 'react';

import logoImg from '../images/logo.png'
import Seo from "../components/Seo"

export default function Terms() {
  return (
    <>
      <Seo title="Terms of Service"/>

      <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
      <img src={logoImg} alt="" />
    </>
  )
}
