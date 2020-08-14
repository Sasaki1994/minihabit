import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { registerUser } from "../../actions/UsersAction";
import Input from "../../components/Input";
import RegisteringButton from "../../components/RegisteringButton";
import CancelingButton from "../../components/CancelingButton";
import style from "./New.css";

const New = () => {
  const initialUser = { name: "", email: "", password: "", confirmation: "" };
  const [user, setUser] = useState(initialUser);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={style.pageContainer}>
      <h2 className={style.title}>ユーザーを登録する</h2>
      <Input
        className={style.inputMargin}
        label={"名前"}
        type={"text"}
        width={165}
        name={"name"}
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <Input
        className={style.inputMargin}
        label={"メール"}
        type={"email"}
        width={165}
        name={"email"}
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <Input
        className={style.inputMargin}
        label={"パスワード"}
        type={"password"}
        width={165}
        name={"password"}
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Input
        className={style.inputMargin}
        label={"パスワード確認"}
        type={"password"}
        width={165}
        name={"confirmation"}
        value={user.confirmation}
        onChange={(e) => setUser({ ...user, confirmation: e.target.value })}
      />
      <RegisteringButton
        text={"登録"}
        onClick={() => dispatch(registerUser(user)) && history.push("/")}
      />
      <CancelingButton
        className={style.buttonMargin}
        onClick={() => setUser(initialUser)}
      />
    </div>
  );
};

export default New;
