import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Habits } from "../App";
import HabitListItem from "../components/HabitListItem";

const Top = () => {
  const [habitList, setHabitList] = useContext(Habits);

  return (
    <div>
      <h2>Top Page</h2>
      <Link to={"/habits/new"}>登録ページ</Link>
      <ul>
        {habitList.map((habit) => (
          <HabitListItem name={habit.name} number={habit.number} unit={habit.unit} />
        ))}
      </ul>
    </div>
  );
};

export default Top;
