import React from "react";
import "./Footer.css";
import {FaTelegramPlane} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {RiWhatsappFill} from "react-icons/ri";

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
        <a href="#!"><FaTelegramPlane className="icon"/></a>
        <a href="#!"><RiInstagramFill className="icon"/></a>
        <a href="#!"><RiWhatsappFill className="icon"/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Prince Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;