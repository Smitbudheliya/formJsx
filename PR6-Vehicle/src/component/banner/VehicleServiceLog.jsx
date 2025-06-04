import React, { useState } from 'react';

function VehicleServiceLog() {
  const [ownerName, setOwnerName] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [notes, setNotes] = useState('');
  const [savedLog, setSavedLog] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the log
    setSavedLog({
      ownerName,
      vehicleType,
      serviceDate,
      notes,
    });

    // Optionally, reset the form
    setOwnerName('');
    setVehicleType('');
    setServiceDate('');
    setNotes('');
  };

  return (
    <div className="container mt-5">
      {/* Service Log Form */}
      <div className="service-log-container">
        <h2 className="text-center">Vehicle Service Log</h2>
        <form onSubmit={handleSubmit}>
          {/* Owner Name */}
          <div className="mb-3">
            <label htmlFor="ownerName" className="form-label">Owner Name</label>
            <input
              type="text"
              className="form-control"
              id="ownerName"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="Enter owner name"
              required
            />
          </div>

          {/* Vehicle Type */}
          <div className="mb-3">
            <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
            <select
              className="form-select"
              id="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="">Select vehicle type</option>
              <option value="Car">Car</option>
              <option value="Truck">Truck</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Van">Van</option>
              <option value="SUV">SUV</option>
            </select>
          </div>

          {/* Service Date */}
          <div className="mb-3">
            <label htmlFor="serviceDate" className="form-label">Service Date</label>
            <input
              type="date"
              className="form-control"
              id="serviceDate"
              value={serviceDate}
              onChange={(e) => setServiceDate(e.target.value)}
              required
            />
          </div>

          {/* Notes */}
          <div className="mb-3">
            <label htmlFor="notes" className="form-label">Notes</label>
            <textarea
              className="form-control"
              id="notes"
              rows="3"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter service notes"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Save Service Log
          </button>
        </form>
      </div>

      {/* Saved Service Log Display */}
      {savedLog && (
        <div className="saved-log-container mt-5">
          <h3 className="text-center">Saved Service Log</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Owner Name</th>
                <th>Vehicle Type</th>
                <th>Service Date</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{savedLog.ownerName}</td>
                <td>{savedLog.vehicleType}</td>
                <td>{savedLog.serviceDate}</td>
                <td>{savedLog.notes}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default VehicleServiceLog;
