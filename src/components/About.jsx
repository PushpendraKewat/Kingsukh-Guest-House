import React from "react";
import aboutImg from "../assets/out.jpg"; // image from assets

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div
            className="col-md-6 mb-4 mb-md-0 text-center"
            data-aos="fade-right"
          >
            <img
              src={aboutImg}
              alt="About Kingsukh Guest House"
              className="img-fluid rounded shadow animate__animated animate__fadeInLeft"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
              About Us
            </h2>
            <p className="text-muted mb-4 animate__animated animate__fadeInUp">
              Nestled in the heart of Purulia, Kingsukh Guest House offers
              modern amenities with a touch of traditional charm. Whether you’re
              here for leisure or business, we ensure a comfortable stay with
              personalized service.
            </p>
            <ul className="list-unstyled animate__animated animate__fadeInUp animate__delay-1s">
              <li>✔ Comfortable and Spacious Rooms</li>
              <li>✔ Prime Location near Tourist Spots</li>
              <li>✔ Dedicated and Friendly Staff</li>
            </ul>
            <a
              href="#rooms"
              className="btn btn-warning mt-3 shadow animate__animated animate__fadeInUp animate__delay-2s"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
