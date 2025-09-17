import React, { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">
          Contact Us
        </h2>
        <div className="row g-4">
          {/* Contact Form Card */}
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="100">
            <div className="card shadow-sm border-0 rounded-4 p-4 h-100 hover-shadow">
              <h5 className="mb-4">Send Us a Message</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-3"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-3"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control rounded-3"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 rounded-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
            <div className="card shadow-sm border-0 rounded-4 p-4 h-100 hover-shadow d-flex flex-column">
              <h5 className="mb-4">Visit Us</h5>
              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-geo-alt-fill me-3 text-primary fs-5"></i>
                  <span>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-envelope-fill me-3 text-primary fs-5"></i>
                  <span>kkghosh0099@gmail.com</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-telephone-fill me-3 text-primary fs-5"></i>
                  <span>+91 9007062180</span>
                </li>
              </ul>
              {/* Embedded Google Map */}
              <div className="map-responsive mt-auto">
                <iframe
                  title="Kingsukh Guest House Location"
                  src="https://www.google.com/maps?q=Beside+Barshal+Water+Tank,+Manpur,+Barhanti,+West+Bengal,+India&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom hover-shadow CSS */}
      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          transition: box-shadow 0.3s ease-in-out;
        }
        .map-responsive {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          height: 0;
        }
        .map-responsive iframe {
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      `}</style>
    </section>
  );
}

export default Contact;
