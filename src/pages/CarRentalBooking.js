import React, { useState } from 'react';
import './../css/CarRentalBooking.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { carDetails, rentalFeatures } from "../../src/components/data/Data.jsx";
import CommonHeading from "../../src/components/common/CommonHeading";


const CarRentalBooking = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    returnDate: '',
    passengers: 1,
    carType: 'compact',
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
    // Handle car rental booking submission
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="container-fluid page-header mb-5 p-0 bg-car-rental">
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Car Rental Booking
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <CommonHeading
          heading="Rent a Car"
          title=""
          subtitle="Find the best car rentals for your trip"
        />
        <div className="row g-4">
          {carDetails.map((item, key) => (
            <div
              className="col-lg-3 col-md-4 wow fadeInUp"
              data-wow-delay="0.1s"
              key={key}
            >
              <div className="car-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={item.img} alt="Car" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    {item.price}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{item.name}</h5>
                    <div className="ps-2">{item.rating}</div>
                  </div>
                  <div className="d-flex mb-3">
                    {rentalFeatures.map((feature, index) => (
                      <small className="border-end me-3 pe-3" key={index}>
                        {feature.icon}
                        {feature.name}
                      </small>
                    ))}
                  </div>
                  <p className="text-body mb-3">{item.description}</p>
                  <div className="d-flex justify-content-between">
                    <a
                      className="btn btn-sm btn-primary rounded py-1 px-2"
                      href=""
                    >
                      {item.bookNowBtn}
                    </a>
                    <a
                      className="btn btn-sm btn-dark rounded py-1 px-2"
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        openPopup();
                      }}
                    >
                      {item.detailsBtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isPopupVisible && (
        <>
          <div className="popup-overlay"></div>
          <div className="car-booking-container">
            <h2 className="form-title">Car Rental Booking</h2>
            <form className="car-booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="pickupLocation">Pickup Location:</label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="Enter city or airport"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="dropoffLocation">Dropoff Location:</label>
                <input
                  type="text"
                  id="dropoffLocation"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  placeholder="Enter city or airport"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="pickupDate">Pickup Date:</label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="returnDate">Return Date:</label>
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
                <label htmlFor="carType">Car Type:</label>
                <select
                  id="carType"
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  required
                >
                  <option value="compact">Compact</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Rent Car
              </button>
              <button
                type="button"
                onClick={closePopup}
                className="submit-btn"
                style={{ backgroundColor: "gray", marginTop: "10px" }}
              >
                Cancel
              </button>
            </form>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default CarRentalBooking;
