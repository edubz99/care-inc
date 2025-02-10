"use client";
import Layout from "@/components/layout/Layout";
import ServicesCategories from "@/components/layout/ServicesCategories";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
        <section className="section-padding">
          <div className="auto-container">
            <div className="row">
              {/* Sidebar */}
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

              {/* Main Content */}
              <div className="col-lg-8">
                <div className="service-details">
                  <h2 className="service-details-title mb_20">Our Services</h2>
                  <p className="service-details-desc mb_20">
                    At **Care Inclusive Limited**, we provide compassionate,
                    person-centered care designed to support individuals in
                    maintaining their independence and well-being. Our highly
                    trained carers ensure each client receives the right level
                    of care tailored to their unique needs.
                  </p>

                  <h3 className="service-details-title2 mb_20">Overview</h3>
                  <p className="service-details-desc mb_30">
                    We offer a wide range of services to support individuals in
                    their daily lives, from personal care to companionship,
                    ensuring they feel comfortable, safe, and valued. Below is a
                    summary of our services:
                  </p>

                  <div className="row mb_40">
                    {/* Personal Care */}
                    <div className="col-md-6">
                      <div className="service-details-icon-box d-flex">
                        <div className="service-details-icon-box-icon large">
                          <i className="icon-42"></i>
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            <Link href="/personal-care">Personal Care</Link>
                          </h4>
                          <p>
                            Assistance with bathing, dressing, toileting, skin
                            care, and maintaining personal hygiene.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Domestic Care */}
                    <div className="col-md-6">
                      <div className="service-details-icon-box d-flex">
                        <div className="service-details-icon-box-icon large">
                          <i className="icon-42"></i>
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            <Link href="/domestic-care">Domestic Care</Link>
                          </h4>
                          <p>
                            Help with meal preparation, household cleaning,
                            laundry, and keeping a tidy home environment.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Sitting Service */}
                    <div className="col-md-6">
                      <div className="service-details-icon-box d-flex">
                        <div className="service-details-icon-box-icon large">
                          <i className="icon-42"></i>
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            <Link href="/sitting-service">Sitting Service</Link>
                          </h4>
                          <p>
                            Providing companionship, conversation, and
                            engagement while ensuring client safety.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Live-In Care */}
                    <div className="col-md-6">
                      <div className="service-details-icon-box d-flex">
                        <div className="service-details-icon-box-icon large">
                          <i className="icon-42"></i>
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            <Link href="/living-care">Live-In Care</Link>
                          </h4>
                          <p>
                            24/7 care for individuals needing full-time support,
                            including personal care and meal preparation.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Medication Support */}
                    <div className="col-md-6">
                      <div className="service-details-icon-box d-flex">
                        <div className="service-details-icon-box-icon large">
                          <i className="icon-42"></i>
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            <Link href="/medication">Medication Support</Link>
                          </h4>
                          <p>
                            Assisting with medication reminders, administration,
                            and ensuring the correct dosage is taken.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Shopping Assistance */}
                    <div className="col-md-6">
                      <div className="service-details-icon-box d-flex">
                        <div className="service-details-icon-box-icon large">
                          <i className="icon-42"></i>
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            <Link href="s/shopping">Shopping Assistance</Link>
                          </h4>
                          <p>
                            Supporting individuals with grocery shopping and
                            running essential errands.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="service-details-desc mb_30">
                    Whether you need occasional support or full-time care, our
                    compassionate team is here to assist you. We are dedicated
                    to enhancing the quality of life for those we serve while
                    ensuring dignity, comfort, and independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
