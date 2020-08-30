import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../actions/ModalAction";
import { registerRecord } from "../actions/RecordsAction";

import HabitListItem from "../components/HabitListItem";
import HeaderCalender from "../components/HeaderCalender";
import Modal from "../components/Modal";
import Input from "../components/Input";
import RegisteringButton from "../components/RegisteringButton";
import CancelingButton from "../components/CancelingButton";
import style from "./Top.css";

const Top = () => {
  const habits = useSelector((state) => state.habits);
  const user = useSelector((state) => state.user);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const habitList = habits.allIds.map((id) => habits.byId[id]);
  const recordHabit = habits.byId[modal.habitId];

  const [recordNumber, setRecNum] = useState(
    recordHabit ? recordHabit.number : 1
  );

  return (
    <div>
      {modal.isOpen ? (
        <Modal>
          <h2 className={""}>{recordHabit.name}</h2>
          <p>目標: {`${recordHabit.number}${recordHabit.unit}`}</p>
          <Input
            className={style.inputMargin}
            label={"実績値"}
            type={"number"}
            width={55}
            name={"number"}
            value={recordNumber}
            onChange={(e) => setRecNum(e.target.value)}
          />
          <span>{recordHabit.unit}</span>
          <RegisteringButton
            text={"登録"}
            onClick={() =>
              dispatch(registerRecord(recordHabit.id, recordNumber))
            }
          />
          <CancelingButton
            className={style.buttonMargin}
            onClick={() => dispatch(closeModal())}
          />
        </Modal>
      ) : (
        ``
      )}

      <h2>Top Page</h2>
      <h3>{user.name}さん</h3>
      <Link to={"/habits/new"}>登録ページ</Link>
      <HeaderCalender />
      <ul className={style.habitList}>
        {habitList.map((habit) => (
          <HabitListItem key={habit.id} habit={habit} />
        ))}
      </ul>
    </div>
  );
};

export default Top;
