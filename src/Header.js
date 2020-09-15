import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="flex-title">
          <h1 className="title">Flashcard Fun 2.0</h1>
        </div>
        <nav>
          <Link className="link" to="/">
            Back to Home
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;