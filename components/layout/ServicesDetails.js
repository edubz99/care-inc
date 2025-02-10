"use client";
import Layout from "@/components/layout/Layout";
import ServicesCategories from "@/components/layout/ServicesCategories";
import Link from "next/link";

const serviceDetails = {
  personalCare: {
    title: "Personal Care",
    description:
      "Supporting individuals with daily personal hygiene and well-being.",
    image: "assets/images/resource/service-personal-care.jpg",
    overview: [
      "Bathing and dressing",
      "Toileting assistance",
      "Brushing teeth",
      "Managing skin concerns (e.g., dry or sensitive skin)",
    ],
    overviewDescription:
      "Our personal care services provide essential support to individuals who need assistance with their daily hygiene and self-care routines. Whether it's helping with dressing, personal grooming, or sensitive skin care, our compassionate caregivers ensure that each client receives dignified and respectful care. We focus on maintaining personal independence while providing the right level of support tailored to individual needs.",
    additionalDetails: [
      {
        title: "Medication Support",
        description:
          "Administering or supervising medication to ensure the correct dose is taken at the right time.",
        points: [
          "Correct completion of MAR charts",
          "Avoiding medication errors",
        ],
      },
      {
        title: "Shopping Assistance",
        description: "Helping with weekly shopping as required by the client.",
      },
    ],
  },

  domesticCare: {
    title: "Domestic Care",
    description:
      "Providing assistance with daily household tasks to maintain a clean and comfortable home.",
    image: "assets/images/resource/service-domestic-care.jpg",
    overview: [
      "Meal preparation and hydration",
      "Tidying up and emptying bins",
      "Washing dishes and kitchen maintenance",
      "Assisting with laundry",
    ],
    overviewDescription:
      "Maintaining a clean and organized home is essential for health and well-being. Our domestic care services include everything from preparing nutritious meals to handling laundry and ensuring that living spaces are kept tidy and hygienic. We work with clients to tailor our services to their specific preferences and needs, providing a seamless and stress-free environment.",
  },

  sittingService: {
    title: "Sitting Service",
    description:
      "Providing companionship and assistance while ensuring a safe environment.",
    image: "assets/images/resource/service-sitting-service.jpg",
    overview: [
      "Providing care and companionship",
      "Encouraging social interaction",
      "Preparing meals or snacks",
      "Light household tasks",
    ],
    overviewDescription:
      "Our sitting service is designed to provide individuals with companionship and emotional support while ensuring their safety and well-being. Whether it's engaging in meaningful conversations, assisting with meal preparation, or performing light household duties, our caregivers help create a comfortable and engaging environment for our clients.",
  },

  livingCare: {
    title: "Living Care",
    description:
      "Comprehensive care and support for individuals requiring continuous assistance.",
    image: "assets/images/resource/service-living-care.jpg",
    overview: [
      "Personal care",
      "Medication management",
      "Meal preparation",
      "Laundry and additional tasks as per care plan",
    ],
    overviewDescription:
      "For clients requiring round-the-clock support, our live-in care services provide comprehensive assistance tailored to their specific needs. Our caregivers live with clients to provide continuous support, ensuring they receive the highest level of care in the comfort of their own home. From personal care to meal preparation and medication management, we offer a holistic approach to independent living.",
  },

  medication: {
    title: "Medication",
    description:
      "Ensuring medication is taken safely and correctly for optimal health and well-being.",
    image: "assets/images/resource/service-medication.jpg",
    overview: [
      "Administering or supervising medication",
      "Correct completion of MAR charts to ensure the right dose of medication is administered at the right time, thereby avoiding medication errors",
    ],
    overviewDescription:
      "Proper medication management is crucial to maintaining health and well-being. Our caregivers provide assistance with administering and supervising medication, ensuring that clients receive their prescriptions as directed. We carefully monitor medication schedules and complete MAR charts to prevent errors and enhance overall treatment effectiveness.",
  },

  shopping: {
    title: "Shopping",
    description:
      "Assisting with weekly shopping as and when required by the client.",
    image: "assets/images/resource/service-shopping.jpg",
    overview: [
      "Providing support with grocery shopping",
      "Ensuring nutritional needs are met",
      "Helping clients maintain independence while shopping",
    ],
    overviewDescription:
      "Our shopping service helps clients maintain their independence by assisting with grocery shopping and errands. Whether accompanying clients to stores or handling shopping lists on their behalf, we ensure that all necessary items are purchased and that dietary and personal preferences are respected.",
  },

  sittingServices: {
    title: "Sitting Services",
    description:
      "Offering companionship and light assistance to individuals in need of social support.",
    image: "assets/images/resource/service-sitting.jpg",
    overview: [
      "Providing care and companionship to clients",
      "Encouraging social interaction",
      "Preparing meals or snacks",
      "Light household tasks",
    ],
    overviewDescription:
      "Loneliness and isolation can impact mental and emotional well-being. Our sitting service offers individuals companionship and light assistance with daily tasks. Whether it's sharing conversations, playing games, or assisting with small household tasks, we aim to brighten our clients’ days and improve their quality of life.",
  },
};

export default function ServicePage({ serviceKey }) {
  const service = serviceDetails[serviceKey];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={service.title}>
      <section className="section-padding">
        <div className="auto-container">
          <div className="row">
            {/* Left Sidebar */}
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
                <h2 className="service-details-title mb_20">{service.title}</h2>
                <p className="service-details-desc mb_20">
                  {service.description}
                </p>

                {/* Overview Section */}

                <div className="row mb_30">
                  <div className="col-md-12">
                    <h4 className="service-details-title2 mb_15">Overview</h4>
                    <p className="service-details-desc mb_20">
                      {service.overviewDescription}
                    </p>
                  </div>
                </div>

                <div className="row mb_30">
                  <div className="col-md-12">
                    <ul className="service-details-list mb_30">
                      {service.overview.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {service.additionalDetails?.map((detail, index) => (
                  <div key={index} className="mb_40">
                    <h4 className="service-details-title2 mb_20">
                      {detail.title}
                    </h4>
                    <p className="service-details-desc mb_30">
                      {detail.description}
                    </p>
                    {detail.points && (
                      <ul className="service-details-list mb_30">
                        {detail.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
