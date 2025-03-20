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
                          What types of care at home do you offer?
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
                              We provide a variety of care services to meet a
                              wide range of needs. These include personal care,
                              domestic support, medication administration,
                              complex care, dementia care and palliative care.
                              We cater to individuals of all ages, offering
                              personalised support and tailored care plans that
                              promote independence and well-being.
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
                          What are the benefits of care at home?
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
                              Care at home allows you and your loved ones to
                              remain in the comfort of their own homes,
                              surrounded by familiar routines and possessions.
                              It empowers you to maintain independence and keep
                              control over your daily life. Our personalised
                              care plans help individuals continue to enjoy
                              their favourite activities and make choices about
                              how they spend their time. Care at home also
                              provides peace of mind to your loved ones.
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
                          What is Living Care?
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
                                Living Care is an increasingly popular
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
                          How soon can I receive care?
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
                              We understand that sometimes care can be required
                              quite urgently. We strive to provide timely
                              support to our customers, and you should hear back
                              from a member of our team within 24-48 hours of
                              your initial contact. However, the specific
                              timeframe may vary depending on factors such as
                              the complexity of your care needs, the
                              availability of suitable carers in your area and
                              any necessary assessments or paperwork.
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}

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
                          How can I arrange my own care at home?
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
                              To arrange your care at home, simply contact us
                              via phone or via our website. We will discuss your
                              specific needs and conduct a thorough assessment
                              to understand your requirements and to create a
                              personalised care plan. We’ll then match you with
                              a qualified carer and coordinate your care,
                              ensuring a seamless transition.
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
