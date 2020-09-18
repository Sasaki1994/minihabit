import React from "react";
import style from "./Modal.css";
import ModalInner from "./ModalInner";

const Modal = () => (
  <div className={style.overlay}>
    <div className={style.modal}>
      <ModalInner />
    </div>
  </div>
);

export default Modal;
