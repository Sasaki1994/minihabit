import React, { useState, Children } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import style from "./Container.css";

const Container = ({ children }) => <div className={style.container}>{children}</div>;

export default Container;
