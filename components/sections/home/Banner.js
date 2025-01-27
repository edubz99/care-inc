"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
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
};

export default function Banner() {
  return (
    <>
      <section className="banner-section">
        <Swiper
          {...swiperOptions}
          className="banner-carousel theme_carousel owl-theme"
        >
          <SwiperSlide className="slide-item">
            <div
              className="swiper-slide"
              style={{
                backgroundImage:
                  "url(assets/images/care-images/female-care-worker-with-senior-female-client-sitting-on-the-bed.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <h4>We care about you</h4>
                    <h1>
                      Helping you get the care you <br /> need
                    </h1>
                    <div className="text">
                      Compassionate Home Care Services Tailored to Your Needs
                    </div>
                    <div className="link-box">
                      <Link href="/" className="btn-1 btn-large">
                        Discover More <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div
              className="swiper-slide"
              style={{
                backgroundImage:
                  "url(assets/images/care-images/female-care-worker-with-senior-female-client-sitting-on-the-bed.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <h4>We care about you</h4>
                    <h1>
                      Finding The Best Senior <br /> Care Services
                    </h1>
                    <div className="text">
                      Compassionate Home Care Services Tailored to Your Needs
                    </div>
                    <div className="link-box">
                      <Link href="/" className="btn-1 btn-large">
                        Discover More <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="banner-shape">
            <img src="assets/images/shape/banner-shape.svg" alt="" />
          </div>
        </Swiper>
      </section>
    </>
  );
}
