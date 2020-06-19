import React from "react";

const HabitListItem = (props) => (
  <li>
    習慣の名前：{props.name}
    <br />
    数値：{props.number}
    <br />
    単位：{props.unit}
  </li>
);

export default HabitListItem;
