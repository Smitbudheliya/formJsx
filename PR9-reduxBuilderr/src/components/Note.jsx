import React from 'react';
// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

const Note = ({ text, bg }) => (
  <>
    {/* <li style={{ backgroundColor: bg, padding: '10px', marginBottom: '10px', color: '#fff' }}>

    </li> */}
    <div className="ms-1 d-flex justify-content-center" style={{ backgroundColor: bg,width:'20%',minHeight:'200px', padding: '10px', marginBottom: '10px', color: '#fff' }}>
      {text}...
    </div>
  </>
);

export default Note;
