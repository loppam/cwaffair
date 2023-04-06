import React from "react";
import { Link } from "react-router-dom";
import HeadImg from "/public/img/headimg.png";
import { FiPhone } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
const head = () => {
  return (
    <div className="head">
      <div className="head-flex">
        <div className="head-flex-img">
          <img src={HeadImg} className="head-img" alt="" />
        </div>
        <div className="head-flex-text">
          <h2>
            Laundry Day <span className="strike">Done</span> Gone
          </h2>
          <p>
            It’s time to say goodbye to laundry day when you wash with{" "}
            <span className="col">CEPHAS</span> Wardrobe Affair
            <br /> <br /> We’ll take care of all your laundry needs so you never
            have to worry about washing, drying, or folding your clothes ever
            again! <br /> <br /> Serving Malete.
          </p>
          <div className="flexonee">
            <Link
              to="https://wa.me/2347039581644?text=Hello%2C%20I%20have%20some%20laundry%20at%20%0ALocation%3A%20"
              target="_blank"
              className="order-btn whatsapp"
            >
              <ImWhatsapp /> Whatsapp Order
            </Link>
            <Link to="tel:+2347039581644" className="order-btn">
              <FiPhone /> Telephone Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default head;
