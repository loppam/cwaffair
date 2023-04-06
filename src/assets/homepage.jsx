import React from 'react'
import Head from './head'
import Services from './services'
import Pricing from './pricing'
import Order from './order'
import Footer from './footer'

const homepage = () => {
  return (
    <div>
      <Head/>
      <Services />
      <Order />
      <Pricing />
      <Footer />
    </div>
  )
}

export default homepage