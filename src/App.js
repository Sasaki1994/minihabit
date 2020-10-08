import React from "react";
import { hot } from "react-hot-loader";
import "./Base.css";
import "./App.css";
import Routes from "./router/Routes";
import { Provider } from "react-redux";
import store from "./Store";
import { db } from "../firebase.config";

const App = () => {
  // actionがdispatchされるたびにstateをconsoleに表示;
  store.subscribe(() => {
    console.log(store.getState());
  });

  // // firestoreからデータを取得するサンプルコード
  // const dbHabits = db
  //   .collection("users")
  //   .doc("1")
  //   .get()
  //   .then((doc) => {
  //     console.log(doc.data());
  //   })
  //   .catch((error) => {
  //     console.log(`データの取得に失敗しました (${error})`);
  //   });

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default hot(module)(App);
