import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PlayPage.css";
import Header from "./Header";
import Footer from "./Footer";

class PlayPage extends Component {
  constructor(props) {
    super(props);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(searchInput) {
    console.log("playpage", searchInput);
    this.props.getSearchResults(searchInput);
  }

  render() {
    console.log(`inside of PlayPage render ${this.props}`);
    return (
      <div >
        <div>
          <Header />
        </div>
        <br></br>
        <div className="main">
            <h1>Ready to play?</h1>
            <nav className="align-links">
            {/* <Link to="/trendingmovies">Trending Movies</Link> */}

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
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PlayPage;