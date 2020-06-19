import React from "react";

const AddHabit = (props) => (
  <div>
    <label>習慣の名前</label>
    <input type="text" value={props.name} onChange={props.handleNameChange} />
    <label>数値</label>
    <input type="number" value={props.number} onChange={props.handleNumberChange} />
    <label>単位</label>
    <input type="text" value={props.unit} onChange={props.handleUnitChange} />
    <button onClick={props.add}>登録</button>
  </div>
);

export default AddHabit;
