import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Header from "./Header";
import Footer from "./Footer";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(searchInput) {
    console.log("homepage", searchInput);
    this.props.getSearchResults(searchInput);
  }

  render() {
    console.log(this.props);
    return (
      <div >
        <div>
          <Header />
        </div>
        <br></br>
        <div className="main">
            <h1>Welcome to an educational and fun app!</h1>
            <nav className="align-links">
            <Link to="/playpage">Play</Link>
            <Link to="/customizepage">Customize Display</Link>
            <Link to="/adminpage">Administraor Page</Link>

            {/* <form
                onSubmit={(event) => {
                event.preventDefault();
                this.props.getSearchResults(event.target.movie.value);
                }}
            >
                <br></br>
                <input name="movie" placeholder="Search Movies" />
                <button>Search Movies</button>
            </form> */}
            </nav>
            <div className="extraDiv"></div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;