import React, { useState } from 'react';
import './ChallanForm.css'; // styles css

const ChallanForm = ({ onSubmit }) => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [violationType, setViolationType] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        city: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password must match!");
            return;
        }
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            city: ""
        });
        onSubmit({ vehicleNumber, violationType });
        console.log("Form Data Submitted:", formData);

    };

    return (

        <>
            <div className="row">
                <div className="col-12 d-flex justify-contain-center text-center mb-4">
                    <div className="glass-card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
                        <h3 className="text-center mb-4 text-dark">🚓 Challan Registration</h3>
                        <form className='' onSubmit={handleSubmit}>
                            <input type="text" className="form-control mb-3" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                            <input type="email" className="form-control mb-3" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                            <input type="password" className="form-control mb-3" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                            <input type="password" className="form-control mb-3" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

                            <select className="form-select mb-3" name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="male">♂ Male</option>
                                <option value="female">♀ Female</option>
                                <option value="other">⚧ Other</option>
                            </select>

                            <input type="text" className="form-control mb-3" placeholder="City" name="city" value={formData.city} onChange={handleChange} required />

                            <button type="submit" className="btn btn-light w-100 cool-btn">
                                🚀 Register Challan
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </>




    );
};

export default ChallanForm;
