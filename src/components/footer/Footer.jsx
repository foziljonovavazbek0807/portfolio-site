import React from "react";
import "./Footer.css";
import {FaFacebookF} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#!" className="footer_logo">Prince</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="#!"><FaFacebookF/></a>
      </div>
    </footer>
  )
}

export default Footer;