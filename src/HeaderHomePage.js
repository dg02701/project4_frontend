import React, { Component } from "react";
import "./HeaderHomePage.css";
// import { Link } from "react-router-dom";

class HeaderHomePage extends Component {
  render() {
    return (
      <div className="headerHomePage">
        <div className="flex-title">
          <h1 className="titleHide">Flashcard Fun 2.0</h1>
        </div>
        <nav>
        </nav>
      </div>
    );
  }
}

export default HeaderHomePage;