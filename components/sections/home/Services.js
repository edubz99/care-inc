import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="service-4-section">
        <div className="auto-container">
          <div className="section_heading text-center mb_60">
            <span className="section_heading_title_small">Our Services</span>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-4-block text-center wow fadeInLeft">
                <div className="service-4-icon">
                  <i className="icon-6"></i>
                </div>
                <h4 className="service-4-title">
                  <Link href="/personal-care">Personal Care</Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-4-block text-center wow fadeInLeft">
                <div className="service-4-icon">
                  <i className="icon-6"></i>
                </div>
                <h4 className="service-4-title">
                  <Link href="/medication">Medication</Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-4-block text-center wow fadeInLeft">
                <div className="service-4-icon">
                  <i className="icon-31"></i>
                </div>
                <h4 className="service-4-title">
                  <Link href="/shopping">Shopping</Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-4-block text-center wow fadeInLeft">
                <div className="service-4-icon">
                  <i className="icon-42"></i>
                </div>
                <h4 className="service-4-title">
                  <Link href="/domestic-care">Domestic Care</Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-4-block text-center wow fadeInLeft">
                <div className="service-4-icon">
                  <i className="icon-8"></i>
                </div>
                <h4 className="service-4-title">
                  <Link href="/sitting-services">Sitting Services</Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-4-block text-center wow fadeInLeft">
                <div className="service-4-icon">
                  <i className="icon-31"></i>
                </div>
                <h4 className="service-4-title">
                  <Link href="/living-care">Living Care</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="service-4-link-btn text-center">
            <Link href="/services" className="btn-1">
              Find out More <span></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
