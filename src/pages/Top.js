import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../actions/ModalAction";

import HabitListItem from "../components/HabitListItem";
import HeaderCalender from "../components/HeaderCalender";
import Modal from "../components/Modal";
import Input from "../components/Input";
import RegisteringButton from "../components/RegisteringButton";
import CancelingButton from "../components/CancelingButton";
import style from "./Top.css";

const Top = () => {
  const habitList = useSelector((state) => state.habits);
  const user = useSelector((state) => state.user);
  const isModalOpen = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <div>
      {isModalOpen ? (
        <Modal>
          <Input
            className={style.inputMargin}
            label={"習慣の名前"}
            type={"text"}
            width={165}
            name={"name"}
          />
          <Input
            className={style.inputMargin}
            label={"数値"}
            type={"number"}
            width={55}
            name={"number"}
          />
          <Input
            className={style.inputMargin}
            label={"単位"}
            type={"text"}
            width={55}
            name={"unit"}
          />
          <RegisteringButton text={"登録"} />
          <CancelingButton className={style.buttonMargin} onClick={() => dispatch(closeModal())} />
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
          <HabitListItem
            key={habit.name}
            name={habit.name}
            number={habit.number}
            unit={habit.unit}
          />
        ))}
      </ul>
    </div>
  );
};

export default Top;
