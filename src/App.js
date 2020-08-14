import React from "react";
import { hot } from "react-hot-loader";
import "./Base.css";
import "./App.css";
import Routes from "./router/Routes";
import { Provider } from "react-redux";
import Store from "./Store";

const App = () => {
  // actionがdispatchされるたびにstateをconsoleに表示
  console.log(Store.getState());
  Store.subscribe(() => {
    console.log(Store.getState());
  });

  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default hot(module)(App);
