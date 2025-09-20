import React from "react";
import g1 from "../assets/out.jpg";
import g2 from "../assets/palash.webp";
import g3 from "../assets/baranti.webp";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery5.jpg";
import g6 from "../assets/gallery6.jpg";

function Gallery() {
  const images = [g1, g2, g3, g4, g5, g6];

  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">
          Gallery
        </h2>
        <div className="row g-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="col-12 col-sm-6 col-md-4"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="card-img-top img-fluid rounded"
                  style={{ objectFit: "cover", height: "250px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
