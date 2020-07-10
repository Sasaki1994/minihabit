import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Routes from "./router/Routes";
import {Provider} from "react-redux";
import Store from "./Store";

const App = () => {
  return (
      <Provider store={Store}>
        <Routes />
      </Provider>
  );
};

export default hot(module)(App);
