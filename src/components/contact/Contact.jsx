import React from "react";
import "./Contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {FaTelegramPlane} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

function Contact() {
  return (
    <section id="contact">
      
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail className="contact_option-icon"/>
          <h4>Email</h4>
          <h5>foziljonovavazbek0807@gmail.com</h5>
          <a href="#!" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <FaTelegramPlane className="contact_option-icon"/>
          <h4>Telegram</h4>
          <h5>Prince</h5>
          <a href="#!" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <FiInstagram className="contact_option-icon"/>
          <h4>Instagram</h4>
          <h5>Prince</h5>
          <a href="#!" target="_blank">Send a message</a>
        </article>
      </div>
      <form action="#!">
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button className="btn btn-primary">Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact;