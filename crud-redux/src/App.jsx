//7
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ServiceList from './components/ServiceList';
import AddService from './components/AddService';
import EditService from './components/EditService';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ServiceList />} />
          <Route path="/add" element={<AddService />} />
          <Route path="/edit/:id" element={<EditService />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
