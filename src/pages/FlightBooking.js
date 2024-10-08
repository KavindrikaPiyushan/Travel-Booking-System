import React, { useState } from 'react';
import './../css/FlightBooking.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { facility, flightDetails } from "../../src/components/data/Data.jsx";
import CommonHeading from "../../src/components/common/CommonHeading";
import '../App.css'



const FlightBooking = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const openPopup = () => {
      setPopupVisible(true);
    };
  
    const closePopup = () => {
      setPopupVisible(false);
    };
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    travelClass: 'economy',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle flight booking submission
    console.log(formData);
  };

  return (
    <>
    <Header/>
    <>
      <div className="container-fluid page-header mb-5 p-0 bg-flight">
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Flight Booking
            </h1>
            
          </div>
        </div>
      </div>
    </>
    <div className="container">
          <CommonHeading
            heading=" Booking Flights"
            title=""
            subtitle="Our Recommendations For Safe Travel"
          />
          <div className="row g-4">
            {flightDetails.map((item, key) => (
              <div
                className="col-lg-3 col-md-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.img} alt="img" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>
                    <div className="d-flex mb-3">
                      {facility.map((item, index) => (
                        <small className="border-end me-3 pe-3">
                          {item.icon}
                          {item.quantity} {item.facility}
                        </small>
                      ))}
                    </div>
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      <a
                        className="btn btn-sm btn-primary rounded py-1 px-2"
                        href=""
                      >
                        {item.yellowbtn}
                      </a>
                      <a
                        className="btn btn-sm btn-dark rounded py-1 px-2"
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          openPopup();
                        }}
                      >
                        {item.darkbtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isPopupVisible ? (<>
            <div className="popup-overlay"></div>
        <div className="flight-booking-container">
      <h2 className="form-title">Flight Booking</h2>
      <form className="flight-booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="Enter city or airport"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Enter city or airport"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date (optional):</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="passengers">Number of Passengers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            min="1"
            value={formData.passengers}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="travelClass">Class of Travel:</label>
          <select
            id="travelClass"
            name="travelClass"
            value={formData.travelClass}
            onChange={handleChange}
            required
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Search Flights</button>
        <button
                    type="submit"
                    onClick={closePopup}
                    className="submit-btn"
                    style={{ backgroundColor: "gray", marginTop: "10px" }}
                  >
                    Cancel
                  </button>
      </form>
    </div></>):""}
    
    <Footer/>
    </>
  );
};

export default FlightBooking;
