"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
};
export default function TestimonialSlider5() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        <SwiperSlide className="slide">
          <div className="testimonial-1-block">
            <p className="testimonial-1-review-desc">
              “Having Care inclusive Limited look after my mum was a relief and
              gave me the extra time l needed to focus on work knowing that my
              mum was well looked after. Thank you so much"
            </p>
            <p></p>
            <div className="testimonial-1-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4 className="testimonial-1-name">D C.</h4>
            <p className="testimonial-1-designation">
              Daughter of Service User
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-1-block">
            <p className="testimonial-1-review-desc">
              "Thank you Care lnclusive Limited for caring for our dad. Your
              carers were compassionate, reassuring and always on time. Much
              appreciated"
            </p>
            <div className="testimonial-1-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4 className="testimonial-1-name">R N.</h4>
            <p className="testimonial-1-designation">Service User</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-1-block">
            <p className="testimonial-1-review-desc">
              “I have never known or had experience with the warm, sensitive,
              helpful and dedicated care and support that I have received since
              becoming a service user of Care Inclusive as your first point of
              call for all your care needs. Their service is unbeatable. I Would
              be recommending them again. ”
            </p>
            <div className="testimonial-1-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4 className="testimonial-1-name">M T.</h4>
            <p className="testimonial-1-designation">Service User</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
