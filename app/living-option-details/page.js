"use client";
import Layout from "@/components/layout/Layout";
import ServicesCategories from "@/components/layout/ServicesCategories";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Live-In Care">
        <section className="section-padding">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 pe-lg-60">
                <ServicesCategories />
                <div className="contact-widget">
                  <h4 className="contact-widget-title">
                    Do You Need <br /> Any <span>Help?</span>
                  </h4>
                  <div className="contact-widget-icon">
                    <i className="icon-41"></i>
                  </div>
                  <div className="contact-widget-bottom-info">
                    <p className="contact-widget-mail">
                      <Link href="mailto:info@careinclusive.co.uk">
                        info@careinclusive.co.uk
                      </Link>
                    </p>
                    <h3 className="contact-widget-phone">
                      <Link href="tel:07835 817028">07835 817028</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="service-details">
                  <div className="service-details-image mb_60">
                    <img src="assets/images/resource/service-13.jpg" alt="" />
                  </div>
                  <h2 className="service-details-title mb_20">Live-In Care</h2>
                  <p className="service-details-desc mb_20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis et enim justo, in mauris posuere dolor. Dolor felis
                    sapien sit egestas. Ut venenatis faucibus non sed faucibus
                    mauris ultricies. Cras varius proin amet vehicula magna.
                    Ultricies gravida vel volutpat sed. Platea sed fames at
                    egestas amet feugiat laoreet sed potenti integer. Viverra at
                    maecenas convallis condimentum egestas nunc sagittis eu.
                    Semper faucibus facilisis vitae sollicitudin.
                  </p>
                  <p className="service-details-desc mb_70">
                    Fringilla mauris magna sit elementum elit. Facilisi lacus,
                    pharetra quam eu urna amet aenean. Nunc mattis vitae tellus
                    bibendum a eu, nunc. Consequat commodo ac cursus in donec
                    orci tempus. Massa sed sit faucibus neque habitant
                    consequat.
                  </p>
                  <div className="row mb_30">
                    <div className="col-md-6">
                      <h4 className="service-details-title2 mb_15">Overview</h4>
                      <p className="service-details-desc mb_20">
                        Mauris magna sit elementum elit. Facilis etra
                        lacusacphar etra quam eu urna amet aenean Nunc mattis
                        vitae tellus bibendum.
                      </p>
                      <ul className="service-details-lsit mb_30">
                        <li>Nunc mattis vitae</li>
                        <li>Mauris magna sit</li>
                        <li> Consequat commodo ac</li>
                        <li>Massa sed sit faucibus </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <div className="service-details-image mb_30">
                        <img
                          src="assets/images/resource/service-8.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="service-details-title2 mb_20">Heading</h4>
                  <p className="service-details-desc mb_30">
                    Enim justo, in mauris posuere dolor. Dolor felis sapien sit
                    egestas. Ut venenatis faucibus non sed faucibus mauris
                    ultricies. Cras varius proin amet vehicula magna. Ultricies
                    gravida vel volutpat sed. Platea sed fames at egestas amet
                    feugiat laoreet sed potenti integer.
                  </p>
                  <div className="row mb_40">
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <i className="icon-42"></i>
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            Title
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Mauris magna sit elementum facilis <br />
                            etra lacusacphar.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <i className="icon-42"></i>
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            Title
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Mauris magna sit elementum facilis <br /> etra
                            lacusacphar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
