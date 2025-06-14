import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <div className="mb-3 text-center">
          <Link to="/" className="btn btn-outline-primary mx-2 btn-custom">View</Link>
          <Link to="/add" className="btn btn-outline-success mx-2 btn-custom">Add</Link>
        </div>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
