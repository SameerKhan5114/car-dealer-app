import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterSection = () => {
  return (
    <div className="container py-5">
      {/* 1. Equipment Features */}
      <div className="mb-5">
        <h4 className="text-warning fw-bold mb-4">Equipment Features</h4>
        <div className="row">
          <div className="col-md-4">
            <ul>
              <li>Anti Lock Brake System</li>
              <li>Front Airbag</li>
              <li>Side Airbags</li>
              <li>Curtain Airbag</li>
              <li>Back Up Camera</li>
              <li>Blind Spot Monitoring</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Brake Assist</li>
              <li>Collision Mitigation System</li>
              <li>Cross Traffic Alert</li>
              <li>Daytime Running Lights</li>
              <li>Electronic Stability Control</li>
              <li>Forward Collision Warning</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Hill Descent Control</li>
              <li>Hill Start Assist</li>
              <li>Lane Departure Warning</li>
              <li>Lane Keeping Assist</li>
              <li>Parking Sensors</li>
              <li>Rear Cross Traffic Alert</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Similar Cars */}
      <div className="mb-5">
        <h4 className="text-warning fw-bold mb-4">Similar Cars</h4>
        <div className="row g-4">
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="col-md-3">
              <div className="card shadow-sm">
                <img src={`https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg`} className="card-img-top" alt="Car" />
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">Call Now</span>
                  <h6>2015 Toyota Camry XLE</h6>
                  <p className="mb-1 text-muted">14,500 Mi</p>
                  <p className="mb-2 text-danger fw-bold">$7,999 <small className="text-muted">Est. $231/mo</small></p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-dark btn-sm">Check Availability</button>
                    <button className="btn btn-outline-dark btn-sm">Financing</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Footer Info */}
      <div className="pt-4 border-top">
        <h5 className="text-warning fw-bold">Ghada Motors LLC</h5>
        <div className="row mt-3">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Inventory</li>
              <li>Finance</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <p className="small text-muted mt-3">By calling the dealership or any of sellers on this platform you agree and accept to Terms and Conditions of Use.</p>
      </div>
    </div>
  );
};

export default FooterSection;