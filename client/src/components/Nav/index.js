import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <>
      <nav className="navbar justify-content-start">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          <strong>Google Books</strong>
        </Link>
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Search
        </Link>
        <Link
          to="/saved"
          className={
            window.location.pathname === "/saved"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Saved
        </Link>
      </nav>
    </>
    );
  }
}

export default Nav;
