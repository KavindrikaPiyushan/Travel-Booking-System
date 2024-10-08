import React from "react";
import CommonHeading from "../common/CommonHeading";
import { services } from "../data/Data";

export default function Services() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <CommonHeading
              heading="Our Services"
              title="Services"
              subtitle="Explore Our"
            />
          </div>
          <div className="row g-4">
            {/* Map through services to create service items */}
            {services.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={index} // Key for mapping
              >
                <a className="service-item rounded" href="">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      {item.icon} {/* Render service icon */}
                    </div>
                  </div>
                  <h5 className="mb-3">{item.name}</h5> {/* Service name */}
                  <p className="text-body mb-0">{item.description}</p> {/* Service description */}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
