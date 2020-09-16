import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PlayPage.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";

class PlayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: [],
    }
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(searchInput) {
    console.log("playpage", searchInput);
    this.props.getSearchResults(searchInput);
  }

  componentDidMount() {
    axios.get(`${backendUrl}/decks`).then((response) => {
      this.setState({
        decks: response.data.decks,
      });
    });
  }

  render() {
    console.log(`inside of PlayPage render ${this.state}`);
    return (
      <div >
        <div>
          <Header />
        </div>
        <br></br>
        <div className="main">
            <h1>Ready to play?</h1>
            <h3>Here is how you play.</h3>
            <div className="instructions1">
              <h3>Use KEYBOARD only.   Here are the keys to use:</h3>
              <ol>
                  <li>ArrowRight (very bottom right of keyboard) gets next card.</li>
                  <li>'A' shows card back and answer</li>
                  <li>'Y' records your self-score that 'Yes', you had the correct answer </li>
                  <li>'N' records your self-score that 'No', you did not have the correct answer</li>
                  <li>After you select Y or N, use ArrowRight to get the next card </li>
              </ol>
            </div>
            <nav className="align-links">
            {/* <Link to="/trendingmovies"></Link> */}

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