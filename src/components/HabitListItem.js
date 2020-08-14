import React from "react";

const onClickBtn = (e) => {
  const btn = e.target;
  btn.classList.toggle("js_done");
};

const HabitListItem = ({ name, number, unit }) => (
  <li className="habitList_item fl_alignCenter">
    <button
      type="button"
      className="habitList_btn fl_center fl_alignCenter"
      onClick={(e) => {
        onClickBtn(e);
      }}
    >
      <i class="habitList_btn_check fas fa-check-circle"></i>
    </button>
    <div className="habitList_body">
      <p className="habitList_content">
        {name} {number} {unit}
      </p>
      <p className="habitList_numberOfAchievementDays">◯日連続</p>
    </div>
  </li>
);

export default HabitListItem;
