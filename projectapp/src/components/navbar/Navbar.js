import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import DataContext from "../../dataStore/dataStore";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';
import icon from 'react-bootstrap'
import 'react-pro-sidebar/dist/css/styles.css';
import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
} from "react-icons/fi";
import {FaList, FaRegHeart} from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


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

    const menuIconClick = () => {
        menuCollapse ? setMenuCollaspe(false) : setMenuCollaspe(true);
    }

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

            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? <FiArrowRightCircle/> :
                                <FiArrowLeftCircle/>}
                        </div>
                    </SidebarHeader>

                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome/>}>
                                Home
                            </MenuItem>
                            <MenuItem icon={<FaList/>}>
                                Login
                            </MenuItem>
                            <MenuItem icon={<FaRegHeart/>}>
                                Admin
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                Content
                            </MenuItem>
                            <MenuItem icon={<BiCog/>}>
                                Settings
                            </MenuItem>
                        </Menu>
                    </SidebarContent>

                </ProSidebar>


            </div>

        </>
    );
};

export default Navbar;
