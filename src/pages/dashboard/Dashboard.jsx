import styles from './Dashboard.module.css';

import React from "react";
import { AiFillExperiment } from "react-icons/ai";

const Dashboard = () => {


    return (
        <div className={styles.wrap}>
            <div className={styles.both_select}>
                <button>Dashboard</button>
                <button>Recent Updates</button>
            </div>
            <div className={styles.sales_wrap}>
                <div className={styles.sales_activity}>
                    <div>Sales Activity</div>
                    <div className={styles.sales_container}>
                        <div className={styles.item_wrap}>
                            <div className={styles.sales_item}>
                                <AiFillExperiment />
                                <span>10,495</span>
                                <span>to be packed</span>
                            </div>
                        </div>
                        <div className={styles.item_wrap}>
                            <div className={styles.sales_item}>
                                <AiFillExperiment />
                                <span>10,495</span>
                                <span>to be packed</span>
                            </div>
                        </div>
                        <div className={styles.item_wrap}>
                            <div className={styles.sales_item}>
                                <AiFillExperiment />
                                <span>10,495</span>
                                <span>to be packed</span>
                            </div>
                        </div>
                        <div className={styles.item_wrap}>
                            <div className={styles.sales_item}>
                                <AiFillExperiment />
                                <span>10,495</span>
                                <span>to be packed</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.inventory_sum}>
                    <div>Inventory Summary</div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <div>
                        <span>Top Selling Products</span>
                        <select>
                            <option>this month</option>
                            <option value="">last month</option>
                        </select>
                    </div>
                    <table>

                    </table>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;