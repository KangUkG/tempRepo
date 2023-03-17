

import React from "react";

import Header from './Header/Header';

const FitLayout = (props) => {

    return (
        <>
        <Header/>
        <main>
            {props.children}
        </main>
        {/* footer? */}
        </>
    );
}
export default FitLayout;