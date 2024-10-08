import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/Login.css"; // Importing CSS file for styling

import sideImage from '../img/bg.jpg'; // Image to be placed on the right

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if credentials match
    if (username === "testuser" && password === "1234") {
      console.log("Login successful!");
      navigate("/home"); // Navigate to /home on successful login
    } else {
      console.log("Invalid credentials");
      alert("Invalid username or password"); // Notify user of invalid credentials
    }
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-box">
        <div className="login-form">
          <h1 className="login-title">Welcome Back!</h1>
          <p className="login-subtitle">Login to continue your journey</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="login-footer">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
        <img src={sideImage} alt="Travel Background" className="side-image" /> {/* Image on the right */}
      </div>
    </div>
  );
}
