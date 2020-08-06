import React from "react";
import styles from "./Input.css"

const Input = ({label, type, name, value, onChange, width=55, height=25, fontSize=12, className=""}) => {
    return(
            <div className={styles.container + " " + className}>
              <label className={styles.label} style={{fontSize:`${fontSize}pt`}}>{label}</label>
              <input className={styles.inputBox}
                     style={{
                        width: `${width}px`,
                        height:`${height}px`,
                        fontSize:`${fontSize}pt`,
                     }}
                     type={type}
                     name={name}
                     value={value}
                     onChange={onChange} />
            </div>
    )
};

export default Input;
