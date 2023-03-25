import styles from './Home.module.css';

import React from "react";

import FirstBox from '../../components/FirstBox/FirstBox';

const Home = () => {

    return (
        <>
            <FirstBox/>
            <div className={styles.second_box}>
                Hi
            </div>

        </>
    );
}
export default Home;