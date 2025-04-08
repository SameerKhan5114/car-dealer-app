import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCar, FaKey, FaUser, FaWind, FaMapMarkerAlt } from 'react-icons/fa';

const highlightsData = [
  { label: "Title Status", value: "Clean", icon: <FaMapMarkerAlt /> },
  { label: "Miles", value: "125,234", icon: <FaCar /> },
  { label: "Owners", value: "2", icon: <FaUser /> },
  { label: "Exterior Damage", value: "None", icon: <FaCar /> },
  { label: "Keys", value: "2", icon: <FaKey /> },
  { label: "Odor/Smoked In", value: "No", icon: <FaWind /> },
];

const tireData = [
  { position: "1. Driver - Front", status: "FAIR", depth: "<5/32", size: "17\"", color: "#e5c756" },
  { position: "2. Passenger - Front", status: "New", depth: "8/32 > more", size: "17\"", color: "#5cb85c" },
  { position: "3. Driver - Back", status: "FULLY USED", depth: "Less<4/32", size: "17\"", color: "#d9534f" },
  { position: "4. Driver - Back", status: "Good", depth: "6/32-7/32", size: "17\"", color: "#337ab7" },
  { position: "5. Spare Tire", status: "FULLY USED", depth: "Less<4/32", size: "17\"", color: "#d9534f" },
];

const Highlight = () => (
  <div className="container py-5">
    {/* Highlights & Trade In */}
    <div className="row">
      <div className="col-md-8">
        <h2 className="text-warning mb-4" style={{ fontWeight: '600' }}>Highlights</h2>
        <div className="row text-center g-4">
          {highlightsData.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <div className="mb-2 fs-4">{item.icon}</div>
              <div className="text-muted small">{item.label}</div>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-4 d-flex flex-column align-items-center justify-content-center border-start">
        <h5 className="text-warning" style={{ fontWeight: '600' }}>Value My Trade In</h5>
        <form className="w-100 mt-3">
          <input type="text" className="form-control mb-2" placeholder="Enter Mileage" />
          <button type="submit" className="btn btn-warning w-100">Submit</button>
        </form>
      </div>
    </div>

    {/* Auto Loan Calculator */}
    <div className="row mt-5 p-4" style={{ backgroundColor: '#d39e6f' }}>
      <div className="col-md-6">
        <div className="bg-white rounded shadow p-4">
          <h5 className="text-center mb-4" style={{ fontWeight: '600' }}>Auto Loan Calculator</h5>
          <form>
            <input type="number" className="form-control mb-2" placeholder="Vehicle Amount" />
            <input type="number" className="form-control mb-2" placeholder="Down Payment" />
            <input type="number" className="form-control mb-2" placeholder="Trade-in-Value" />
            <input type="number" className="form-control mb-2" placeholder="TTL (Title, Taxes and License Plates) Est." />
            <input type="number" className="form-control mb-2" placeholder="Interest Rate" />
            <input type="number" className="form-control mb-3" placeholder="Loan Terms (Monthly)" />
            <div className="d-flex justify-content-between mb-3">
              <button className="btn btn-outline-secondary">Poor</button>
              <button className="btn btn-outline-secondary">Fair</button>
              <button className="btn btn-outline-warning">Good</button>
              <button className="btn btn-outline-secondary">Excellent</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
        <div className="bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow" style={{ width: '200px', height: '200px' }}>
          <h4 className="mb-0">$0</h4>
          <p className="mb-0">Month</p>
        </div>
        <div className="text-center mt-3">
          <p className="mb-1 fw-semibold">Get Pre-Approved</p>
          <button className="btn btn-warning">Apply</button>
        </div>
      </div>
    </div>

    {/* Tire Condition */}
    <div className="mt-5">
      <h4 className="fw-bold mb-4">Tires Condition</h4>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {tireData.map((tire, idx) => (
          <div className="col" key={idx}>
            <div className="text-center border p-3 rounded shadow-sm">
              <div className="mb-2">
                <div className="mx-auto rounded-circle" style={{ width: '60px', height: '60px', backgroundColor: tire.color }}></div>
              </div>
              <small className="text-muted">{tire.position}</small>
              <p className="mb-0 fw-bold">{tire.status}</p>
              <small className="text-muted">{tire.depth}</small><br />
              <small className="text-muted">Wheel Size {tire.size}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Highlight;
