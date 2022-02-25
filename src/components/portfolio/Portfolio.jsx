import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="#!" target='_blank'>Github</a>
          <a href="#!" target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;