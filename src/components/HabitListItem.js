import React from "react";

import { useDispatch } from "react-redux";
import { openInputDataModal, openEditHabitModal } from "../actions/ModalAction";

import commonStyle from "./Common.css";
import style from "./HabitListItem.css";

const HabitListItem = ({ habit }) => {
  const { id, name, number, unit } = habit;
  const dispatch = useDispatch();
  return (
    <li className={`${style.habitList_item}`}>
      <div className={`${style.habitList_inner} ${commonStyle.fl_spaceBetween}`}>
        <div>
          <div className={`${style.habitList_body} ${commonStyle.fl_alignCenter}`}>
            <button
              type={"button"}
              className={`${style.habitList_btn} ${commonStyle.fl_center} ${commonStyle.fl_alignCenter}`}
              onClick={() => dispatch(openInputDataModal(id))}
            >
              <i className={`${style.habitList_btn_check} fas fa-check-circle`} />
            </button>

            <p className={style.habitList_content}>
              {name} {number} {unit}
            </p>
          </div>
          <p className={`${style.habitList_numberOfAchievementDays} ${commonStyle.fl_alignCenter}`}>
            <i className={`${style.habitList_numberOfAchievementDays_icon} material-icons`}>
              calendar_today
            </i>
            2日連続
          </p>
        </div>
        <div className={commonStyle.fl_alignCenter}>
          <i
            className={`${style.habitList_editIcon} material-icons`}
            onClick={() => dispatch(openEditHabitModal(id))}
          >
            edit
          </i>
          <i className={`${style.habitList_deleteIcon} material-icons`}>delete</i>
        </div>
      </div>
    </li>
  );
};

export default HabitListItem;
