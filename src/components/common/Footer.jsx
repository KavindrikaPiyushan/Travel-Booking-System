import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import logo from '../../img/logo.webp';

export default function Footer() {
  return (
    <>
      {/* Main footer container */}
      <div className="container-fluid bg-dark text-light footer fadeIn mt-5" data-wow-delay="0.1s">
        <div className="container pb-5">
          <div className="row g-5">
            {/* Logo section */}
            <div className="col-md-6 col-lg-4">
              <img src={logo} alt="Company Logo" style={{ width: '250px', height: '200px', borderRadius: '50%' }} />
            </div>
            {/* Contact information section */}
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              {/* Social media icons */}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a className="btn btn-outline-light btn-social" href="" key={index}>
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Footer navigation items */}
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <a className="btn btn-link" href={item.link} key={itemIndex}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
