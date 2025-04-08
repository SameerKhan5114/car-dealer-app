import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const vehicleData = {
  make: "Jeep",
  model: "Wrangler",
  year: 2004,
  trim: "X",
  bodyType: "SUV",
  fuelType: "Gasoline",
  interiorColor: "Dark Slate Gray",
  mileage: "106,727 mi",
  condition: "Used",
  engine: "190 hp 4L I6",
  stockNumber: "223515A",
  transmission: "Automatic",
  drivetrain: "4 Wheel Drive",
  horsepower: "190 hp",
  doors: "2 doors",
  exteriorColor: "White"
};

const sellerDescription = "This car was listed for sale to test this model and to see what we can fill out over here and design any thing that comes into my mind.";

const VehicleSpecification = () => {
  return (
    <div className="container my-5">
      

      {/* Vehicle Specification Section */}
      <div className="border-top border-bottom py-4">
        <h2 className="text-warning mb-4" style={{ fontWeight: '600' }}>Vehicle Specification</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <strong>Make:</strong> {vehicleData.make}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Model:</strong> {vehicleData.model}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Year:</strong> {vehicleData.year}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Trim:</strong> {vehicleData.trim}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Body type:</strong> {vehicleData.bodyType}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Fuel type:</strong> {vehicleData.fuelType}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Interior color:</strong> {vehicleData.interiorColor}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Mileage:</strong> {vehicleData.mileage}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Condition:</strong> {vehicleData.condition}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Engine:</strong> {vehicleData.engine}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Stock number:</strong> {vehicleData.stockNumber}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Transmission:</strong> {vehicleData.transmission}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Drivetrain:</strong> {vehicleData.drivetrain}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Horsepower:</strong> {vehicleData.horsepower}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Doors:</strong> {vehicleData.doors}
          </div>
          <div className="col-md-4 mb-3">
            <strong>Exterior color:</strong> {vehicleData.exteriorColor}
          </div>
        </div>
      </div>
      {/* Seller Description Section */}
      <div className="border-top border-bottom py-4 mb-5">
        <h2 className="text-warning mb-3" style={{ fontWeight: '600' }}>Seller Description</h2>
        <p className="text-secondary mb-0">{sellerDescription}</p>
      </div>
    </div>
  );
};

export default VehicleSpecification;