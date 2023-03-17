import styles from './Header.module.css';

import React from "react";

import { AiOutlineShoppingCart } from 'react-icons/ai'
import TitleImg from '../../../asset/images/title.png'

const Header = () => {

    return (
        <header>
            <div className={styles.header_wrap}>
                <div className={styles.header_left}>
                    <img src={TitleImg} alt='title_img'/>
                </div>
                <div className={styles.header_right}>
                    <ul>
                        <li><a href='#'>about</a></li>
                        <li><a href='#'>free workouts</a></li>
                        <li><a href='#'>shop</a></li>
                        <li><a href='#'>&gt; &nbsp; book a call</a></li>
                        <li><AiOutlineShoppingCart/></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;