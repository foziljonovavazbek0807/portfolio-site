import React from "react";
import "./Experience.css";
import {BsPatchCheckFill} from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">

      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="container__frontend">
          <h3>Frontend Development(stap one)</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>CSS/SCSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="container__frontend">
          <h3>Frontend Development(stap two)</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Elementary</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>JQuery</h4>
                <small className="text-light">Elementary</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>React js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience;