import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import axios from "axios";
import HomePage from "./HomePage";
import PlayPage from "./PlayPage";
import CustomizePage from "./CustomizePage";
import AdminPage from "./AdminPage";
const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";

// console.log(backendUrl);

class App extends Component  {
  constructor(props) {
    super();
    this.state = {
      decks: [],
    }
  }
  componentDidMount() {
    axios.get(`${backendUrl}/decks`).then((response) => {
      this.setState({
        decks: response.data.decks,
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <nav>
        {/* // the link component produces an a element */}
        {/* <Link to="/playpage">Play</Link> */}
          {/* <Link to=""></Link> */}
        </nav>
        <main>
          <Switch>
          <Route
              exact
              path="/"
              render={(routerProps) => (
                <HomePage
                  // getSearchResults={this.getSearchResults}
                  // searchResultsArray={this.state.searchResultsArray}
                />
              )}
            />
            <Route
              exact
              path="/playpage"
              component={(routerProps) => (
                <PlayPage {...this.state} {...routerProps} />
              )}
            />
            <Route
              exact
              path="/customizepage"
              component={(routerProps) => (
                <CustomizePage/>
              )}
            />
            <Route
              exact
              path="/adminpage"
              component={(routerProps) => (
                <AdminPage/>
              )}
            />
          </Switch>
          {/* // routes render the specified component we pass in */}
          {/* <Route path="" render={"from App.js"}/> */}
          {/* // we can give either a render or a component prop. */}
          {/* <Route path="" component={}/> */}
        </main>
      </div>
    );
  }

}

export default App;
