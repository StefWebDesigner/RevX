import React from 'react';
import {Link} from "react-router-dom";

const AdminNavbar = () => {
    return (
        <>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><a href="">Something</a></li>
                <li><a href="">Something</a></li>
                <li><a href="">Stats</a></li>
            </nav>
        </>
    );
};

export default AdminNavbar;
