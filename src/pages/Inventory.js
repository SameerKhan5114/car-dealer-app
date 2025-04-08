import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Inventory.css';

const Inventory = () => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch('https://myfakeapi.com/api/cars/1')
      .then((res) => res.json())
      .then((data) => setCar(data.Car))
      .catch((err) => console.error(err));
  }, []);

  if (!car) return <div className="text-center my-5">Loading...</div>;

  return (
    <Container fluid className="p-4">
      {/* Car title and pricing */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-nowrap">
  {/* Car Model */}
  <div>
    <h5 className="mb-0">
      {car.car} {car.car_model} {car.car_model_year}
    </h5>
  </div>

  {/* Car Price */}
  <div>
    <h5 className="text-danger mb-0">${car.price || 7000}</h5>
  </div>

  {/* Estimated Monthly Price */}
  <div>
    <p className="text-muted mb-0">
      Est <strong>$250</strong> mo <i className="bi bi-info-circle"></i>
    </p>
  </div>
</div>



      <Row className="mt-3">
        {/* Sidebar Filters */}
        <Col md={2}>
  <div className="d-flex flex-column gap-2 text-center sidebar-section">
    {['All', 'Exterior', 'Interior', 'Others', '360', 'Videos'].map((item) => (
      <Button 
        key={item} 
        variant="light" 
        className="border" 
        style={{ height: '116px' }} 
      >
        {item} ()
      </Button>
    ))}
  </div>
</Col>


        {/* Main car image */}
        <Col md={7}>

        <img
  src={car.image || 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg'}
  className="img-fluid rounded shadow-sm w-100"
  alt="Car"
  style={{
    height: 'auto',
    maxHeight: '450px',
    width: '100%',
    objectFit: 'cover',
  }}
/>


  
  <div className="d-flex mt-3 gap-3 overflow-auto thumbnail-gallery">
    {[...Array(5)].map((_, idx) => (
      <img
        key={idx}
        src={car.image || 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg'}
        alt="car"
        style={{
          height: '140px', 
          width: '170px',   
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}
      />
    ))}
  </div>
</Col>


        {/* Car details sidebar */}
        <Col md={3}>
          <div className="p-3 border rounded shadow-sm">
            <p className="small text-muted mb-1">VIN: <strong>{car.vin || '4TBFIFK3HU737960'}</strong></p>
            <ul className="list-unstyled ps-3">
              <li>• {car.car_mileage || '120,221'} MI</li>
              <li>• {car.transmission || 'Automatic G- Speed'}</li>
              <li>• {car.fuel_type || 'Gasoline'}</li>
              <li>• Passenger Car</li>
              <li>• 4CYL</li>
            </ul>

            <div className="d-flex justify-content-between mb-3">
              <Button size="sm" variant="secondary">Loan</Button>
              <Button size="sm" variant="warning">Send offer</Button>
            </div>

            <h6 className="text-warning">Check Availability</h6>
            <Button className="w-100 bg-dark text-white mb-2">(469) 469-4699</Button>

            <Form>
              <Form.Label className="mt-2">Or</Form.Label>
              <Row>
                <Col><Form.Control placeholder="First Name" /></Col>
                <Col><Form.Control placeholder="Last Name" /></Col>
              </Row>
              <Form.Control placeholder="Phone (XXX) XXX-XXXX" className="mt-2" />
              <Form.Control placeholder="Email" className="mt-2" />

              <div className="mt-2">
                <strong>Need more info about :</strong>
                <Form.Check label="Vehicle history Report" />
                <Form.Check label="Finance Options" disabled />
                <Form.Check label="I have a trade in" />
                <Form.Control as="textarea" rows={2} placeholder="Type your text here.." className="mt-2" />
              </div>

              <Form.Check className="small mt-2" label="By clicking Send I agree to be contacted..." />
              <Button className="w-100 mt-2" variant="warning">Send</Button>
            </Form>
          </div>
        </Col>
      </Row>

      {/* Seller info and Fuel */}
      <Row className="mt-4 align-items-center border-top pt-3 text-center">
  {/* Seller Info */}
  <Col md={4} className="d-flex justify-content-center align-items-center gap-3 mb-3 mb-md-0">
    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Seller" width="50" className="rounded-circle" />
    <div>
      <h6 className="mb-0">Ghada Motors</h6>
      <span className="text-warning">★★★★★</span>
    </div>
  </Col>

  {/* Address */}
  <Col md={4} className="d-flex flex-column justify-content-center align-items-center mb-3 mb-md-0">
    <p className="mb-0 fw-bold text-warning">1503 S McDonald St</p>
    <p className="mb-0 text-muted">McKinney, TX 75069</p>
  </Col>

  {/* Fuel Economy */}
  <Col md={4} className="d-flex flex-column justify-content-center align-items-center">
  <h6 className="mb-2">Fuel Economy</h6>
  <div className="d-flex justify-content-between align-items-center w-100 px-5">
    <div className="text-center">
      <p className="mb-0">City</p>
      <p className="mb-0 fw-bold">23</p>
    </div>
    <i className="bi bi-fuel-pump fs-3 text-secondary"></i>
    <div className="text-center">
      <p className="mb-0">HWY</p>
      <p className="mb-0 fw-bold">33</p>
    </div>
  </div>
</Col>

</Row>

    </Container>
  );
};

export default Inventory;
