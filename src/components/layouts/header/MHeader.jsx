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

const MHeader = () => {
    return (
        <header>
            <div>
                <div className={styles.icon_left}>
                    <AiOutlineBars size={30}/>
                    <AiOutlineMail size={30}/>
                    <AiOutlineRead size={30}/>
                    <AiOutlineStar size={30}/>
                </div>
                <div className={styles.user_right}>
                    <AiOutlineSearch size={30}/>
                    <AiOutlineBell size={30}/>
                    <span>Hi jason@ui-lib.com</span>
                    <span>
                        {/* 이미지를 동적으로 불러와 넣을 방법? */}
                        <img src={NoImage} alt='no-setting'/>
                    </span>
                </div>
            </div>
        </header>
    );
};
export default MHeader;
