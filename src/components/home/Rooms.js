import React, { useState } from "react";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";
import "../../css/HotelBookingForm.css";

export default function Rooms() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const [formData, setFormData] = useState({
    destination: "",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    roomType: "standard",
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
    // Submit form data here
    console.log(formData);
  };

  return (
    <>
      <div className="container-xxl py-5 ">
        <div className="container">
          <CommonHeading
            heading=" Hotels"
            title=""
            subtitle="Explore Our Recommendations"
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
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
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                        href=""
                      >
                        {item.yellowbtn}
                      </a>
                      <a
                        className="btn btn-sm btn-dark rounded py-2 px-4"
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
          {isPopupVisible ? (
            <>
              <div className="popup-overlay"></div>

              <div className="booking-form-container">
                <h2 className="form-title">Hotel Booking Form</h2>
                <form className="booking-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="destination">Destination:</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="checkInDate">Check-In Date:</label>
                    <input
                      type="date"
                      id="checkInDate"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="checkOutDate">Check-Out Date:</label>
                    <input
                      type="date"
                      id="checkOutDate"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests:</label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="roomType">Room Type:</label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      required
                    >
                      <option value="standard">Standard</option>
                      <option value="deluxe">Deluxe</option>
                      <option value="suite">Suite</option>
                    </select>
                  </div>

                  <button type="submit" className="submit-btn">
                    Book Now
                  </button>
                  <button
                    type="submit"
                    onClick={closePopup}
                    className="submit-btn"
                    style={{ backgroundColor: "gray", marginTop: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
