import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const auth = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <h1 className="navbar-brand">all my favorite things</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!auth.isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-links" to="/">SIGN UP</Link>
              </li>
            )}
            {auth.isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-links" to="/">SEARCH</Link>
              </li>
            )}
            {auth.isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-links" to="/MyList">MY LISTS</Link>
              </li>
            )}
            {!auth.isLoggedIn ? (
              <li className="nav-item">
                <Link className="nav-links" to="/Login">Login</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-links" to="/" onClick={auth.logout}>Logout</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
