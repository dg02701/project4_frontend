import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";


class App extends Component  {
  constructor(props) {
    super();
    this.state = {
      decks: [],
    }
  }

  componentDidMount() {
    axios.get(`${backendUrl}/`).then((response) => {
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
          {/* <Link to="/"></Link> */}
          {/* <Link to=""></Link> */}
        </nav>
        This is FE app.js
        <main>
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
