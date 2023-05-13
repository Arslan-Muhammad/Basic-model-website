import React from 'react'
import { Link } from "react-router-dom"
export default function Nav(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white">
      <div className="container-fluid ms-4">
        <a className="navbar-brand fs-4" href="#">Web <sup><span className="text-primary">Dr</span></sup></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center fs-5 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/team">Our Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" onClick={props.login}>
                {props.status ? "Logout" : "Login"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
