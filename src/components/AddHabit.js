import React from "react";

const AddHabit = ({ addHabit, habit, handleChange }) => (
  <form onSubmit={addHabit}>
    <label>習慣の名前</label>
    <input type="text" name="name" value={habit.name} onChange={handleChange} />
    <label>数値</label>
    <input type="number" name="number" value={habit.number} onChange={handleChange} />
    <label>単位</label>
    <input type="text" name="unit" value={habit.unit} onChange={handleChange} />
    <button type="submit">登録</button>
  </form>
);

export default AddHabit;
