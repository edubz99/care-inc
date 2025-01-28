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
                </li>

                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/about" onClick={handleMobileMenu}>
                    About
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/faqs" onClick={handleMobileMenu}>
                        FAQs
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
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/services" onClick={handleMobileMenu}>
                    Services
                  </Link>
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
                <Link href="https://www.instagram.com/careinclusive24?igsh=MWNzbnVud3d0cHhhYw==">
                  <span className="fab fa-instagram"></span>
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
