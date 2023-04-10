import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';

const Router = () => {

    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/*' element={<Home/>}/>
        </Routes>
    );
}
export default Router;