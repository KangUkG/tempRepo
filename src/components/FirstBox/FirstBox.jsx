import styles from './FirstBox.module.css';

import React from "react";

import CoachingImg from '../../asset/images/fb_1.png';

const FirstBox = () => {



    return (
        <div className={styles.first_box}>
                <div className={styles.f_left}>
                    <img src={CoachingImg} alt='coach'/> 
                </div>
                <div className={styles.f_right}>

                </div>
        </div>
    );
}
export default FirstBox;