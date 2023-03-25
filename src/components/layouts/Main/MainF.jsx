import styles from './MainF.module.css';

import React from "react";

const MainF = (props) => {

    return (
        <main>
            <div className={styles.container}>
                {props.children}
            </div>
        </main>
    );

}
export default MainF;