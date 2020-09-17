import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
// import Header from "./Header";
import HeaderHomePage from "./HeaderHomePage";
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
    return (
      <div >
        <div>
          <HeaderHomePage />
        </div>
        <br></br>
        <div className="main">
            <h1 className="homePageAppTitle">Flashcard Fun 2.0</h1>
            <h1>Welcome to our Homepage!</h1>
            <nav className="align-links">
            <Link to="/playpage">Click here to Play</Link>
            <Link to="/customizepage">Customize Display</Link>
            {/* <Link to="/adminpage" id="adminHide">Administrator Page 
              <span className="span1"> *password required* </span>
            </Link> */}

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