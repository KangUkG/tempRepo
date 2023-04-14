import styles from './MainLayout.module.css';

import React from "react";

import MHeader from "./header/MHeader";

const MainLayout = (props) => {

    return (
        <div className={styles.wrap}>
            <div className={styles.left_menu}>LeftMenu</div>
            <div className={styles.main_wrap}>
                <MHeader/>
                <main>
                    {props.children}
                </main>
            </div>
        </div>
    );
}
export default MainLayout;