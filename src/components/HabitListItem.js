import React from "react";

import { useDispatch } from "react-redux";
import { openModal } from "../actions/ModalAction";

import commonStyle from "./Common.css";
import style from "./HabitListItem.css";

const HabitListItem = ({ name, number, unit }) => {
  const dispatch = useDispatch();
  return (
    <li className={`${style.habitList_item} ${commonStyle.fl_alignCenter}`}>
      <button
        type={"button"}
        className={`${style.habitList_btn} ${commonStyle.fl_center} ${commonStyle.fl_alignCenter}`}
        onClick={() => dispatch(openModal())}
      >
        <i className={`${style.habitList_btn_check} fas fa-check-circle`} />
      </button>
      <div className={style.habitList_body}>
        <p className={style.habitList_content}>
          {name} {number} {unit}
        </p>
        <p className={style.habitList_numberOfAchievementDays}>◯日連続</p>
      </div>
    </li>
  );
};

export default HabitListItem;
