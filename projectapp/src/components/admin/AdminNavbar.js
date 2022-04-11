import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
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
import DataContext from "../../dataStore/dataStore";
import Logo from "../navbar/Logo";

const Navbar = ({setShowLogin}) => {

    //NAV COLLAPSING STATE
    const [menuCollapse, setMenuCollaspe] = useState(false);

    //CALLING IN DATASTORE -> USED FOR NAV BAR CONDITION STATEMENT
    const { user, setUser } = useContext(DataContext);

    //NAV STRUCTURE SECTIONS
    const menuIconClick = () => {
        menuCollapse ? setMenuCollaspe(false) : setMenuCollaspe(true);
    }

    //logout and send to login home
    function logout() {
        setUser(null);
        localStorage.removeItem("user");
        setShowLogin(true);
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
                            {menuCollapse ? <FiArrowRightCircle/> :
                                <FiArrowLeftCircle/>}
                        </div>

                        {/*CHANGE MENU ICON SHAPE*/}
                        <Menu iconShape="square">
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
                                <Link to="/userpanel">User Panel</Link>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                <Link to="/contentpanel">Content Panel</Link>
                            </MenuItem>

                        </Menu>
                    </SidebarContent>

                    {/*SLIDEHEADER PUSHS IT DONW*/}
                    <SidebarHeader>
                        <Menu iconShape="square">
                            <MenuItem icon={<FaRegHeart/>}>
                                <li><Link to="/chat">Chat</Link></li>
                            </MenuItem>
                        </Menu>
                    </SidebarHeader>

                    {/*FOOTER SECTION*/}
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<BiCog/>}>
                                <a>Setting</a>
                            </MenuItem>
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