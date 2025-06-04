import React, { useState } from 'react';
import './App.css';
import ChallanForm from './assets/component/ChallanForm';
import ChallanResult from './assets/component/ChallanResult';
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [challans, setChallans] = useState([]); // use array instead of single challan

  const handleChallanSubmit = (data) => {
    setChallans((prevChallans) => [...prevChallans, data]); // append new challan
  };

  return (
    <div className="App">
      <h1>Indian Vehicle Challan System</h1>
      <ChallanForm onSubmit={handleChallanSubmit} />
      
      {challans.length > 0 && (
        <div>
          <h2>All Challans</h2>
          {challans.map((challan, index) => (
            <ChallanResult
              key={index}
              vehicleNumber={challan.vehicleNumber}
              violationType={challan.violationType}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
