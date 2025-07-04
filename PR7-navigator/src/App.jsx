import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ServiceList from './components/ServiceList.jsx';
import AddService from './components/AddService.jsx';
import EditService from './components/EditService.jsx';
// app css
import './App.css';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'Demo', price: 5000 },
    
  ]);

  return (
    <div className="container back">
      <Router>
      <Navbar />
      <div className="container mt-4 " >
        <Routes>
          <Route path="/" element={<ServiceList services={services} setServices={setServices} />} />
          <Route path="/add" element={<AddService services={services} setServices={setServices} />} />
          <Route path="/edit/:id" element={<EditService services={services} setServices={setServices} />} />
          <Route path="*" element={ <ServiceList services={services} setServices={setServices} />} />


         
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
