import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="navbar navbar-expand-md bg-warning navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to={"/"}>
            Ahmad Fauzi
          </Link>
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
          <nav className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
