import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../actions/ModalAction";
import { registerRecord } from "../actions/RecordsAction";
import { AuthContext } from "../auth/AuthProvider";

import Header from "../components/Header";
import Container from "../components/Container";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

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
  const { currentUser } = useContext(AuthContext);

  // sagaサンプル
  currentUser &&
    useEffect(() => {
      dispatch({
        type: "USER_FETCH_REQUESTED",
        payload: { userId: currentUser["uid"] },
      });
    }, []);

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Main>
          {modal.isOpen ? <Modal /> : ``}
          <h3>{user.name}さん</h3>
          <HeaderCalender />
          <ul className={style.habitList}>
            {habitList
              .map((habit) => <HabitListItem key={habit.id} habit={habit} />)
              .reverse()}
          </ul>
        </Main>
      </Container>
    </>
  );
};

export default Top;
