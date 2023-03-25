

import React from "react";

import Header from './Header/Header';
import Footer from "./Footer/Footer";
import MainF from "./Main/MainF";

const FitLayout = (props) => {

    return (
        <>
        <Header/>
        <MainF >
            {props.children}
        </MainF>
        <Footer/>
        </>
    );
}
export default FitLayout;