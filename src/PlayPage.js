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
            <h3>Here is how you play.</h3>
            <p>Use KEYBOARD only.   Here are the keys to use:</p>
            <ol>
                <li>ArrowRight (very bottom right of keyboard) gets next card.</li>
                <li>'A' shows card back and answer</li>
                <li>'Y' records your self-score that 'Yes', you had the correct answer </li>
                <li>'N' records your self-score that 'No', you did not have the correct answer</li>
                <li>After you select Y or N, use ArrowRight to get the next card </li>
            </ol>
            <nav className="align-links">
            <Link to="/trendingmovies"></Link>

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