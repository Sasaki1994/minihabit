import React from "react";
import { hot } from "react-hot-loader";
import "./Base.css";
import "./App.css";
import Routes from "./router/Routes";
import { Provider } from "react-redux";
import Store from "./Store";
import { db } from "../firebase.config";

const App = () => {
  // actionがdispatchされるたびにstateをconsoleに表示
  console.log(Store.getState());
  Store.subscribe(() => {
    console.log(Store.getState());
  });

  // firestoreからデータを取得するサンプルコード
  const dbHabits = db
    .collection("users")
    .where("name", "==", "佐々木")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ":", doc.data());
      });
    })
    .catch((error) => {
      console.log(`データの取得に失敗しました (${error})`);
    });
  console.log(dbHabits);

  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default hot(module)(App);
