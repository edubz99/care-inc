"use client";
import Layout from "@/components/layout/Layout";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        <section className="about-1-section">
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
                    Learn About <br /> <span>Care Inclusive Limited</span>
                  </h2>
                </div>
                <p className="aboout-1-desc">
                  Our team of trained carers bring expertise in a range of care
                  services, from personal support and companionship. We
                  prioritise a holistic approach, focusing not just on physical
                  health, but also on emotional well- being and quality of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-details-section my_40">
          <div className="auto-container">
            <div className="section_heading text-center mb_30">
              <span className="section_heading_title_small">About Us</span>
              <h2 className="section_heading_title_big mb_40">
                Welcome to <span>Care Inclusive Limited</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="about-details-text">
                  <p>
                    Welcome to Care Inclusive Limited, where compassion meets
                    professionalism. As a newly established care provider, our
                    mission is to deliver exemplary support tailored to the
                    unique needs of each client we serve. We understand that
                    each journey is personal, and we are committed to fostering
                    a nurturing, safe, and respectful environment for our
                    clients and their families.
                  </p>
                  <p>
                    Our team of trained carers bring expertise in a range of
                    care services, from personal support and companionship. We
                    prioritise a holistic approach, focusing not just on
                    physical health, but also on emotional well-being and
                    quality of life. At Care Inclusive Limited we believe that
                    everyone deserves access to high-quality care that empowers
                    them to live their best lives.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-details-contact">
                  <p>
                    Our manager is an Occupational Therapist by profession and
                    is our moving and handling specialist. We emphasise open
                    communication and collaboration, actively involving clients
                    and their families in the care planning process. We value
                    the trust you place in us and strive to build lasting
                    relationships founded on respect, integrity, and kindness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="philosophy-of-care-section py_40">
          <div className="auto-container">
            <div className="section_heading text-center mb_50">
              <span className="section_heading_title_small">
                Our Philosophy of Care
              </span>
              <h2 className="section_heading_title_big mb_50">
                Empowering Care, Delivered with <span>Compassion</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="philosophy-card">
                  <div className="philosophy-card-icon">
                    <i className="icon-8"></i>
                  </div>
                  <h4 className="philosophy-card-title">
                    Home Care as a Right
                  </h4>
                  <p className="philosophy-card-text">
                    Receiving care in your own home is a basic human right. It
                    must be available, coordinated, and provided comprehensively
                    with other services when appropriate.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="philosophy-card">
                  <div className="philosophy-card-icon">
                    <i className="icon-6"></i>
                  </div>
                  <h4 className="philosophy-card-title">
                    Equal Opportunity Care
                  </h4>
                  <p className="philosophy-card-text">
                    Care Inclusive provides quality care on an equal opportunity
                    basis in the most cost-effective and sensible way,
                    supporting people in their homes for as long as possible.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="philosophy-card">
                  <div className="philosophy-card-icon">
                    <i className="icon-42"></i>
                  </div>
                  <h4 className="philosophy-card-title">
                    Dedicated & Reliable Staff
                  </h4>
                  <p className="philosophy-card-text">
                    Our dedicated staff are chosen for their skills and passion.
                    They ensure you are treated with dignity and respect, and
                    your care plan is regularly updated.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="philosophy-card">
                  <div className="philosophy-card-icon">
                    <i className="icon-43"></i>
                  </div>
                  <h4 className="philosophy-card-title">One-to-One Care</h4>
                  <p className="philosophy-card-text">
                    We promote one-to-one care, ensuring clients see familiar
                    faces. Continuity of care helps us build trust and provide
                    the highest quality of service.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="philosophy-card">
                  <div className="philosophy-card-icon">
                    <i className="icon-35"></i>
                  </div>
                  <h4 className="philosophy-card-title">
                    Compassionate Mission
                  </h4>
                  <p className="philosophy-card-text">
                    Our mission is to support the highest quality of life for
                    our clients by exceeding expectations, promoting
                    independence, and prioritising well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <TestimonialSlider1 />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
