// App.jsx
import { Routes, Route } from 'react-router-dom';
import RoomList from './components/RoomList.jsx';
import ReservationForm from './components/ReservationForm.jsx';
import ReservationList from './components/ReservationList.jsx';
import Login from './components/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Navbar from './components/Navbar.jsx';
import Structure from './components/Structure.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Structure />} />

        <Route path="/roomlist" element={<RoomList />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/reserve"
          element={
            <PrivateRoute>
              <ReservationForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/reservations"
          element={
            <PrivateRoute>
              <ReservationList />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
