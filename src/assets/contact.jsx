import React from 'react'
import { FiPhone, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ImWhatsapp } from "react-icons/im";
const contact = () => {
  return (
    <div className='contact'>
        <h1>contact us</h1>
        <p>Reach us on here</p>
        <div className="contact-dets">
            <div className="whatsapp">
            <Link
              to="https://wa.me/2347039581644?text=Hello%2C%20I%20have%20some%20laundry%20at%20%0ALocation%3A%20"
              target="_blank"
              className="order-btn whatsapp"
            >
              <ImWhatsapp /> Whatsapp Order
            </Link>
            </div>
            <div className="instagram"><Link
              to="https://www.instagram.com/direct/t/340282366841710301244276092227017808907"
              target="_blank"
              className="order-btn instagram"
            >
              <FiInstagram /> Instagram Order
            </Link></div>
            <div className="phone-call"><Link to="tel:+2347039581644" className="order-btn">
              <FiPhone /> Telephone Order
            </Link></div>
        </div>
    </div>
  )
}

export default contact