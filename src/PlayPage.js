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
        <body className="main">
            <h1>Welcome to an educational and fun app!</h1>
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
        </body>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PlayPage;