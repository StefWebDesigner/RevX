import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import DataContext from "../../dataStore/dataStore";

const Navbar = () => {

    //CALLING IN DATASTORE -> USED FOR NAV BAR CONDITION STATEMENT
    const {user, setUser} = useContext(DataContext);

    //GETTING THE USER
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, []);

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }


    return (
        <>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>

                {/*LOGGING OUT BUTTON FROM NAV*/}
                <li><a onClick={logout}>Login</a></li>

                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/admin">Admin Portal</Link></li>
            </nav>
        </>
    );
};

export default Navbar;
