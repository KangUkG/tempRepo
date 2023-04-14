import styles from './MHeader.module.css';

import React from "react";
import {
    AiOutlineMail,
    AiOutlineBars,
    AiOutlineStar,
    AiOutlineRead,
    AiOutlineSearch,
    AiOutlineBell
} from "react-icons/ai";

import NoImage from '../../../assets/images/noimage.png';

const header_icon_size = 25;

const MHeader = () => {
    return (
        <header className={styles.header_wrap}>
            <div className={styles.header_main}>
                <div className={styles.icon_left}>
                    <AiOutlineBars size={header_icon_size} className={`${styles.hover_item}`}/>
                    <AiOutlineMail size={header_icon_size} className={`${styles.hover_item}`}/>
                    <AiOutlineRead size={header_icon_size} className={`${styles.hover_item}`}/>
                    <AiOutlineStar size={header_icon_size} className={`${styles.hover_item}`}/>
                </div>
                <div className={styles.user_right}>
                    <AiOutlineSearch size={header_icon_size} className={`${styles.hover_item}`}/>
                    <AiOutlineBell size={header_icon_size} className={`${styles.hover_item}`}/>
                    <div className={`${styles.user_char} ${styles.hover_item}`}>
                        <span>Hi jason@ui-lib.com</span>
                        <div className={styles.user_img}>
                            {/* 이미지를 동적으로 불러와 넣을 방법? */}
                            <img src={NoImage} alt='no-setting'/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default MHeader;
