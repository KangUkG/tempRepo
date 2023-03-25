import styles from "./Header.module.css";

import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import TitleImg from "../../../asset/images/title.png";
import Button from "../../UI/Button/Button";

const Header = () => {
    return (
        <header>
            <div className={styles.header_wrap}>
                <div className={styles.header_left}>
                    <img src={TitleImg} alt="title_img" />
                </div>
                <div className={styles.header_right}>
                    <ul>
                        <li>
                            <a href="#" className={styles.navbar}>
                                about
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.navbar}>
                                free workouts
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.navbar}>
                                shop
                            </a>
                        </li>
                        <li>
                            <Button text='book a call'/>
                        </li>
                        <li>
                            <AiOutlineShoppingCart />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
export default Header;
