import React from "react";
import styles from "./RegisteringButton.css"

const RegisteringButton = ({onClick, text, size=1, className=""}) => {
    return(
            <button className={styles.button + " " + className}
                    style={{
                      width:     `${size*70}px`,
                      height:`    ${size*30}px`,
                      fontSize:  `${size*14}pt`,
                      lineHeight:`${size*30}px`,
                    }}
                    onClick={onClick}>{text}</button>
    )
};

export default RegisteringButton;
