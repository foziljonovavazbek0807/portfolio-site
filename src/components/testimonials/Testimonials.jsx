import React from "react";
import "./Testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR1} alt="testimonial" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, alias
            quaerat explicabo nobis aliquid iusto sunt ipsum aperiam placeat
            laborum magnam saepe deserunt laudantium nisi dolor doloremque enim.
            Veniam, ab.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR2} alt="testimonial" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, alias
            quaerat explicabo nobis aliquid iusto sunt ipsum aperiam placeat
            laborum magnam saepe deserunt laudantium nisi dolor doloremque enim.
            Veniam, ab.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR3} alt="testimonial" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, alias
            quaerat explicabo nobis aliquid iusto sunt ipsum aperiam placeat
            laborum magnam saepe deserunt laudantium nisi dolor doloremque enim.
            Veniam, ab.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR4} alt="testimonial" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, alias
            quaerat explicabo nobis aliquid iusto sunt ipsum aperiam placeat
            laborum magnam saepe deserunt laudantium nisi dolor doloremque enim.
            Veniam, ab.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
