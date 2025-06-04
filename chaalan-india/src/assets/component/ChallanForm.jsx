import React, { useState } from 'react';

const ChallanForm = ({ onSubmit }) => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [violationType, setViolationType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ vehicleNumber, violationType });
    };

    return (

        <>
            <div className="challan-form">
                <h2>Enter Vehicle and Violation Details</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                       your name:
                        <input
                            type="text"
                            value={vehicleNumber}
                            onChange={(e) => setVehicleNumber(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    {/* <label>
                        Violation Type:
                        <select
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
                    </label> */}
                    <br /><br />
                    <button type="submit">Get Challan Details</button>
                </form>
            </div>
        </>




    );
};

export default ChallanForm;
