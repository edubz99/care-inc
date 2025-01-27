"use client";
import Link from "next/link";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="about-1-section pt-0">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-1-image-wrap">
                <div className="about-1-shape-1">
                  <img src="assets/images/shape/pattern-1.png" alt="" />
                </div>
                <div className="about-1-shape-2">
                  <img src="assets/images/shape/pattern-1.png" alt="" />
                </div>
                <div className="about-1-image-1">
                  <img
                    src="assets/images/care-images/470x590-care-worker-with-senior-female-dinner-time.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section_heading mb_20">
                <span className="section_heading_title_small">
                  About Care Inclusive
                </span>
                <h2 className="section_heading_title_big">
                  Learn About <br /> <span>Care Inclusive</span> Professional{" "}
                  <br /> Senior Care <span>Agency</span>
                </h2>
              </div>
              <p className="aboout-1-desc">
                Our team of trained carers bring expertise in a range of care
                services, from personal support and companionship. We prioritise
                a holistic approach, focusing not just on physical health, but
                also on emotional well- being and quality of life.
              </p>
              <ul className="about-1-list">
                <li>Compassionate care tailored to your unique needs.</li>
                <li>
                  Holistic approach prioritizing health, well-being, and
                  quality.
                </li>
                <li>
                  Building trust through respect, integrity, and kindness.
                </li>
              </ul>
              <div className="about-1-btn">
                <Link href="/about" className="btn-1">
                  Read More<span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="vfhzo499OeA"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
