import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ServiceList from './components/ServiceList.jsx';
import AddService from './components/AddService.jsx';
import EditService from './components/EditService.jsx';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'Web Development', price: 5000 },
    { id: 2, name: 'Graphic Design', price: 3000 },
  ]);

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ServiceList services={services} />} />
          <Route path="/add" element={<AddService services={services} setServices={setServices} />} />
          <Route path="/edit/:id" element={<EditService services={services} setServices={setServices} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
