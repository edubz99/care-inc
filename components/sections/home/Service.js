import Link from "next/link";

export default function Service() {
  return (
    <>
      <section className="service-1-section">
        <div className="auto-container">
          <div className="section_heading text-center mb_90">
            <span className="section_heading_title_small">Dedicated Care</span>
            <h2 className="section_heading_title_big">
              Everyone Deserves Our <br /> Best Services
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-1-block text-center wow fadeInLeft">
                <div className="service-1-icon">
                  <i className="icon-6"></i>
                </div>
                <h4 className="service-1-title">Personal Care</h4>
                <p className="service-1-text">
                  Providing personal and domestic care, <br />
                  helping with essential support daily routines, <br /> ensuring
                  dignity and comfort.
                </p>
                <div className="service-1-link">
                  <Link href="/personal-care">
                    <i className="icon-4"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-1-block text-center wow fadeInLeft">
                <div className="service-1-icon">
                  <i className="icon-8"></i>
                </div>
                <h4 className="service-1-title">Domestic Care</h4>
                <p className="service-1-text">
                  Domestic care, sitting services, and <br />
                  live-in options designed to create a safe <br />
                  and supportive home environment.
                </p>
                <div className="service-1-link">
                  <Link href="/domestic-care">
                    <i className="icon-4"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-1-block text-center wow fadeInLeft">
                <div className="service-1-icon">
                  <i className="icon-7"></i>
                </div>
                <h4 className="service-1-title">Companion Care</h4>
                <p className="service-1-text">
                  Accompanying clients to Medication <br />
                  or providing friendly companionship <br />
                  to reduce isolation and improve well-being.
                </p>
                <div className="service-1-link">
                  <Link href="/shopping">
                    <i className="icon-4"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
