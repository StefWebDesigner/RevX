import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import DataContext from "../../dataStore/dataStore";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';
import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
} from "react-icons/fi";
import { FaList, FaRegHeart } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import Logo from "./Logo";
// import Logo from "../img-components/Logo";

const Navbar = ({setShowLogin}) => {

    //NAV COLLAPSING STATE
    const [menuCollapse, setMenuCollaspe] = useState(false);

    //CALLING IN DATASTORE -> USED FOR NAV BAR CONDITION STATEMENT
    const { user, setUser } = useContext(DataContext);

    // //GETTING THE USER
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, []);

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
        setShowLogin(true);
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
                            <p>{menuCollapse ? <Logo/> : <Logo/>}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? <FiArrowRightCircle /> :
                                <FiArrowLeftCircle />}
                        </div>

                        {/*CHANGE MENU ICON SHAPE*/}
                        <Menu iconShape="cirlce">
                            <MenuItem icon={<BiCog/>}>
                                <a>Setting</a>
                            </MenuItem>

                            <MenuItem icon={<FaRegHeart/>}>
                                <Link to="/admin">Admin Portal</Link>
                            </MenuItem>
                        </Menu>


                    </SidebarHeader>

                    {/*CONTAIN MAIN NAV CONTENT*/}
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome/>}>
                                <Link to="/">Home</Link>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                <a>Content</a>
                            </MenuItem>

                        </Menu>
                    </SidebarContent>

                    {/*FOOTER SECTION*/}
                    <SidebarFooter>
                        <Menu iconShape="square">
                            {/*<MenuItem icon={<FaList/>}>*/}
                            {/*    <Link to="/login">Login</Link>*/}
                            {/*</MenuItem>*/}
                            {/*<MenuItem icon={<RiPencilLine/>}>*/}
                            {/*    <Link to="/signup">Signup</Link>*/}
                            {/*</MenuItem>*/}
                            <MenuItem icon={<FiLogOut/>}>
                                <Link to="/" onClick={() => logout()}>Logout</Link>
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Navbar;