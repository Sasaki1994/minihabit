import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { editHabit } from "../../actions/HabitsAction";
import Input from "../../components/Input";
import RegisteringButton from "../../components/RegisteringButton";
import CancelingButton from "../../components/CancelingButton";
import style from "./Edit.css";

const Edit = () => {
  const { habitId } = useParams();
  const habitList = useSelector((state) => state.habits);
  const initialHabit = habitList.find((habit) => habit.id === Number(habitId));
  const [habit, setHabit] = useState(initialHabit);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={style.pageContainer}>
      <h2 className={style.title}>習慣を編集する</h2>
      <Input
        className={style.inputMargin}
        label={"習慣の名前"}
        type={"text"}
        width={165}
        name={"name"}
        value={habit.name}
        onChange={(e) => setHabit({ ...habit, name: e.target.value })}
      />
      <Input
        className={style.inputMargin}
        label={"数値"}
        type={"number"}
        width={55}
        name={"number"}
        value={habit.number}
        onChange={(e) => setHabit({ ...habit, number: e.target.value })}
      />
      <Input
        className={style.inputMargin}
        label={"単位"}
        type={"text"}
        width={55}
        name={"unit"}
        value={habit.unit}
        onChange={(e) => setHabit({ ...habit, unit: e.target.value })}
      />
      <RegisteringButton
        text={"登録"}
        onClick={() => dispatch(editHabit(habit)) && history.push("/")}
      />
      <CancelingButton
        className={style.buttonMargin}
        onClick={() => setHabit(editHabit)}
      />
    </div>
  );
};

export default Edit;
