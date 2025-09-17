import React from "react";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/small.jpg";
import room3 from "../assets/recep.jpg";

function Rooms() {
  const rooms = [
    {
      img: room1,
      title: "Deluxe Room",
      desc: "Spacious and well-furnished room with modern amenities.",
      price: "₹2,000 / night",
      delay: "0s",
    },
    {
      img: room2,
      title: "Luxury Suite",
      desc: "Perfect for families, offering comfort and elegance.",
      price: "₹3,500 / night",
      delay: "0.3s",
    },
    {
      img: room3,
      title: "Standard Room",
      desc: "Affordable and cozy option for budget travelers.",
      price: "₹1,200 / night",
      delay: "0.6s",
    },
  ];

  return (
    <section id="rooms" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 animate__animated animate__fadeInDown">
          Our Rooms
        </h2>
        <div className="row g-4">
          {rooms.map((room, idx) => (
            <div
              className={`col-md-4 animate__animated animate__fadeInUp`}
              style={{ animationDelay: room.delay }}
              key={idx}
            >
              <div className="card shadow h-100 border-0 rounded-3 overflow-hidden">
                <img
                  src={room.img}
                  className="card-img-top"
                  alt={room.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{room.title}</h5>
                  <p className="card-text text-muted">{room.desc}</p>
                  <p className="fw-bold text-warning">{room.price}</p>
                  <a
                    href="#contact"
                    className="btn btn-warning mt-auto shadow-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;

