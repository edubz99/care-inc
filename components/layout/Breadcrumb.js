import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ breadcrumbTitle }) {
  const pathname = usePathname();

  const imageUrls = {
    aboutUrl: "1920x650-caretaker-with-senior-man-enjoying-coffee-break.jpg",
    testimonialsUrl: "",
    faqsUrl: "elder-care-banner.jpg",
    servicesUrl: "home-caregiver-showing-support-for-elderly-patient.jpg",
    contactUsUrl:
      "senior-man-sitting-in-chair-and-talking-with-nurse-in-retirement-home.jpg",
  };

  let url;

  console.log(pathname);

  switch (pathname) {
    case "/about":
      url = imageUrls.aboutUrl;
      break;
    case "/testimonials":
      url = imageUrls.testimonialsUrl;
      break;
    case "/faqs":
      url = imageUrls.faqsUrl;
      break;
    case "/services":
      url = imageUrls.servicesUrl;
      break;
    case "/contact":
      url = imageUrls.contactUsUrl;
      break;
    default:
      url = imageUrls.aboutUrl;
      break;
  }

  return (
    <>
      {/*page-title */}
      <div
        className="page-title"
        style={{
          backgroundImage: `url(assets/images/care-images/${url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="auto-container">
          <h1>{breadcrumbTitle}</h1>
        </div>
      </div>
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{breadcrumbTitle}</li>
          </ul>
        </div>
      </div>
      {/*page-title end */}
    </>
  );
}
