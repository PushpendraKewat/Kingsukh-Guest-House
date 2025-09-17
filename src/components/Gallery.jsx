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
    <section id="gallery" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">
          Gallery
        </h2>
        <div className="row">
          {images.map((img, idx) => (
            <div key={idx} className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <img
                src={img} // Use the imported image variable directly
                alt="Gallery"
                className="img-fluid rounded shadow"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;