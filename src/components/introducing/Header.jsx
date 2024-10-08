import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navList } from "../data/Data"; // Import navigation list data
import '../../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [navbarCollapse, setNavbarCollapse] = useState(false); // State for navbar collapse
  const [activeDropdown, setActiveDropdown] = useState(null); // State for active dropdown

  // Handle mouse enter event for dropdowns
  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  // Handle mouse leave event to close dropdowns
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="container-fluid bg-dark px-0 py-3">
      <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <Link
            to="/"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1 className="m-0 text-primary">TravelBookingCA</h1>
          </Link>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
            <Link to="/" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 text-primary">TravelBookingCA</h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              onClick={() => setNavbarCollapse(!navbarCollapse)} // Toggle navbar collapse
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={navbarCollapse
                ? "navbar-collapse justify-content-around navbarCollapse"
                : "collapse navbar-collapse justify-content-around"
              }
            >
              <div className="navbar-nav mr-auto py-0">
                {/* Add nav items here if needed */}
              </div>
              {/* Login link with FontAwesome icon */}
              <a href="" onClick={() => navigate('/login')} style={{ marginTop: '10px', marginLeft: '800px' }}>
                Login <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
