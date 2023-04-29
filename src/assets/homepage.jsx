import React from 'react'
import Head from './head'
import Services from './services'
import Pricing from './pricing'
import Order from './order'
import Contact from './contact'

const homepage = () => {
  return (
    <div>
      <Head/>
      <Services />
      <Order />
      <Pricing />
      <Contact />

    </div>
  )
}

export default homepage