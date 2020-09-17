import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h5>This App uses open source material</h5>
        <h5>© 2020 HubrisCorp LLC in cooperation with MJD LLC, all rigths reservied</h5>
        <Link to="/adminpage" id="adminHide">Administrator Page 
              <span className="span1"> *password required* </span>
        </Link>
      </footer>
    );
  }
}

export default Footer;