import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

import Input from "../../components/Input";
import RegisteringButton from "../../components/RegisteringButton";
import CancelingButton from "../../components/CancelingButton";
import style from "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const initialUser = { email: "", password: "" };
  const [user, setUser] = useState(initialUser);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={style.pageContainer}>
      <h2 className={style.title}>ログイン</h2>
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

      <RegisteringButton
        text={"ログイン"}
        onClick={() => login(user.email, user.password) && history.push("/")}
      />
      <CancelingButton
        className={style.buttonMargin}
        onClick={() => setUser(initialUser)}
      />
    </div>
  );
};

export default Login;
