import React, { useEffect } from "react";
import Heading from "../common/Heading"; // Assuming Heading is used elsewhere in the code
import { about } from "../data/Data"; // Data imported from a separate file
import '../../css/About.css'; // Styles for the About component
import WOW from "wowjs"; // Library for animations

export default function About() {
  useEffect(() => {
    // Initialize WOW.js for animations on scroll
    new WOW.WOW({
      live: false, // Disable live mutation observation
    }).init();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h6 className="section-title text-start text-primary text-uppercase">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to{" "}
              <span className="text-primary">TravelBookingCA</span>
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <div className="row g-3 pb-4">
              {about.map((item, key) => (
                <div
                  className="col-sm-4 wow fadeIn"
                  data-wow-delay="0.1s"
                  key={key}
                >
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      {item.icon}
                      <h2 className="mb-1" data-toggle="counter-up">
                        {item.count}
                      </h2>
                      <p className="mb-0">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column with images */}
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="/assets/img/about-1.jpg"
                  style={{ marginTop: "25%" }}
                  alt="About Image 1"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow fadeInLeft"
                  data-wow-delay="0.3s"
                  src="/assets/img/about-2.jpg"
                  alt="About Image 2"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-50 wow fadeInRight"
                  data-wow-delay="0.5s"
                  src="/assets/img/about-3.jpg"
                  alt="About Image 3"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow bounceIn"
                  data-wow-delay="0.7s"
                  src="/assets/img/about-4.jpg"
                  alt="About Image 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
