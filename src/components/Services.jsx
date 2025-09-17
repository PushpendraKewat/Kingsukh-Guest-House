import React from "react";
import { FaWifi, FaUtensils, FaCar, FaSwimmer } from "react-icons/fa";
import serviceImg from "../assets/service.jpg";

function Services() {
  const services = [
    {
      icon: <FaWifi className="text-primary fs-1 mb-3" />,
      title: "Free Wi-Fi",
      desc: "Stay connected with complimentary high-speed internet.",
    },
    {
      icon: <FaUtensils className="text-primary fs-1 mb-3" />,
      title: "Restaurant",
      desc: "Delicious multi-cuisine meals served fresh daily.",
    },
    {
      icon: <FaCar className="text-primary fs-1 mb-3" />,
      title: "Parking",
      desc: "Ample and secure parking space for our guests.",
    },
    {
      icon: <FaSwimmer className="text-primary fs-1 mb-3" />,
      title: "Swimming Pool",
      desc: "Relax and refresh in our clean, modern pool.",
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Text and Services */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3 text-center text-md-start">Our Services</h2>
            <p className="lead text-muted mb-4 text-center text-md-start">
              We provide top-notch amenities to make your stay comfortable and enjoyable.
            </p>
            <div className="row g-4">
              {services.map((service, idx) => (
                <div className="col-6" key={idx}>
                  <div className="card shadow-sm border-0 p-3 h-100 text-center">
                    {service.icon}
                    <h6 className="fw-bold">{service.title}</h6>
                    <p className="small text-muted">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={serviceImg}
              alt="Hotel Services"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

