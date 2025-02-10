import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ServicesCategories() {
  const pathname = usePathname();

  const services = [
    { name: "Personal Care", path: "/personal-care" },
    { name: "Medication", path: "/medication" },
    { name: "Shopping", path: "/shopping" },
    { name: "Domestic Care", path: "/domestic-care" },
    { name: "Sitting Services", path: "/sitting-services" },
    { name: "Living Care", path: "/living-care" },
  ];

  return (
    <div className="category-widget">
      <h4 className="category-widget-title">All Services</h4>
      <ul className="category-widget-list">
        {services.map((service) => (
          <li
            key={service.path}
            className={pathname === service.path ? "active" : ""}
          >
            <Link href={service.path}>
              {service.name} <i className="icon-40"></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesCategories;
