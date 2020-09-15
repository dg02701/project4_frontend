import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
      // the link component produces an a element
        {/* <Link to="/"></Link> */}
        {/* <Link to=""></Link> */}
      </nav>
      <main>
        // routes render the specified component we pass in
        <Route path="" render={"from App.js"}/>
        // we can give either a render or a component prop.
        {/* <Route path="" component={}/> */}
      </main>
    </div>
  );
}

export default App;
