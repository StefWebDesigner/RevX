import React, {useState} from 'react';
import Main from "./Main";
import Footer from "./Footer";
import Navbar from "../navbar/Navbar";
import Login from '../users-comps/Login';
import Signup from '../users-comps/Signup';

const Home = () => {

    const [showLogin, setShowLogin] = useState(true);
    const [showSignup, setShowSignup] = useState(false);

    return (
        <>
            <Login 
                showLogin={showLogin} 
                setShowLogin={setShowLogin}
                setShowSignup={setShowSignup}
            />
            <Signup 
                showSignup={showSignup}
                setShowSignup={setShowSignup}
                setShowLogin={setShowLogin}
            />
            <Navbar/>
            <Main/>
            <Footer/>

            
        </>
    );
};

export default Home;
