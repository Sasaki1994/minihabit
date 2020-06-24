import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddHabit from "../../components/AddHabit";
import HabitListItem from "../../components/HabitListItem";

const New = () => {
  const [habit, setState] = useState({ name: "", number: 0, unit: "" });
  const [habitList, setHabitList] = useState([]);

  const addHabit = (e) => {
    e.preventDefault();
    const newHabit = { ...habit };
    const newHabitList = [...habitList, newHabit];
    setHabitList(newHabitList);
  };

  const handleChange = (e) => {
    setState({
      ...habit,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Register Page</h2>
      <Link to={"/"}>トップページ</Link>
      <AddHabit habit={habit} handleChange={handleChange} addHabit={addHabit} />
      <ul>
        {habitList.map((habit) => (
          <HabitListItem name={habit.name} number={habit.number} unit={habit.unit} />
        ))}
      </ul>
    </div>
  );
};

export default New;
