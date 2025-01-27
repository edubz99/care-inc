import Link from "next/link";
export default function Chooseus() {
  return (
    <>
      <section className="why-chooseus-1-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 pe-lg-5">
              <div className="section_heading mb_20">
                <span className="section_heading_title_small">
                  Why Choose Us
                </span>
                <h2 className="section_heading_title_big">
                  Why Choose
                  <br /> <span>Care Inclusive</span>
                </h2>
              </div>
              <p className="why-chooseus-1-text">
                At Care Inclusive Limited we strive to meet and exceed our
                clients expectations, we aim to support clients and promote
                independence to enable them to achieve the highest quality of
                life possible, with our sensible holistic approach we always put
                you first and your well-being and trust in us is our main
                objective.
              </p>
              <div className="">
                <div className="why-chooseus-1-block d-flex">
                  <div className="why-chooseus-1-count">1</div>
                  <div className="why-chooseus-1-content flex-grow-1">
                    <h4 className="why-chooseus-1-title mb_15">
                      Registered and Regulated by CQC
                    </h4>
                    <p className="why-chooseus-1-text2">
                      Our Registered Manager has over 19 years of experience
                      delivering high-quality,{" "}
                      <strong>person-centred care</strong>. She has worked in a
                      variety of health settings as care officer and community
                      occupational therapist.
                    </p>
                  </div>
                </div>
                <div className="why-chooseus-1-block d-flex">
                  <div className="why-chooseus-1-count">2</div>
                  <div className="why-chooseus-1-content flex-grow-1">
                    <h4 className="why-chooseus-1-title mb_15">
                      Personalised Home Care
                    </h4>
                    <p className="why-chooseus-1-text2">
                      We aim to promote our client’s{" "}
                      <strong>
                        independence in the comfort of their own homes, ensuring
                        respect, dignity and safety
                      </strong>
                      .
                    </p>
                  </div>
                </div>
                <div className="why-chooseus-1-block d-flex">
                  <div className="why-chooseus-1-count">3</div>
                  <div className="why-chooseus-1-content flex-grow-1">
                    <h4 className="why-chooseus-1-title mb_15">
                      Well Trained staff
                    </h4>
                    <p className="why-chooseus-1-text2">
                      Our staff are trained to provide you with{" "}
                      <strong>high-quality care</strong> in a wide range of
                      areas including safeguarding, medication administration,
                      moving &amp; handling, infection control, health and
                      safety, food hygiene, and other relevant training.
                    </p>
                  </div>
                </div>
                <div className="why-chooseus-1-block d-flex">
                  <div className="why-chooseus-1-count">4</div>
                  <div className="why-chooseus-1-content flex-grow-1">
                    <h4 className="why-chooseus-1-title mb_15">
                      Confidentiality
                    </h4>
                    <p className="why-chooseus-1-text2">
                      Customer confidentiality is extremely important to us. We
                      are fully compliant with GDPR and data protection.
                    </p>
                  </div>
                </div>
                <div className="why-chooseus-1-block d-flex">
                  <div className="why-chooseus-1-count">5</div>
                  <div className="why-chooseus-1-content flex-grow-1">
                    <h4 className="why-chooseus-1-title mb_15">
                      Family Contact
                    </h4>
                    <p className="why-chooseus-1-text2">
                      We are open and transparent with family members and share
                      details of each visit when requested.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-chooseus-1-image text-lg-end">
                <div className="image-container">
                  <div className="image-wrapper">
                    <div className="why-chooseus-1-shape">
                      <img src="assets/images/shape/pattern-1.png" alt="" />
                    </div>
                    <img
                      src="assets/images/care-images/carer-laughing-with-service-user-595x814.png"
                      alt=""
                    />
                  </div>

                  <div className="image-wrapper">
                    <div className="why-chooseus-1-shape">
                      <img src="assets/images/shape/pattern-2.png" alt="" />
                    </div>
                    <img
                      src="assets/images/care-images/nurse-and-elderly-woman-spending-good-time-at-care-home.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
