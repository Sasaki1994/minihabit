import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openCreateHabitModal } from "../actions/ModalAction";

import commonStyle from "./Common.css";
import style from "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className={`${style.header} ${commonStyle.fl_spaceBetween}`}>
      <i className={`${style.header_homeIcon} material-icons`}>home</i>
      <i
        className={`${style.header_homeIcon} material-icons`}
        onClick={() => dispatch(openCreateHabitModal())}
      >
        add
      </i>
    </header>
  );
};

export default Header;
