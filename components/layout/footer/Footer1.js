import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="footer-1">
        <div className="footer-1-top">
          <div className="auto-container">
            <div className="footer-1-top-content d-flex align-items-center justify-content-between">
              <div className="logo">
                <Link href="/">
                  <img src="assets/images/care-inclusive-logo-1.svg" alt="" />
                </Link>
              </div>
              <ul className="footer-1-social-icon d-flex align-items-center">
                <li>
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-1-middle">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="about-widget-1">
                  <div className="footer-widget-title">
                    <h4>About</h4>
                  </div>
                  <div className="about-widget-1-text">
                    <p>
                      Care Inclusive Limited provides compassionate, tailored
                      care,
                      <br /> focusing on physical and emotional well-being.
                    </p>
                    <p>
                      With expertise and collaboration,
                      <br />
                      we empower clients to live fulfilling, independent lives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6"></div>
              <div className="col-lg-3 col-md-6"></div>
              <div className="col-lg-3 col-md-6">
                <div className="contact-widget-1">
                  <div className="footer-widget-title">
                    <h4>Contact Us</h4>
                  </div>
                  <div className="contact-widget-text">
                    Our team are ready to help.
                  </div>
                  <ul className="contact-widget-1-list">
                    <li>
                      <i className="icon-14"></i> Leeds, UK
                    </li>
                    <li>
                      <i className="icon-3"></i>
                      <Link href="mailto:info@careinclusive.co.uk">
                        info@careinclusive.co.uk
                      </Link>
                    </li>
                    <li>
                      <i className="icon-2"></i>
                      <Link href="tel:+447835817028">07835 817028</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="footer-bottom-row">
              <div className="footer-bottom-text">
                &copy; {new Date().getFullYear()} Care Inclusive Limited. All
                Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
