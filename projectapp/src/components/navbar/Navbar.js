import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/admin">Admin Portal</Link></li>
            </nav>
        </>
    );
};

export default Navbar;
