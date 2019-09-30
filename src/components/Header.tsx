import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navbarNavDropdown" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/practice">
                  Practice
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Performance
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-bell" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
