import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  const [input, setInput] = useState([{ name: "", phone: "" }]);

  const addForm = () => {
    setInput([...input, { name: "", phone: "" }]);
  };

  const removeInput = (index) => {
    const newInput = [...input];
    newInput.splice(index, 1);
    setInput(newInput);
  };

  const changeInput = (index, e) => {
    const { name, value } = e.target;
    const newInput = [...input];
    newInput[index][name] = value;
    setInput(newInput);
  };

  const handleSubmit = () => {
    console.log(input);
  };

  return (
    <div className="formbg ">
      <div className=" container my-5">
      <h2 className="text-center mb-4">📋 Dynamic Form</h2>

      {input.map((val, index) => (
        <div className="form card mb-3 shadow-sm" key={index}>
          <div className=" card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-5">
           
                <input
                  type="text"
                  name="name"
                  value={val.name}
                  onChange={(e) => changeInput(index, e)}
                  className="form form-control"
                  placeholder="Enter name"
                />
              </div>
              <div className="col-md-5">
               
                <input
                  type="tel"
                  name="phone"
                  value={val.phone}
                  onChange={(e) => changeInput(index, e)}
                  className="form form-control"
                  placeholder="Enter phone number"
                />
                
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button
                  className=" btn coolbtn w-100"
                  onClick={() => removeInput(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center d-flex justify-content-between">
        <button className="btn coolbtn me-3" onClick={addForm}>
          ➕ Add More
        </button>
        <button className="btn coolbtn" onClick={handleSubmit}>
           Submit
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
