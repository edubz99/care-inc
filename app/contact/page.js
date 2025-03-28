import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ContactForm from "@/components/elements/ContactForm";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
        <div>
          <section className="section-padding pb-0 p_relative">
            <div className="gray-bg h_280 l_0 b_0 r_0 p_absolute"></div>
            <div className="auto-container">
              <div className="row align-items-end">
                <div className="col-lg-5">
                  <div className="section_heading mb_40"></div>
                </div>
                <div className="col-lg-7">
                  <ul className="contact-info-1 d-flex flex-wrap justify-content-lg-end mb_40">
                    <li>
                      <h4 className="fs_20 mb_10"></h4>
                    </li>
                    <li>
                      <h4 className="fs_20 mb_10">
                        <i className="icon-16 mr_10 fs_18"></i>Phone
                      </h4>
                      <p>
                        <Link href="tel:+447835817028">07835 817028</Link>
                      </p>
                    </li>
                    <li>
                      <h4 className="fs_20 mb_10">
                        <i className="icon-15 mr_10 fs_15"></i>Email
                      </h4>
                      <p>
                        <Link href="mailto:info@careinclusive.co.uk">
                          info@careinclusive.co.uk
                        </Link>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding-contact gray-bg">
            <div className="auto-container">
              <div className="section_heading text-center mb_40">
                <span className="section_heading_title_small">Contact Us</span>
                <h2 className="section_heading_title_big">
                  We are here for you.
                </h2>
              </div>
              <div className="form-alt-3">
                <ContactForm includePhone={true} includeSubject={false} />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
