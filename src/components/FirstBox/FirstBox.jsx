import styles from "./FirstBox.module.css";

import React, { useState } from "react";

import Button from '../UI/Button/Button';
import CoachingImg from "../../asset/images/fb_1.png";
import PreminumImg from "../../asset/images/fb_2.jpeg";
import FreeImg from "../../asset/images/fb_3.jpeg";



const slideImages = [CoachingImg, PreminumImg, FreeImg]

const FirstBox = () => {
    
    const [slideIdx, setSlideIdx] = useState(0);

    const imageIdxIncreaseHanler = (e) => {
        const idx = (slideIdx+1) % slideImages.length;
        setSlideIdx(idx);
    }

    const imageIdxDecreaseHanler = (e) => {
        if (slideIdx <= 0) {
            setSlideIdx(slideImages.length-1);
            return;
        }
        setSlideIdx(prev => prev - 1);
    }

    return (
        <div className={styles.first_box}>
            <div className={`${styles.f_left} ${styles.item}`}>
                <p>SANDRA LYONS</p>
                <div className={styles.slider_img}>
                    <img src={slideImages[slideIdx]} alt="slider" />
                </div>
                <div className={styles.button_wrap}>
                    <button onClick={imageIdxDecreaseHanler}>&lt;</button>
                    <button onClick={imageIdxIncreaseHanler}>&gt;</button>
                </div>
            </div>
            <div className={`${styles.f_right} ${styles.item}`}>
                <p>hi i'm sandra lyons</p>
                <h1>Your go to online fitness trainer and nutritionist.</h1>
                <p>
                    After getting a bachelors in nutrition and fitness training
                    I started working with people all around and changing their
                    lives forever.
                </p>
                <Button text='online coaching'/>
            </div>
        </div>
    );
};
export default FirstBox;
