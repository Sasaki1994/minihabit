import React from "react";
import styles from "./CancelingButton.css"

const CancelingButton = ({onClick, size=1, className=""}) => {
    return(
            <button className={styles.button + " " + className}
                    style={{fontSize:`${size*12}pt`}}
                    onClick={onClick}>キャンセル</button>
    )
};

export default CancelingButton;
