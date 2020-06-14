import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import New from "./pages/habits/New";
import Top from "./pages/Top";

class App extends Component{
  render(){
    return(
        // Setting Routes for pages
        <Router>
            {/* add routes below this */}
            <Route exact path="/">
              <Top />
            </Route>
            <Route exact path="/habits/new" >
              <New />
            </Route>
        </Router>
    );
  }
}

export default hot(module)(App);