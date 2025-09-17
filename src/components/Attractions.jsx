import React from "react";
import baranti from "../assets/baranti.webp";
import mithonDam from "../assets/mithonDam.webp";
import ayodhya from "../assets/ayodhya.webp";
import palash from "../assets/palash.webp";

function Attractions() {
  const attractions = [
    { img: baranti, name: "Baranti Lake" },
    { img: mithonDam, name: "Mithon Dam" },
    { img: ayodhya, name: "Ayodhya Hills" },
    { img: palash, name: "Palash Forest" },
  ];

  return (
    <section id="attractions">
      <div className="container text-center">
        <h2>Nearby Attractions</h2>
        <div className="row">
          {attractions.map((place, i) => (
            <div key={i} className="col-md-3 mb-3">
              <img src={place.img} alt={place.name} className="img-fluid rounded" />
              <h6 className="mt-2">{place.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Attractions;
