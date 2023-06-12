import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-box">
      <header>
        <ul className="navbar">
          <li className="site-title">
            <Link to="/">YouTube</Link>
          </li>
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
