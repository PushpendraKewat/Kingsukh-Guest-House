import React from "react";
import heroImg from "../assets/header.jpg"; // using your image from assets

function Hero() {
  return (
    <header
      id="home"
      className="vh-100 d-flex align-items-center text-white"
      style={{
        background: `url(${heroImg}) center/cover no-repeat`,
      }}
    >
      <div className="container text-center">
        <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
          Welcome to Kingsukh Guest House
        </h1>
        <p className="lead mb-4 animate__animated animate__fadeInUp">
          Experience comfort, luxury, and the beauty of nature in one place.
        </p>
        <a
          href="#rooms"
          className="btn btn-warning btn-lg shadow animate__animated animate__fadeInUp animate__delay-1s"
        >
          Explore Rooms
        </a>
      </div>
    </header>
  );
}

export default Hero;
