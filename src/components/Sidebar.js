import React, { useState, Children } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import style from "./Sidebar.css";

const Sidebar = ({ children }) => <aside className={style.sidebar}>{children}</aside>;

export default Sidebar;
