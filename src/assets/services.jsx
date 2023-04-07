import React from "react";
import Fold from "/public/img/fold.png";
import Iron from "/public/img/iron.png";
import Steam from "/public/img/steam.png";
import Clean from "/public/img/clean.png";

const services = () => {
  return (
    <section id="services" className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>We have got you covered for all your laundry needs</p>
      </div>
      <div className="service-content">
        <div className="service-flex">
          <div className="card">
            <div className="flexone">
              <div className="row one">
                <h2>Wash + Fold</h2> <br />
                <img src={Fold} className="radii" alt="" />
              </div>
              <div className="row two">
                <h2>Wash + Iron</h2> <br />
                <img src={Iron} className="radii" alt="" />
              </div>
            </div>
            <div className="flexone">
              <div className="row three">
                <h2>iron</h2> <br />
                <img src={Steam} className="radii" alt="" />
              </div>
              <div className="row four">
                <h2>shoe cleaning</h2> <br />
                <img src={Clean} className="radii" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
