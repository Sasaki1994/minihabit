import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HabitListItem from "../components/HabitListItem";
import {useSelector} from "react-redux";

const Top = () => {
    const habitList = useSelector(state => state.habits);
    const user = useSelector(state => state.user);

    return (
    <div>
        <h2>Top Page</h2>
        <h3>{user.name}さん</h3>
        <Link to={"/habits/new"}>登録ページ</Link>
        <ul>
            {habitList.map((habit) => (
                <HabitListItem key={habit.name} name={habit.name} number={habit.number} unit={habit.unit} />
            ))}
        </ul>
    </div>
    );
};

export default Top;
