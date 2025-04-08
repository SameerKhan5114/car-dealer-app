import React from 'react';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import Inventory from './pages/Inventory.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VehicleSpecification from './pages/VehicleSpecification.js';
import Highlight from './pages/Highlight.js';
import FooterSection from './pages/FooterSection.js';


function App() {
  return (
    <div>
      <Navbar />
      <Inventory />
      <VehicleSpecification/>
      <Highlight/>
      <FooterSection/>
      
      <Footer />
    </div>
  );
}

export default App;


