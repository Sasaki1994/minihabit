import React from "react";
import {useSelector} from "react-redux";
import Input from "../../components/Input";
import RegisteringButton from "../../components/RegisteringButton";
import CancelingButton from "../../components/CancelingButton";
import style from "./New.css"

const New = () => {

    return (
    <div className={style.pageContainer}>
      <h2 className={style.title}>ユーザーを登録する</h2>
      <Input className={style.inputMargin} label={"名前"} type={"text"} width={165} name={"name"} value={'ささき'} onChange={()=>console.log("ok")} />
      <Input className={style.inputMargin} label={"メール"} type={"email"} width={165} name={"email"} value={'tatsuya.sasaki@di-v.co.jp'} onChange={()=>console.log("ok")} fontSize={12}/>
      <Input className={style.inputMargin} label={"パスワード"} type={"password"} width={165} name={"password"} value={'okokok'} onChange={()=>console.log("ok")} />
      <Input className={style.inputMargin} label={"パスワード確認"} type={"password"} width={165} name={"password"} value={'okokok'} onChange={()=>console.log("ok")} />
      <RegisteringButton text={"登録"} onClick={()=>console.log("ok")} />
      <CancelingButton className={style.buttonMargin} onClick={()=>console.log("ok")} />
    </div>
    );
};

export default New;
