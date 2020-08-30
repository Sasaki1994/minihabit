import React from "react";
import style from "./Modal.css";

const Modal = ({ children }) => (
  <div className={style.overlay}>
    <div className={style.modal}>{children}</div>
  </div>
);

export default Modal;
