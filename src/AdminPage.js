import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdminPage.css";
import Header from "./Header";
import Footer from "./Footer";

class CustomizePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <h1>Adminstrator Page</h1>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      );
  }
};

export default CustomizePage;