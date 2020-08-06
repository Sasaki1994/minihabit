import React from "react";
import {useSelector} from "react-redux";
import Input from "../../components/Input";
import RegisteringButton from "../../components/RegisteringButton";
import CancelingButton from "../../components/CancelingButton";
import style from "./Edit.css"

const Edit = () => {

    return (
    <div className={style.pageContainer}>
      <h2 className={style.title}>習慣を編集する</h2>
      <Input className={style.inputMargin} label={"習慣の名前"} type={"text"} width={165} name={"name"} value={'腕立て伏せ'} onChange={()=>console.log("ok")} />
      <Input className={style.inputMargin} label={"数値"} type={"number"} width={55} name={"number"} value={3} onChange={()=>console.log("ok")} />
      <Input className={style.inputMargin} label={"単位"} type={"text"} width={55} name={"unit"} value={'回'} onChange={()=>console.log("ok")} />
      <RegisteringButton text={"登録"} onClick={()=>console.log("ok")} />
      <CancelingButton className={style.buttonMargin} onClick={()=>console.log("ok")} />
    </div>
    );
};

export default Edit;
