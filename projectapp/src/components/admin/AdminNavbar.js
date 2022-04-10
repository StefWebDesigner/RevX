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
import Logo from "../navbar/Logo";

const Navbar = () => {

    //NAV COLLAPSING STATE
    const [menuCollapse, setMenuCollaspe] = useState(false);


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
                            {menuCollapse ? <FiArrowRightCircle/> :
                                <FiArrowLeftCircle/>}
                        </div>

                        {/*CHANGE MENU ICON SHAPE*/}
                        <Menu iconShape="square">
                            <MenuItem icon={<FaRegHeart/>}>
                                <li><Link to="/admin">Admin Portal</Link></li>
                            </MenuItem>
                        </Menu>


                    </SidebarHeader>

                    {/*CONTAIN MAIN NAV CONTENT*/}
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome/>}>
                                <li><Link to="/">Home</Link></li>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                <li><Link to="/userpanel">User Panel</Link></li>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                <li><Link to="/contentpanel">Content Panel</Link></li>
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
                                <li><a>Setting</a></li>
                            </MenuItem>
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