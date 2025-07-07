import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const adminEmails = ['admin@example.com'];

const Navbar = () => {
  const { currentUser } = useAuth();
  const isAdmin = currentUser && adminEmails.includes(currentUser.email);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">BlogSite</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {isAdmin && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/create">New Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav">
          {currentUser ? (
            <>
              <li className="nav-item">
                <span className="nav-link">Hello, {currentUser.email}</span>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
