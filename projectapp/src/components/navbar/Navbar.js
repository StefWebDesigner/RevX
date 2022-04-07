import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import DataContext from "../../dataStore/dataStore";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const Navbar = () => {

    //NAV COLLAPSING STATE
    const [menuCollapse, setMenuCollaspe] = useState(false);

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

    //NAV STRUCTURE SECTIONS


    return (
        <>
            {/*<Menu>*/}
            {/*    <li><Link to="/">Home</Link></li>*/}
            {/*    <li><Link to="/login">Login</Link></li>*/}

            {/*    /!*LOGGING OUT BUTTON FROM NAV*!/*/}
            {/*    <li><a onClick={logout}>Login</a></li>*/}

            {/*    <li><Link to="/signup">Signup</Link></li>*/}
            {/*    <li><Link to="/admin">Admin Portal</Link></li>*/}
            {/*</Menu>*/}



        </>
    );
};

export default Navbar;
