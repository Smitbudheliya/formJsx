// src/components/ContactForm.jsx
import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import './ContactForm.css'
import { app } from '../firebaseConfig'

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

  const db = getDatabase(app)

  const handleSubmit = async e => {
    e.preventDefault()

    const userid = Math.floor(Math.random() * 10000)
    const obj = { userid, ...formData }

    try {
      await set(ref(db, `user/${userid}`), {
        ...formData
      })
      alert('Data saved successfully!')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      }) // reset the form
    } catch (err) {
      console.error(err)
      alert('Failed to save data.')
    }
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      
        <div className="col-md-5 mb-4 text-align-center">
          <h2 className="mb-3 text-white">Sample Company</h2>
          <p className='text-white'><strong>Address:</strong> 123 Main Street</p>
          <p className='text-white'><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className='text-white'><strong>Email:</strong> info@samplecompany.com</p>
        </div>
        <div className="col-md-8">
          <h3 className="mb-4 text-white  ">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="col">
                <input type="text" name="company" className="form-control" placeholder="Company" value={formData.company} onChange={handleChange} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="email" name="email" className="form-control" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="col">
                <input type="tel" name="phone" className="form-control" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="mb-3">
              <textarea name="message" className="form-control" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" style={{background:"white"}} className="btn  w-100">SUBMIT</button>
          </form>
        </div>
      
    </div>
  )
}
