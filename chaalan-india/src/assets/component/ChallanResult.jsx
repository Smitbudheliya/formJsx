import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./challanResult.css"; // Assuming you have a Challan.css for custom styles

// Fine amounts for different violations


const violationFine = {
  overspeeding: 1000,
  wrongparking: 500,
  signaljump: 1500,
  nohelmet: 300,
};

const Challan = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [violationType, setViolationType] = useState("");
  const [challanList, setChallanList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (vehicleNumber && violationType) {
      const newChallan = { vehicleNumber, violationType };
      setChallanList((prev) => [...prev, newChallan]);
      setVehicleNumber("");
      setViolationType("");
    }
  };

  return (
    <div className="container mt-5">
      {/* Form Card */}
      <div className="card shadow colorful-card border-0 rounded-4 p-4">
        <h4 className="mb-4">🚔 Enter Vehicle & Violation Details</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label className="form-label ">Vehicle Number</label>
            <input
              type="text"
              className="form-control shadow-sm"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label">Violation Type</label>
            <select
              className="form-select shadow-sm"
              value={violationType}
              onChange={(e) => setViolationType(e.target.value)}
              required
            >
              <option value="">Select Violation</option>
              <option value="overspeeding">Overspeeding</option>
              <option value="wrongparking">Wrong Parking</option>
              <option value="signaljump">Signal Jump</option>
              <option value="nohelmet">No Helmet</option>
            </select>
          </div>
          <button type="submit" className="btn btn-light w-100 fw-bold shadow cool-btn">
            ➕ Add Challan
          </button>
        </form>
      </div>

      {/* Table Card */}
      {challanList.length > 0 && (
        <div className="card mt-4 colorful-card shadow-lg border-0 rounded-4">
          <div className="card-body p-4">
            <h5 className="card-title text-center mb-4 text-primary">📋 Challan History</h5>
            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle text-center">
                <thead className="table-primary">
                  <tr>
                    <th>#</th>
                    <th>Vehicle Number</th>
                    <th>Violation Type</th>
                    <th>Fine Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {challanList.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.vehicleNumber}</td>
                      <td className="text-capitalize">{item.violationType}</td>
                      <td className="fw-semibold text-danger">₹{violationFine[item.violationType]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challan;
