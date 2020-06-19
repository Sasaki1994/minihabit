import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddHabit from "../../components/AddHabit";
import HabitListItem from "../../components/HabitListItem";

const New = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [unit, setUnit] = useState("");
  const [habitList, setHabitList] = useState([]);

  const add = () => {
    const newHabit = { name, number, unit };
    const newHabitList = [...habitList, newHabit];
    setHabitList(newHabitList);
    setName("");
    setNumber(0);
    setUnit("");
  };

  const handleNameChange = (e) => {
    const newValue = e.target.value;
    setName(newValue);
  };
  const handleNumberChange = (e) => {
    const newValue = e.target.value;
    setNumber(newValue);
  };
  const handleUnitChange = (e) => {
    const newValue = e.target.value;
    setUnit(newValue);
  };

  return (
    <div>
      <h2>Register Page</h2>
      <Link to={"/"}>トップページ</Link>
      <AddHabit
        name={name}
        number={number}
        unit={unit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleUnitChange={handleUnitChange}
        add={add}
      />
      <ul>
        {habitList.map((habit) => (
          <HabitListItem name={habit.name} number={habit.number} unit={habit.unit} />
        ))}
      </ul>
    </div>
  );
};

export default New;
