import React from "react";

function Testimonials() {
  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">
          What Our Guests Say
        </h2>
        <div className="row">
          <div className="col-md-4" data-aos="fade-right">
            <div className="card shadow p-3">
              <p>"Amazing stay! Rooms were clean and staff was very friendly."</p>
              <h6>- Ramesh K.</h6>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <div className="card shadow p-3">
              <p>"Great hospitality and excellent service. Highly recommend."</p>
              <h6>- Anjali S.</h6>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <div className="card shadow p-3">
              <p>"Best budget stay in town. Will definitely visit again!"</p>
              <h6>- Vikram P.</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
