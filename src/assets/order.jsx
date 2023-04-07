import React from 'react'
import Ordericon from "/public/img/ordericon.png"
// import Cleanicon from "/public/cleanicon.png"

import Deliveredicon from "/public/img/deliveredicon.png"

const order = () => {
  return (
    <div className='order'>
        <h1>The Process</h1>
        <p>What we do</p>
        <div className="order-flex">
            <div className="order-card">
                <div className="order-row">
                    <img src={Ordericon} alt="" />
                    <h2>Order</h2>
                    <p>Schedule a pickup in your convinient time at your home, office or somewhere else.</p>
                </div>
                <div className="order-row">
                    <img src={Cleanicon} alt="" />
                    <h2>Clean</h2>
                    <p>Tell us about your laundry preferences and our Clean Team will handle the rest.</p>
                </div>
                <div className="order-row">
                    <img src={Deliveredicon} alt="" />
                    <h2>Delivered</h2>
                    <p>We’ll deliver your items freshly folded or hung, according to your specifications. Laundry Day done.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default order