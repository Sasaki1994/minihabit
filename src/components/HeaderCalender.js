import React from "react";
import HeaderCalenderItem from "./HeaderCalenderItem";
import style from "./HeaderCalender.css";
import commonStyle from "./Common.css";

const HeaderCalender = () => (
  <ul className={`${style.headerCalender} ${commonStyle.fl_end}`}>
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
    <HeaderCalenderItem />
  </ul>
);

export default HeaderCalender;
