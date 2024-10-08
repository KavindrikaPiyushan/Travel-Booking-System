import React from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/animate.css";
import "./css/animate.min.css";
import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  GetStarted,
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";
export default function App() {
  return (
    <>
      <div>
        <Router>
       
        
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/home" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
            
          </Routes>
         
        </Router>
      </div>
    </>
  );
}
