import React from 'react';
import { Link } from 'react-router-dom';
import bolt from '../images/bolt.jpg'

function Navbar(){
return(
<nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
  <div className="container">
  <Link className="nav-link" to="/">
    <img src={bolt} class="d-block" height="40px"  alt="bolt" />
   </Link>&nbsp;&nbsp;

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Ride</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Become a driver</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Fleet</Link>
        </li> 

        <li className="nav-item">
          <Link className="nav-link" to="/">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Scooter</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">Drive</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Food</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Cities</Link>
        </li>

       
      </ul>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">

      <li className="nav-item">
      <button type="button" class="btn btn-primary rounded-pill w-100 btngreen border-0">Log in</button>

        </li> 
      </ul>
      </div>

    </div>
  </div>
</nav>)
}

export default Navbar;