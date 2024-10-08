import React from "react";
import { Link } from "react-router-dom";

export default function Heading({ heading, title, subtitle }) {
  return (
    <>
      {/* Main container for the page header */}
      <div className="container-fluid page-header mb-5 p-0 bg-image">
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            {/* Main heading displayed prominently */}
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              {heading}
            </h1>
            {/* Uncomment below if subtitle is needed in the future */}
            {/* <h2 className="text-white">{subtitle}</h2> */}
          </div>
        </div>
      </div>
    </>
  );
}
