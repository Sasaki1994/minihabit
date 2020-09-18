import React, { useState, Children } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import style from "./Main.css";

const Main = ({ children }) => (
  <main className={style.main}>
    <div className={style.main__inner}>{children}</div>
  </main>
);

export default Main;
