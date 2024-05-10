
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 " style={{paddingBottom:0}}>
      <div className="container-fluid">
        <div data-testid="title">
         <Link className="navbar-brand" to={"/"}> 
         <h3 >Event Booking System</h3>
         </Link>   
         </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="form-inline">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" >
            <div data-testid="venue-btn">
            <li className="nav-item active" style={{padding:10}}>
              <Link className="btn btn-primary " to={"/viewall-venue"} >
                Venue Details
              </Link>
            </li>
            </div>
            <div data-testid="book-btn">
            <li className="nav-item active" style={{padding:10}}>
              <Link className="btn btn-secondary " to={"/add-booking/:id"} >
                Book Venue
              </Link>
            </li>
            </div>
            <div data-testid="search-btn">
            <li className="nav-item active" style={{padding:10}}>
              <Link className="btn btn-secondary " to={"/search-venue"} >
                Search
              </Link>
            </li>
            </div>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
