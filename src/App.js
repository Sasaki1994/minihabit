import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./App.css";
import Top from "./pages/Top";
import New from "./pages/habits/New";

export const Habits = React.createContext([]);

const App = () => {
  const [habitList, setHabitList] = useState([]);

  return (
    <div className="App">
      <Habits.Provider value={[habitList, setHabitList]}>
        <Router>
          <Route exact path={"/"}>
            <Top />
          </Route>
          <Route path={"/habits/new"}>
            <New />
          </Route>
        </Router>
      </Habits.Provider>
    </div>
  );
};

export default hot(module)(App);
