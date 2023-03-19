import styles from "./Footer.module.css";

import FooterImg from "../../../asset/images/footer_title.png";

import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_wrap}>
                <div className={styles.footer_main}>
                    <div>
                        <img src={FooterImg} alt="footer_img" />
                    </div>
                    <div>
                        <div className={styles.one}>contact</div>
                        <div className={styles.two}>contact@fitnesso.com</div>
                        <div className={styles.one}>licencing</div>
                        <div className={styles.three}>
                            <ul>
                                <li>copyright flow ninja</li>
                                <li>powered by webflow</li>
                                <li>licencing</li>
                                <li>support</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.one}>explore</div>
                        <div className={styles.three}>
                            <ul>
                                <li>preminum courses</li>
                                <li>free courses</li>
                                <li>blog</li>
                                <li>about</li>
                                <li>contact</li>
                                <li>style guide</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_card}>cards..</div>
            </div>
        </footer>
    );
};
export default Footer;
