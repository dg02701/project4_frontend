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
      decksList: [],
      cardsToPlay: [...this.props.decks],
      cardsToReview: [],
    }
  }
  // getCardsToPlay() {
  //   this.setState({
  //     cardsToPlay: [...this.props.decks]
  //   });
  // };


  render() {
    let deckButtons = this.state.cardsToPlay.map(deck => {
      return <button key={deck.id}>{deck.title}</button>
    })
    
    console.log(this.state.cardsToPlay);
    let deckList = [...this.props.decks];
    console.log("this is in PlayPage.js  ", deckList);
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
              <ol className="instructions2">
                  <li>ArrowRight (very bottom right of keyboard) gets next card</li>
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

        </div>
        <div className="deckButtonDiv">{deckButtons}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PlayPage;