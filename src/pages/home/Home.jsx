import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Hi Home!</h1>
            <Link to={'/dashboard'}>dashboard</Link>
        </div>
    );
};
export default Home;
