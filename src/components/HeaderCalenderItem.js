import React from "react";
import style from "./HeaderCalenderItem.css";

const HeaderCalenderItem = () => (
  <li className={style.headerCalender_item}>
    <span className={style.headerCalender_day}>月</span>
    <span className={style.headerCalender_date}>25</span>
  </li>
);

export default HeaderCalenderItem;
