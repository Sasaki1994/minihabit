import React, { Component} from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {hot} from "react-hot-loader";
import "./App.css";
import Top from "./pages/Top";
import New from "./pages/habits/New";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <Route exact path={"/"}>
            <Top />
          </Route>
          <Route path={"/habits/new"}>
            <New />
          </Route>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);