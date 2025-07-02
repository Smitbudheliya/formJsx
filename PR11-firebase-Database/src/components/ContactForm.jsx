// src/components/ContactForm.jsx
import React, { useState } from 'react'
import { getDatabase } from 'firebase/database'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData);
    let obj = {
        userid : math.floor(math.random()*10000),
        ...formData
    }
    console.log(obj);
    
  }
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Sample Company</h2>
        <p>Address</p>
        <p>Phone Number</p>
        <p>Email</p>
      </div>
      <div className="contact-right">
        <h3>Email Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
          </div>
          <div className="row">
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}
