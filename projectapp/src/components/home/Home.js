import React from 'react';
import Main from "./Main";
import Footer from "./Footer";
import Navbar from "../navbar/Navbar";
import Login from '../users-comps/Login';

const Home = () => {
    return (
        <>
            <Login />
            <Navbar/>
            <Main/>
            <Footer/>

            
        </>
    );
};

export default Home;
