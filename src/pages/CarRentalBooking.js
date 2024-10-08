import React, { useState } from 'react';
import './../css/CarRentalBooking.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { carDetails, rentalFeatures } from "../../src/components/data/Data.jsx";
import CommonHeading from "../../src/components/common/CommonHeading";

const CarRentalBooking = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isReviewPopupVisible, setReviewPopupVisible] = useState(false);
  const [isReviewListVisible, setReviewListVisible] = useState(false); // State for review list popup
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: "",
    comments: ""
  });

  // Dummy review data
  const dummyReviews = [
    { name: "Alice", rating: 5, comments: "Amazing experience!" },
    { name: "Bob", rating: 4, comments: "Very good service." },
    { name: "Charlie", rating: 3, comments: "Average stay." }
  ];

  // Popup control functions
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);
  const openReviewPopup = () => setReviewPopupVisible(true);
  const closeReviewPopup = () => setReviewPopupVisible(false);
  const openReviewListPopup = () => setReviewListVisible(true);
  const closeReviewListPopup = () => setReviewListVisible(false);

  // Handle changes in the review form
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewForm({ ...reviewForm, [name]: value });
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, reviewForm]); // Store review
    setReviewForm({ name: "", rating: "", comments: "" }); // Reset form
    closeReviewPopup();
  };

  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    returnDate: '',
    passengers: 1,
    carType: 'compact',
  });

  // Handle changes in the booking form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle car rental booking submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process the booking data
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
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className="ps-2">{item.star} </div>
                      <a
                        href="#"
                        style={{ fontSize: '15px', textAlign: 'center' }}
                        onClick={(e) => {
                          e.preventDefault();
                          openReviewListPopup(); // Open review list popup
                        }}
                      >
                        View Reviews
                      </a>
                    </div>
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
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        openReviewPopup(); // Open review form popup
                      }}
                    >
                      Add Review
                    </a>
                    <a
                      className="btn btn-sm btn-dark rounded py-1 px-2"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        openPopup(); // Open car rental form popup
                      }}
                    >
                      Rent Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Popup */}
      {isReviewPopupVisible && (
        <>
          <div className="popup-overlay"></div>
          <div className="review-popup">
            <h2 className="form-title">Add Review</h2>
            <form onSubmit={handleReviewSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={reviewForm.name}
                  onChange={handleReviewChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="rating">Rating:</label>
                <select
                  id="rating"
                  name="rating"
                  value={reviewForm.rating}
                  onChange={handleReviewChange}
                  required
                >
                  <option value="">Choose rating</option>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Good</option>
                  <option value="3">3 - Average</option>
                  <option value="2">2 - Poor</option>
                  <option value="1">1 - Terrible</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="comments">Comments:</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={reviewForm.comments}
                  onChange={handleReviewChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Review
              </button>
              <button
                type="button"
                onClick={closeReviewPopup}
                className="submit-btn"
                style={{ backgroundColor: "gray", marginTop: "10px" }}
              >
                Cancel
              </button>
            </form>
          </div>
        </>
      )}

      {/* Review List Popup */}
      {isReviewListVisible && (
        <>
          <div className="popup-overlay"></div>
          <div className="review-popup">
            <h2 className="form-title">Reviews</h2>
            <div className="review-list">
              {dummyReviews.concat(reviews).map((review, index) => (
                <div key={index} className="review-item">
                  <h5>{review.name}</h5>
                  <p>Rating: {review.rating} ⭐</p>
                  <p>{review.comments}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={closeReviewListPopup}
              className="submit-btn"
              style={{ marginTop: "10px", backgroundColor: "gray" }}
            >
              Close
            </button>
          </div>
        </>
      )}

      {/* Car Rental Booking Popup */}
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
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="passengers">Number of Passengers:</label>
                <input
                  type="number"
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  min="1"
                  max="8"
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
                  <option value="minivan">Minivan</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Rent Now
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
