exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 1533:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9471, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 4335:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8183))

/***/ }),

/***/ 8817:
/***/ (() => {



/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 8183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js

function BackToTop({ scroll }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: scroll && /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "scroll-to-top scroll-to-target d-block",
            href: "#top",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "scroll-bar-text",
                children: "Go To Top"
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/DataBg.js


function DataBg() {
    (0,react_.useEffect)(()=>{
        const elements = document.querySelectorAll("[data-bg]");
        elements.forEach((element)=>{
            element.style.backgroundImage = `url(${element.getAttribute("data-bg")})`;
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js



function Breadcrumb({ breadcrumbTitle }) {
    const pathname = (0,navigation.usePathname)();
    const imageUrls = {
        aboutUrl: "1920x650-caretaker-with-senior-man-enjoying-coffee-break.jpg",
        testimonialsUrl: "",
        faqsUrl: "elder-care-banner.jpg",
        servicesUrl: "home-caregiver-showing-support-for-elderly-patient.jpg",
        contactUsUrl: "senior-man-sitting-in-chair-and-talking-with-nurse-in-retirement-home.jpg"
    };
    let url;
    console.log(pathname);
    switch(pathname){
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page-title",
                style: {
                    backgroundImage: `url(assets/images/care-images/${url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "auto-container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: breadcrumbTitle
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bredcrumb-wrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "auto-container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "bredcrumb-list",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: breadcrumbTitle
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer1.js


function Footer1() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "footer-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-1-top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-1-top-content d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/care-inclusive-logo-1.svg",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "footer-1-social-icon d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-linkedin-in"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-1-middle",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "about-widget-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "footer-widget-title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "about-widget-1-text",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Care Inclusive Limited provides compassionate, tailored care,",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " focusing on physical and emotional well-being."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "With expertise and collaboration,",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "we empower clients to live fulfilling, independent lives."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "contact-widget-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "footer-widget-title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "contact-widget-text",
                                                children: "Our team are ready to help."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "contact-widget-1-list",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-14"
                                                            }),
                                                            " Leeds, UK"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-3"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "mailto:info@careinclusive.co.uk",
                                                                children: "info@careinclusive.co.uk"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-2"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "tel:+447835817028",
                                                                children: "07835 817028"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer-bottom-row",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-bottom-text",
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " Care Inclusive Limited. All Rights Reserved."
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Menu.js


function Menu(style) {
    const isHeaderFixed = style.style === "slideInDown";
    console.log(isHeaderFixed);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "navigation",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "dropdown",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/about",
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/faqs",
                                    children: "FAQs"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/services",
                        children: "Services"
                    })
                }),
                !isHeaderFixed ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: "Contact Us"
                    })
                }) : null
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/MobileMenu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar })=>{
    const [isActive, setIsActive] = (0,react_.useState)({
        status: false,
        key: "",
        subMenuKey: ""
    });
    const handleToggle = (key, subMenuKey = "")=>{
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: ""
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mobile-menu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "menu-backdrop",
                        onClick: handleMobileMenu
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "close-btn",
                        onClick: handleMobileMenu,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fal fa-times"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "menu-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/care-inclusive-logo-1.svg",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menu-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "collapse navbar-collapse show clearfix",
                                    id: "navbarSupportedContent",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "navigation clearfix",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: isActive.key == 1 ? "dropdown current" : "dropdown",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        onClick: handleMobileMenu,
                                                        children: "Home"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        style: {
                                                            display: `${isActive.key == 1 ? "block" : "none"}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Home Page 1"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-2",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Home Page 2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-3",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Home Page 3"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-4",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Home Page 4"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn",
                                                        onClick: ()=>handleToggle(1),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: isActive.key == 2 ? "dropdown current" : "dropdown",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/services",
                                                        onClick: handleMobileMenu,
                                                        children: "Services"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        style: {
                                                            display: `${isActive.key == 2 ? "block" : "none"}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/services",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Services"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/service-details",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Service Details"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn",
                                                        onClick: ()=>handleToggle(2),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: isActive.key == 3 ? "dropdown current" : "dropdown",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/living-option",
                                                        onClick: handleMobileMenu,
                                                        children: "Living Option"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        style: {
                                                            display: `${isActive.key == 3 ? "block" : "none"}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/living-option",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Living Option"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/living-option-details",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Living Option Details"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn",
                                                        onClick: ()=>handleToggle(3),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: isActive.key == 4 ? "dropdown current" : "dropdown",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/#",
                                                        onClick: handleMobileMenu,
                                                        children: "Pages"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        style: {
                                                            display: `${isActive.key == 4 ? "block" : "none"}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/about",
                                                                    onClick: handleMobileMenu,
                                                                    children: "About"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: isActive.subMenuKey == 5 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/event-grid",
                                                                        onClick: handleMobileMenu,
                                                                        children: "Event"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        style: {
                                                                            display: `${isActive.subMenuKey == 5 ? "block" : "none"}`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/event-grid",
                                                                                    onClick: handleMobileMenu,
                                                                                    children: "Event Grid"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/event-list",
                                                                                    onClick: handleMobileMenu,
                                                                                    children: "Event List"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/event-details",
                                                                                    onClick: handleMobileMenu,
                                                                                    children: "Event Details"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: isActive.subMenuKey == 5 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleToggle(4, 5),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: isActive.subMenuKey == 6 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/donation",
                                                                        onClick: handleMobileMenu,
                                                                        children: "Donation"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        style: {
                                                                            display: `${isActive.subMenuKey == 6 ? "block" : "none"}`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/donation",
                                                                                    onClick: handleMobileMenu,
                                                                                    children: "Donation"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/donation-details",
                                                                                    onClick: handleMobileMenu,
                                                                                    children: "Donation Details"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: isActive.subMenuKey == 6 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleToggle(4, 6),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: isActive.subMenuKey == 7 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/volunteer",
                                                                        onClick: handleMobileMenu,
                                                                        children: "Volunteer"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        style: {
                                                                            display: `${isActive.subMenuKey == 7 ? "block" : "none"}`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/volunteer",
                                                                                    children: "Volunteer"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/volunteer-details",
                                                                                    children: "Volunteer Details"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: isActive.subMenuKey == 7 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleToggle(4, 7),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/portfolio-grid",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Portfolio"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/testimonials",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Testimonials"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/faqs",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Faq"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/career",
                                                                    onClick: handleMobileMenu,
                                                                    children: "Career"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/error",
                                                                    onClick: handleMobileMenu,
                                                                    children: "404 Error Page"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn",
                                                        onClick: ()=>handleToggle(4),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: isActive.key == 8 ? "dropdown current" : "dropdown",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/#",
                                                        onClick: handleMobileMenu,
                                                        children: "Blog"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        style: {
                                                            display: `${isActive.key == 8 ? "block" : "none"}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-grid",
                                                                    children: "Blog Grid"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-standard",
                                                                    children: "Blog Standard"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-details",
                                                                    children: "Blog Details"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: isActive.key == 8 ? "dropdown-btn open" : "dropdown-btn",
                                                        onClick: ()=>handleToggle(8),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    onClick: handleMobileMenu,
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "social-links",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "clearfix",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-facebook-square"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-pinterest-p"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nav-overlay",
                style: {
                    display: `${isSidebar ? "block" : "none"}`
                },
                onClick: handleSidebar
            })
        ]
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./components/layout/header/Header1.js




function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: `main-header header-style-one ${scroll ? "fixed-header" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-top-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-top-1-row d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-top-1-left-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "header-top-1-contact-info d-flex align-items-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Phone:"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "tel:07835 817028",
                                                        children: "07835 817028"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-3"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Email:"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "mailto:info@careinclusive.co.uk",
                                                        children: "info@careinclusive.co.uk"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-top-1-right-column d-flex align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "header-top-1-social-icon d-flex align-items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inner-container d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/care-inclusive-logo.svg",
                                                alt: ""
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "middle-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "nav-outer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mobile-nav-toggler",
                                                onClick: handleMobileMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/icons/icon-bar.png",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                className: "main-menu navbar-expand-md navbar-light",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "collapse navbar-collapse show clearfix",
                                                    id: "navbarSupportedContent",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                                        style: scroll ? "slideInDown" : ""
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `sticky-header ${scroll ? "animated slideInDown" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-upper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "inner-container d-flex align-items-center justify-content-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo-box",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/care-inclusive-logo.svg",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "middle-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "nav-outer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mobile-nav-toggler",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icons/icon-bar-2.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                    className: "main-menu navbar-expand-md navbar-light",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                                        style: scroll ? "slideInDown" : ""
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "right-column",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-link-btn",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: "/contact",
                                                className: "btn-1",
                                                children: [
                                                    "Contact Us ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                    handleMobileMenu: handleMobileMenu,
                    handleSidebar: handleSidebar,
                    isSidebar: isSidebar
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = (0,react_.useState)(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = (0,react_.useState)(false);
    const handleMobileMenu = ()=>{
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    // Popup
    const [isPopup, setPopup] = (0,react_.useState)(false);
    const handlePopup = ()=>setPopup(!isPopup);
    // Sidebar
    const [isSidebar, setSidebar] = (0,react_.useState)(false);
    const handleSidebar = ()=>setSidebar(!isSidebar);
    (0,react_.useEffect)(()=>{
        const WOW = __webpack_require__(2996);
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DataBg, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `page-wrapper ${wrapperCls ? wrapperCls : ""}`,
                id: "#top",
                children: [
                    !headerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    headerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Header2, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 3 ? /*#__PURE__*/ jsx_runtime_.jsx(Header3, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    breadcrumbTitle && /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {
                        breadcrumbTitle: breadcrumbTitle
                    }),
                    children,
                    !footerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}),
                    footerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BackToTop, {
                scroll: scroll
            })
        ]
    });
}


/***/ }),

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2109);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1676);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6279);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3986);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8368);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2522);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8241);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_7__);




// import "swiper/css/navigation"



const metadata = {
    title: "Care Inclusive",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        className: `${(_lib_font__WEBPACK_IMPORTED_MODULE_6___default().variable)} ${(_lib_font__WEBPACK_IMPORTED_MODULE_7___default().variable)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "icon",
                    href: "/assets/images/favicon.svg",
                    sizes: "any"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./components/elements/Preloader.js

function Preloader() {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "loader-wrap",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "preloader",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "preloader-close",
                        children: "Preloader Close"
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "layer layer-one",
                    children: /*#__PURE__*/ _jsx("span", {
                        className: "overlay"
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "layer layer-two",
                    children: /*#__PURE__*/ _jsx("span", {
                        className: "overlay"
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "layer layer-three",
                    children: /*#__PURE__*/ _jsx("span", {
                        className: "overlay"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/loading.js


function loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}


/***/ }),

/***/ 2987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1841);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Error404() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            headerStyle: 1,
            footerStyle: 1,
            breadcrumbTitle: "404 Page",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "error-section section-padding",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "404"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb_30",
                                    children: "Oops! That page can’t be found"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb_30",
                                    children: "Sorry, but the page you are looking for does not existing"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "link-box mb_30",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        className: "btn-1",
                                        children: [
                                            "Go to Homepage ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "flaticon-right-arrow-1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 1841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/evans/Documents/Projects/care-inclusive/care-inclusive/components/layout/Layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"66x59"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 1676:
/***/ (() => {



/***/ })

};
;