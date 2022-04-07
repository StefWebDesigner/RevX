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
import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
} from "react-icons/fi";
import {FaList, FaRegHeart} from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
// import 'react-pro-sidebar/dist/css/styles.css';
// import './custom.css';



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
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>

                    {/*CONTAINS HEADER & RESPONSIVE LOGO*/}
                    <SidebarHeader>
                        <div className="logotext">
                            <p>{menuCollapse ? "Logo" : "Expanded Logo"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? <FiArrowRightCircle/> :
                                <FiArrowLeftCircle/>}
                        </div>

                        {/*CHANGE MENU ICON SHAPE*/}
                        <Menu iconShape="cirlce">
                            <MenuItem icon={<FaList/>}>
                                <li><Link to="/login">Login</Link></li>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                <li><Link to="/signup">Signup</Link></li>
                            </MenuItem>
                        </Menu>

                    </SidebarHeader>

                    {/*CONTAIN MAIN NAV CONTENT*/}
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome/>}>
                                <li><Link to="/">Home</Link></li>
                            </MenuItem>
                            <MenuItem icon={<FaRegHeart/>}>
                                <li><Link to="/admin">Admin Portal</Link></li>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                <li><a>Content</a></li>
                            </MenuItem>
                            <MenuItem icon={<BiCog/>}>
                                <li><a>Setting</a></li>

                            </MenuItem>
                        </Menu>
                    </SidebarContent>

                    {/*FOOTER SECTION*/}
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut/>}>
                                <li><a>Logout</a></li>
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>

        </>
    );
};

export default Navbar;
