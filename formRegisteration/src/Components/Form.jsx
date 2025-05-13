import { useState } from "react"
import './Form.css'

function Form() {
    const [formInput, setFormInput] = useState({
        username: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        courses: []
    })
    const [formerror, setFormError] = useState({
        username: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        courses: []

    })

    const changeInput = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormInput((prevState) => ({
                ...prevState,
                courses: checked
                    ? [...prevState.courses, value]
                    : prevState.courses.filter((course) => course !== value),
            }));
        } else {
            setFormInput({
                ...formInput,
                [name]: value,
            });
        }
    };

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(formInput)
        alert("done")
        setFormInput({
            username: "",
            email: "",
            password: "",
            gender: "",
            city: "",
            courses: []
        })
    }
    return (
        <>
            <div className="form-container">
                <form onSubmit={handlesubmit} className="form-box">
                    <h2 className="form-title">Registration Form</h2>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" required name="username" value={formInput.username} onChange={changeInput} placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formInput.email} onChange={changeInput} placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formInput.password} onChange={changeInput} placeholder="Enter your password" />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <div className="gender-options">
                            <label><input type="radio" name="gender" value="male" onChange={changeInput} checked={formInput.gender == "male"} /> Male</label>
                            <label><input type="radio" name="gender" value="female" onChange={changeInput} checked={formInput.gender == "female"} /> Female</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>courses</label>
                        <div className="courses-options">
                            <label><input type="checkbox" name="courses" value="html" onChange={changeInput}  checked={formInput.courses.includes("html")}/>Html</label>
                            <label><input type="checkbox" name="courses" value="css" onChange={changeInput} checked={formInput.courses.includes("css")} />Css</label>
                            <label><input type="checkbox" name="courses" value="java" onChange={changeInput} checked={formInput.courses.includes("java")} />Java</label>
                            <label><input type="checkbox" name="courses" value="react" onChange={changeInput} checked={formInput.courses.includes("react")} />React</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <select name="city" value={formInput.city} onChange={changeInput}>
                            <option value="">Select your city</option>
                            <option value="Surat">Surat</option>
                            <option value="Amreli">Amreli</option>
                            <option value="Bhavanagar">Bhavanagar</option>
                            <option value="Botad">Botad</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;
