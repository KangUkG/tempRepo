import styles from './Button.module.css';

import React from "react";

const Button = (props) => {
    return (
        <button className={styles.button_ui}>
            &gt; &nbsp; {props.text}
        </button>
    );
};
export default Button;
