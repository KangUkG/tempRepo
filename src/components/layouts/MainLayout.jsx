

import React from "react";

import MHeader from "./header/MHeader";

const MainLayout = (props) => {

    return (
        <div>
            <MHeader/>
            <main>
                {props.children}
            </main>
        </div>
    );
}
export default MainLayout;