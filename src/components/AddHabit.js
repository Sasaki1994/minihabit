import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {registerHabit} from "../actions/HabitsAction";

const AddHabit = () => {
    const dispatch = useDispatch();
    const [habit, setState] = useState({name: "", number: 0, unit: ""});
    const handleChange = (e) => {
    setState({
          ...habit,
          [e.target.name]: e.target.value,
        });
    };

    return(
        <form onSubmit={(e) =>{
            e.preventDefault();
            dispatch(registerHabit(habit))
            }
        }>
            <label>習慣の名前</label>
            <input type="text" name="name" value={habit.name} onChange={handleChange}/>
            <label>数値</label>
            <input type="number" name="number" value={habit.number} onChange={handleChange}/>
            <label>単位</label>
            <input type="text" name="unit" value={habit.unit} onChange={handleChange}/>
            <button type="submit">登録</button>
        </form>
    )
};

export default AddHabit;
