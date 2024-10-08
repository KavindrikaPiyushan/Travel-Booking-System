import React from "react";
import { socialIcons } from "../data/Data";
import { Link } from "react-router-dom";

export default function SocialIcons() {
  return (
    <>
      {/* Container for social icons */}
      <div className="col-lg-3 px-5">
        <div className="d-inline-flex align-items-center py-2">
          {socialIcons.map((val, index) => (
            <div key={index}>
              {/* Link for each social icon */}
              <Link className="me-3" to={val.link} aria-label={val.name}>
                {val.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
