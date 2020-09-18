import React, { useState } from "react";
import style from "./ModalInner.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../actions/ModalAction";

const ModalInner = () => {
  const habits = useSelector((state) => state.habits);
  const user = useSelector((state) => state.user);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const recordHabit = habits.byId[modal.habitId];

  let modalInner = ``;
  console.log(modal);

  if (modal.isInputDataOpen === true) {
    modalInner = (
      <div>
        <h2 className={style.modal_title}>{recordHabit.name}</h2>
        <p className={style.modal_text}>目標: {`${recordHabit.number}${recordHabit.unit}`}</p>
        <div className={`${style.modal_input_wrapper} ${style.flex}`}>
          <label className={style.modal_text}>実績値：</label>
          <input type="number" className={`${style.modal_input} ${style.modal_input_sm}`} />
          <span className={style.modal_text}>{recordHabit.unit}</span>
        </div>
        <button className={style.modal_btn}>登録</button>
        <button className={style.modal_cancel} onClick={() => dispatch(closeModal())}>
          キャンセル
        </button>
      </div>
    );
  } else if (modal.isCreateHabitOpen) {
    modalInner = (
      <>
        <h2 className={style.modal_title}>習慣を新しく作成</h2>
        <div>
          <div className={`${style.modal_input_wrapper} ${style.flex}`}>
            <label className={style.modal_text}>習慣の名前：</label>
            <input type="text" className={`${style.modal_input} ${style.modal_input_md}`} />
          </div>
          <div className={`${style.modal_input_wrapper} ${style.flex}`}>
            <label className={style.modal_text}>数値：</label>
            <input type="number" className={`${style.modal_input} ${style.modal_input_sm}`} />
          </div>
          <div className={`${style.modal_input_wrapper} ${style.flex}`}>
            <label className={style.modal_text}>単位：</label>
            <input type="text" className={`${style.modal_input} ${style.modal_input_md}`} />
          </div>
        </div>
        <button className={style.modal_btn}>登録</button>
        <button className={style.modal_cancel} onClick={() => dispatch(closeModal())}>
          キャンセル
        </button>
      </>
    );
  } else if (modal.isEditHabitOpen) {
    modalInner = (
      <>
        <h2 className={style.modal_title}>習慣を新しく作成</h2>
        <div className={style.flex}>
          <div>
            <label>習慣の名前：</label>
            <input className={style.modal_input} />
          </div>
          <div>
            <label>数値：</label>
            <input className={style.modal_input} />
          </div>
          <div>
            <label>単位：</label>
            <input className={style.modal_input} />
          </div>
        </div>
        <button>登録</button>
        <button>キャンセル</button>
      </>
    );
  } else {
    modalInner = ``;
  }
  return modalInner;
};

export default ModalInner;
