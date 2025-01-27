"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      {/*Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu}></div>
        <div className="close-btn" onClick={handleMobileMenu}>
          <i className="fal fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="assets/images/care-inclusive-logo-1.svg" alt="" />
            </Link>
          </div>
          {/*menu-outer*/}
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/" onClick={handleMobileMenu}>
                    Home
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 1 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/" onClick={handleMobileMenu}>
                        Home Page 1
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-2" onClick={handleMobileMenu}>
                        Home Page 2
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-3" onClick={handleMobileMenu}>
                        Home Page 3
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-4" onClick={handleMobileMenu}>
                        Home Page 4
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/services" onClick={handleMobileMenu}>
                    Services
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/services" onClick={handleMobileMenu}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details" onClick={handleMobileMenu}>
                        Service Details
                      </Link>
                    </li>
                  </ul>

                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/living-option" onClick={handleMobileMenu}>
                    Living Option
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/living-option" onClick={handleMobileMenu}>
                        Living Option
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/living-option-details"
                        onClick={handleMobileMenu}
                      >
                        Living Option Details
                      </Link>
                    </li>
                  </ul>

                  <div
                    className={
                      isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#" onClick={handleMobileMenu}>
                    Pages
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/about" onClick={handleMobileMenu}>
                        About
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == 5
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/event-grid" onClick={handleMobileMenu}>
                        Event
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == 5 ? "block" : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link href="/event-grid" onClick={handleMobileMenu}>
                            Event Grid
                          </Link>
                        </li>
                        <li>
                          <Link href="/event-list" onClick={handleMobileMenu}>
                            Event List
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/event-details"
                            onClick={handleMobileMenu}
                          >
                            Event Details
                          </Link>
                        </li>
                      </ul>
                      <div
                        className={
                          isActive.subMenuKey == 5
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(4, 5)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == 6
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/donation" onClick={handleMobileMenu}>
                        Donation
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == 6 ? "block" : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link href="/donation" onClick={handleMobileMenu}>
                            Donation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/donation-details"
                            onClick={handleMobileMenu}
                          >
                            Donation Details
                          </Link>
                        </li>
                      </ul>
                      <div
                        className={
                          isActive.subMenuKey == 6
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(4, 6)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == 7
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/volunteer" onClick={handleMobileMenu}>
                        Volunteer
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == 7 ? "block" : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link href="/volunteer">Volunteer</Link>
                        </li>
                        <li>
                          <Link href="/volunteer-details">
                            Volunteer Details
                          </Link>
                        </li>
                      </ul>
                      <div
                        className={
                          isActive.subMenuKey == 7
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(4, 7)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                    <li>
                      <Link href="/portfolio-grid" onClick={handleMobileMenu}>
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link href="/testimonials" onClick={handleMobileMenu}>
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs" onClick={handleMobileMenu}>
                        Faq
                      </Link>
                    </li>
                    <li>
                      <Link href="/career" onClick={handleMobileMenu}>
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link href="/error" onClick={handleMobileMenu}>
                        404 Error Page
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li
                  className={
                    isActive.key == 8 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#" onClick={handleMobileMenu}>
                    Blog
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 8 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/blog-grid">Blog Grid</Link>
                    </li>
                    <li>
                      <Link href="/blog-standard">Blog Standard</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 8 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(8)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/">
                  <span className="fab fa-twitter"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-facebook-square"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-pinterest-p"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-instagram"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-youtube"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/*End Mobile Menu */}

      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};
export default MobileMenu;
