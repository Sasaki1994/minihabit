import React from "react";

const HabitListItem = ({ name, number, unit }) => (
  <li>
    習慣の名前：{name}
    <br />
    数値：{number}
    <br />
    単位：{unit}
  </li>
);

export default HabitListItem;
