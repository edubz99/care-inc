"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQs">
        <div>
          <section className="faq-1-section">
            <div className="auto-container">
              <div className="section_heading text-center mb_65">
                <span className="section_heading_title_small">FAQs</span>
                <h2 className="section_heading_title_big">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  {/*Accordian Boxed*/}
                  <div className="accordian-boxed">
                    {/*Accordian Box*/}
                    <ul className="accordion-box alt">
                      {/*Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 1 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(1)}
                        >
                          <div className="icon-outer">
                            <span className="far fa-plus"></span>{" "}
                            <span className="far fa-minus"></span>
                          </div>
                          What care will my care assistant provide?
                        </div>
                        <div
                          className={
                            isActive.key == 1
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              Your care assistant will provide the care outlined
                              in the personalized care plan we created together,
                              which is designed to address your specific needs.
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 2 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(2)}
                        >
                          <div className="icon-outer">
                            <span className="far fa-plus"></span>{" "}
                            <span className="far fa-minus"></span>
                          </div>
                          Will I have the same care assistant each day?
                        </div>
                        <div
                          className={
                            isActive.key == 2
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              You may not have the same care assistant every
                              day, but we will choose a caregiver who best suits
                              your needs and preferences.
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 3 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(3)}
                        >
                          <div className="icon-outer">
                            <span className="far fa-plus"></span>{" "}
                            <span className="far fa-minus"></span>
                          </div>
                          What if I want to change my care package?
                        </div>
                        <div
                          className={
                            isActive.key == 3
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              If you would like to change your care package,
                              just let us know, and we will make the adjustments
                              as quickly as possible.
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/*Accordian Boxed*/}
                  <div className="accordian-boxed">
                    {/*Accordian Box*/}
                    <ul className="accordion-box alt">
                      {/*Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 4 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(4)}
                        >
                          <div className="icon-outer">
                            <span className="far fa-plus"></span>{" "}
                            <span className="far fa-minus"></span>
                          </div>
                          What is live-in care?
                        </div>
                        <div
                          className={
                            isActive.key == 4
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              <p>
                                Live-in care is an increasingly popular
                                alternative to the care home. It’s where a carer
                                lives in your loved one’s home, remaining
                                on-hand throughout the day and, if required, the
                                night too.
                              </p>

                              <p>
                                It’s the perfect solution for those who require
                                assistance with daily activities but would
                                prefer to stay in the comfort and familiar
                                surroundings of their own home – something 97%
                                of us say we want.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 8 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(8)}
                        >
                          <div className="icon-outer">
                            <span className="far fa-plus"></span>{" "}
                            <span className="far fa-minus"></span>
                          </div>
                          What type of care do you offer?
                        </div>
                        <div
                          className={
                            isActive.key == 8
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              We provide a range of domiciliary care services
                              that are tailored to suit your needs – from
                              helping with household tasks or companionship, to
                              assisting with personal care and specialist care.
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding gray-bg">
            <div className="auto-container">
              <div className="section_heading text-center mb_65">
                <span className="section_heading_title_small">
                  Send Message
                </span>
                <h2 className="section_heading_title_big">
                  Didn’t find your answer? <br />
                  Submit your question
                </h2>
              </div>
              <div className="form-alt-3">
                <form method="post" action="sendemail.php" id="contact-form">
                  <div className="row clearfix">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="form_name"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <textarea
                        name="form_message"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="form-group col-md-12 text-center">
                      <input
                        id="form_botcheck"
                        name="form_botcheck"
                        className="form-control"
                        type="hidden"
                        value="form_botcheck"
                      />
                      <button
                        className="btn-1 btn-small"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        Send Message <i className="flaticon-right-arrow-1"></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
