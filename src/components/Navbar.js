import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#top" class="d-inline-block align-text-top"><img className="logo" src={logo} alt="logo..."></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#top">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#top">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#top">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#top">How work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#top">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#top">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar