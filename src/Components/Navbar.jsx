import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Culineries</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Home</a>
        </li>
        <li className="nav-item">
          <Link to='/register'  className="nav-link" >Register</Link>
        </li>
        <li className="nav-item">
          <Link to='/login'  className="nav-link" >Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;