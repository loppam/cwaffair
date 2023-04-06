import { useState, React } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "/public/img/logo.png"
import "./navbar.css";

const navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo"><img src={Logo} className="logo-img" alt="image" /></div>
      <ul className={Mobile ? "mobile-link" : "nav-links"} onClick={() => setMobile(false)}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#services">Services</Link>
        </li>
        <li>
          <Link to="#pricing">Pricing</Link>
        </li>
        <li>
          <Link to="#contact">Contact Us</Link>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default navbar;
