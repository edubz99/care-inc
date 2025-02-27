import TestimonialSlider5 from "@/components/slider/TestimonialSlider5";

export default function Testimonial() {
  return (
    <>
      <section className="testimonial-1-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section_heading mb_20">
                <span className="section_heading_title_small">
                  Testimonials
                </span>
                <h2 className="section_heading_title_big">
                  What <br /> They’re Say <br /> About Us?
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="testimonial-1-block-wrap">
                <div className="testimonial-1-shape-1">
                  <img src="assets/images/shape/pattern-1.png" alt="" />
                </div>
                <div className="testimonial-1-shape-2">
                  <img src="assets/images/shape/pattern-1.png" alt="" />
                </div>
                <TestimonialSlider5 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
