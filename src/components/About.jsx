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
             Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of
              Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maith
              on Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals,
              and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of
              nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories th
              at linger long after your stay.
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
