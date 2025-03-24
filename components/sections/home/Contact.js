import ContactForm from "@/components/elements/ContactForm";

export default function Contact() {
  return (
    <>
      <section className="contact-1-section pt-lg-0">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="section_heading mb_60">
                <span className="section_heading_title_small">Contact Us</span>
                <h2 className="section_heading_title_big">
                  Want to Hear More About <br /> Care Inclusive?
                </h2>
              </div>
              <ContactForm includePhone={false} includeSubject={true} />
            </div>
            <div className="col-lg-6">
              <div className="contact-1-image-wrap">
                <div className="contact-1-shape-1">
                  <img src="assets/images/shape/pattern-1.png" alt="" />
                </div>
                <div className="contact-1-shape-2">
                  <img src="assets/images/shape/pattern-1.png" alt="" />
                </div>
                <div className="contact-1-image wow fadeInLeft">
                  <img
                    src="assets/images/care-images/female-theropist-carrying-out-tapping-session-with-a-senior-man.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}